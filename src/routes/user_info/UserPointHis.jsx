import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import {
  useCheckToken,
  useDatePicker,
  useSelectBox,
} from "../../hooks/bundle_hooks";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserPointHis() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { date, start_at, end_at } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    point_history: ["전체", "지급 내역", "사용 내역"],
  });
  const { mb_no, postData, resData, setResData } = useCheckToken();
  const [pageData, setPageData] = useState();
  const [curPage, setCurPage] = useState(1);
  const [beforeFilter, setBeforeFilter] = useState();
  const [checkedList, setCheckedList] = useState([]);
  const [addPointData, setAddPointData] = useState({
    po_datetime: "",
    po_content: "",
    po_point: null,
    po_minus_point: null,
    po_memo: "",
  });

  const handlePoinData = (e) => {
    const type = e.target.dataset.type;
    const value = type.includes("po_point")
      ? e.target.value.replace(/[^0-9]/, "")
      : e.target.value;
    setAddPointData({ ...addPointData, [type]: value });
  };

  const loadHisData = async () => {
    const filter = { 전체: "all", "지급 내역": "added", "사용 내역": "used" }[
      selectedValues.point_history
    ];
    const data = {
      mb_no,
      target_id: id,
      start_at: start_at,
      end_at,
      filter: filter,
    };
    const res = await postData("member/show/point", data);
    if (!res || res?.code !== 200) return;
    setBeforeFilter({ ...data });
    setPageData(res.page);
    setCurPage(1);
    if (!res.data.pointInfo[0]) setResData({ ...resData, pointInfo: [] });
  };

  const loadPageData = async (page) => {
    const res = await postData("member/show/point", {
      ...beforeFilter,
      cur_page: page,
    });
    setPageData(res.page);
  };

  const deleteHis = async () => {
    await postData("member/show/point/del", { mb_no, po_id: checkedList });
    loadHisData();
  };

  const addPoint = async () => {
    var exp = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
    if (!exp.test(addPointData.po_datetime))
      return alert("날짜는 YYYY-MM-DD 형식으로 입력해 주세요.");
    if (!addPointData.po_content)
      return alert("지급/사용내역란을 입력해 주세요.");
    if (!addPointData.po_point && !addPointData.po_minus_point)
      return alert("적립할 포인트를 입력해 주세요.");
    if (addPointData.po_point && addPointData.po_minus_point)
      return alert("포인트는 지급란과 차감란 중 한곳만 입력해 주세요.");
    const po_point = addPointData.po_point || -addPointData.po_minus_point;
    const pointRes = await postData("member/show/point/add", {
      mb_no,
      target_id: id,
      po_datetime: addPointData.po_datetime,
      po_content: addPointData.po_content,
      po_point: Number(po_point),
      po_memo: addPointData.po_memo || "",
    });
    if (pointRes.code === 200) alert("포인트를 지급했습니다.");
    window.location.reload();
  };

  const checkAll = (e) => {
    if (e.target.checked)
      setCheckedList(resData.pointInfo.map((el) => el.po_id));
    else setCheckedList([]);
  };

  const btnEvent = {
    del() {
      deleteHis();
    },
    give() {
      addPoint();
    },
  };

  useEffect(() => {
    loadHisData();
  }, []);

  return (
    <>
      <Lnb
        lnbType={pathname.includes("Delete") ? "deleteUserInfo" : "userInfo"}
      />
      <CurrentBox
        btns={["del", "down"]}
        tit="포인트 지급/사용 내역"
        {...btnEvent}
      />
      <div className="user_history_point box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <p className="user_point_total">
            총 보유 포인트 : <span>{resData?.userPoint.mb_point}</span>
          </p>
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button
            type="button"
            className="btn_ty01 btn_search"
            onClick={() => {
              loadHisData();
            }}
          >
            검색
          </button>
        </div>
        <div className="table_wrap line part">
          <table className="table" id="table">
            <colgroup>
              <col width={"100px"} />
              <col width={"100px"} />
              <col width={"200px"} />
              <col width={"auto"} />
              <col width={"200px"} />
              <col width={"200px"} />
              <col width={"300px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox
                    for="wr_all"
                    id="wr_all"
                    name="wr_all"
                    checked={resData?.pointInfo.length === checkedList.length}
                    onClick={checkAll}
                  />
                </th>
                <th className="num">NO</th>
                <th>날짜</th>
                <th>지급/사용 내역</th>
                <th>+ P</th>
                <th>- P</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr className="write_row">
                <td className="check">
                  <CurrentBox btns={["give"]} {...btnEvent} />
                </td>
                <td className="num">0</td>
                <td className="date">
                  <div className="input_ty02">
                    <input
                      type="text"
                      placeholder="YYYY-MM-DD"
                      value={addPointData.po_datetime}
                      data-type="po_datetime"
                      onChange={handlePoinData}
                    />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input
                      type="text"
                      placeholder="직접입력"
                      value={addPointData.po_content}
                      data-type="po_content"
                      onChange={handlePoinData}
                    />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input
                      type="text"
                      placeholder="직접입력"
                      value={addPointData.po_point}
                      data-type="po_point"
                      onChange={handlePoinData}
                    />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input
                      type="text"
                      placeholder="직접입력"
                      value={addPointData.po_minus_point}
                      data-type="po_minus_point"
                      onChange={handlePoinData}
                    />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input
                      type="text"
                      placeholder="직접입력"
                      value={addPointData.po_memo}
                      data-type="po_memo"
                      onChange={handlePoinData}
                    />
                  </div>
                </td>
              </tr>
              {resData?.pointInfo.map((el, idx) => {
                return (
                  <PointItem
                    key={idx}
                    data={el}
                    checkedList={checkedList}
                    setCheckedList={setCheckedList}
                  />
                );
              })}
              {/* <PointItem checkedList={checkedList} setCheckedList={setCheckedList} />
              <PointItem checkedList={checkedList} setCheckedList={setCheckedList} />
              <PointItem checkedList={checkedList} setCheckedList={setCheckedList} /> */}
            </tbody>
          </table>

          {!resData?.pointInfo[0] && (
            <div className="no_data_wrap">데이터 없음</div>
          )}
        </div>

        <CurrentBox
          btns={["del", "down"]}
          tit="포인트 지급/사용 내역"
          hideTit={true}
          {...btnEvent}
        />
        {pageData && (
          <Pagination
            pageData={pageData}
            curPage={curPage}
            setCurPage={setCurPage}
            onClick={loadPageData}
          />
        )}
      </div>
    </>
  );
}

function PointItem({ data, checkedList, setCheckedList }) {
  const checkItem = (e) => {
    if (e.target.checked) setCheckedList([...checkedList, data.po_id]);
    else setCheckedList([...checkedList].filter((el) => el !== data.po_id));
  };

  return (
    <tr>
      <td className="check">
        <CheckBox
          for={data.po_id}
          id={data.po_id}
          name={data.po_id}
          checked={checkedList.includes(data.po_id)}
          onClick={checkItem}
        />
      </td>
      <td className="num">1</td>
      <td className="date">{data.po_datetime.replace(/-/g, ".")}</td>
      <td>{data.po_content}</td>
      <td>{data.po_point > 0 && data.po_point}</td>
      <td>{data.po_point < 0 && -1 * data.po_point}</td>
      <td></td>
    </tr>
  );
}
