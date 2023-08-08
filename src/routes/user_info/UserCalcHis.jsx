import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelectBox, useCheckToken, useDatePicker } from "../../hooks/bundle_hooks";
import { Lnb, CurrentBox, Pagination } from "../../components/bundle_components";

const calTotalLength = (data, keys) => {
  return keys.reduce((acc, cur, idx) => {
    if (typeof data[cur] === "object" && !data[cur].hasOwnProperty("거주인원수")) {
      acc += Object.keys(data[cur]).length;
    } else {
      acc += 1;
    }
    return acc;
  }, 0);
};

const deleteObj = (obj, keys) =>
  keys.reduce((o, k) => {
    const { [k]: _, ...r } = o;
    return r;
  }, obj);

const handleData = data => {
  const keys = Object.keys(data),
    firstKey = keys[0],
    firstData = data[firstKey],
    totalCarbon = data["총계산"] ? data["총계산"].toLocaleString("ko-KR") : 0,
    neededTree = data["필요나무"] ? data["필요나무"].toLocaleString("ko-KR") : 0,
    firstDataKeys = Object.keys(firstData);
  let totalLength = calTotalLength(data, keys),
    firstDataLength = firstDataKeys.includes("거주인원수")
      ? 1
      : firstKey === "요리" && firstDataKeys.includes("계산")
      ? firstDataKeys.length - 1
      : firstDataKeys.length;
  data = deleteObj(data, [firstKey, "총계산", "필요나무"]);
  let firstDataCarbon = 0,
    firstDataArrange = [],
    firstDataArrangeShift = null,
    values = null,
    carbon = 0;

  if (firstData.hasOwnProperty("거주인원수")) {
    values = Object.values(firstData);
    carbon = values.pop(); // 계산
    firstDataCarbon = carbon;
    firstDataArrangeShift = { words: `${values.join(" / ")}`, carbon: firstDataCarbon.toLocaleString("ko-KR") || 0 };
  } else {
    if (firstData.hasOwnProperty("계산")) delete firstData["계산"];

    firstDataArrange = firstDataKeys.reduce((acc, cur, idx) => {
      if (firstData[cur] !== undefined) {
        values = Object.values(firstData[cur]);
        carbon = values.pop() || firstData[cur];
        firstDataCarbon += carbon;
        let tmpObj = {};
        tmpObj[idx] = { words: `${cur.replace(/\(여행\)/g, "")} / ${values.join(" / ")}`, carbon: carbon.toLocaleString("ko-KR") || 0 };
        acc.push(tmpObj);
      }
      return acc;
    }, []);

    firstDataArrangeShift = firstDataArrange.shift()[0]; // 첫번째 아이템 가져온 후 제거
  }
  const newData = { ...data };

  return {
    firstKey,
    totalLength,
    totalCarbon,
    neededTree,
    firstDataLength,
    firstDataCarbon,
    firstDataArrange,
    firstDataArrangeShift,
    newData,
  };
};

export default function UserCalcHis() {
  const [pageData, setPageData] = useState();
  const [curPage, setCurPage] = useState(1);
  const { pathname } = useLocation();
  const { date, start_at, end_at } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    order: ["최신 순", "오래된 순"],
  });
  const [beforeFilter, setBeforeFilter] = useState();
  const { mb_no, postData, resData, setResData } = useCheckToken();

  const user_no = Number(useParams().id);

  const loadHistory = async () => {
    const order = { "최신 순": "desc", "오래된 순": "asc" }[selectedValues["order"]];
    const data = {
      mb_no,
      user_no,
      start_at,
      end_at,
      order
    };
    const res = await postData("calculator/detail", data);
    if (!res || res?.code !== 200) return;
    setBeforeFilter({ ...data });
    setPageData(res.page);
    setCurPage(1);
    if (!res.data) setResData([]);
  };

  const loadPageData = async page => {
    const res = await postData("calculator/detail", { ...beforeFilter, cur_page: page});
    setPageData(res.page);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <>
      <Lnb lnbType={pathname.includes("Delete") ? "deleteUserInfo" : "userInfo"} />
      {/* <CurrentBox del={true} down={true} tit="탄소발자국 계산 내역" /> */}
      {/* <CurrentBox btns={["down"]} tit="탄소발자국 계산 내역" /> */}

      <div className="user_history_calc box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">{selecBoxHtml}</div>
          </div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search" onClick={loadHistory}>
            검색
          </button>
        </div>

        <div className="table_wrap line">
          <table className="table" id="table">
            <colgroup>
              {/* <col width={"80px"} /> */}
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"350px"} />
            </colgroup>
            <thead>
              <tr>
                {/* <th className="check">
                    <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                  </th> */}
                <th className="num">NO</th>
                <th>계산일</th>
                <th colSpan={4}>계산 상세 내역</th>
                <th>총 CO2 발생량 (kg)</th>
                <th>소나무 (그루)</th>
              </tr>
            </thead>
          </table>
        </div>

        {resData?.length > 0 ?
          resData?.map(el => {
            return <HistoryItem key={el.idx} idx={el.idx} date={el.create_at} data={el.carbon} />;
          }):<div className="no_data_wrap">데이터 없음</div>}

        <CurrentBox btns={["down"]} hideTit={true} />
        {pageData && <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} onClick={loadPageData} />}
        <Pagination />
      </div>
    </>
  );
}

const HistoryItem = ({ idx, date, data }) => {
  const { firstKey, totalLength, totalCarbon, neededTree, firstDataLength, firstDataCarbon, firstDataArrange, firstDataArrangeShift, newData } =
    handleData(data);

  return (
    <div className="table_wrap line" key={idx}>
      <table className="table" id="table">
        <colgroup>
          {/* <col width={"80px"} /> */}
          <col width={"auto"} />
          <col width={"auto"} />
          <col width={"auto"} />
          <col width={"auto"} />
          <col width={"350px"} />
        </colgroup>
        <tbody>
          <tr>
            {/* <td rowSpan={totalLength} className="check">
              <CheckBox for="wr_2" id="wr_2" name="wr_2" />
            </td> */}
            <td rowSpan={totalLength} className="num">
              {idx}
            </td>
            <td rowSpan={totalLength}>{date}</td>

            <td rowSpan={firstDataLength}>{firstKey}</td>
            <td rowSpan={firstDataLength}>{firstDataCarbon.toLocaleString("ko-KR") || 0}</td>

            <td>{firstDataArrangeShift.words}</td>
            <td>{firstDataArrangeShift.carbon}</td>

            <td rowSpan={totalLength}>{totalCarbon} kg</td>
            <td rowSpan={totalLength}>약 {neededTree} 그루</td>
          </tr>
          {firstDataArrange.map((el, idx) => {
            const obj = el[idx + 1];
            return (
              <tr key={idx}>
                <td>{obj.words}</td>
                <td>{obj.carbon}</td>
              </tr>
            );
          })}
          <SecondHistoryItem data={newData} />
        </tbody>
      </table>
    </div>
  );
};

const SecondHistoryItem = ({ data }) => {
  if(Object.keys(data).length <= 0) return false;

  const { firstKey, totalLength, totalCarbon, neededTree, firstDataLength, firstDataCarbon, firstDataArrange, firstDataArrangeShift, newData } =
    handleData(data);

  return (
    <>
      <tr>
        <td rowSpan={firstDataLength}>{firstKey}</td>
        <td rowSpan={firstDataLength}>{firstDataCarbon.toLocaleString("ko-KR") || 0}</td>
        <td>{firstDataArrangeShift.words}</td>
        <td>{firstDataArrangeShift.carbon}</td>
      </tr>

      {firstDataArrange.map((el, idx) => {
        const obj = el[idx + 1];
        return (
          <tr key={idx}>
            <td>{obj.words}</td>
            <td>{obj.carbon}</td>
          </tr>
        );
      })}

      {Object.keys(newData).length > 0 ? <SecondHistoryItem data={newData} /> : <></>}
    </>
  );
};
