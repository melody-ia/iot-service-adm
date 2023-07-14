import { useNavigate } from "react-router-dom";
import { Lnb, CurrentBox, CheckBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useDatePicker, useCheckToken } from "../../hooks/bundle_hooks";
import { useState, useEffect } from "react";

export default function News() {
  const navigate = useNavigate();
  const { mb_no, postData, resData } = useCheckToken();
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    signUp_date: ["최근 등록일 순", "오래된 등록일 순"],
    division_sort: ["전체", "이벤트", "뉴스"],
    open_state: ["공개", "비공개"],
  });
  const [pageData, setPageData] = useState();
  const [checkedList, setCheckedList] = useState([]);
  const [curPage, setCurPage] = useState(1);

  const checkAll = e => {
    if (e.target.checked) setCheckedList(resData.boardInfo.map(el => el.wr_id));
    else setCheckedList([]);
  };

  const btnEvent = {
    add() {
      navigate("/News/add");
    },
  };

  const loadPostData = async () => {
    const start_at = startDate.toLocaleDateString().split(".").join("-").replace(/\s/g, "").slice(0, -1);
    const end_at = endDate.toLocaleDateString().split(".").join("-").replace(/\s/g, "").slice(0, -1);
    const category = { 전체: "all", 이벤트: "event", 뉴스: "news" }[selectedValues.division_sort];
    const wr_status = { 공개: 0, 비공개: 1 }[selectedValues.open_state];
    const order = selectedValues.signUp_date === "최근 등록일 순" ? "desc" : "asc";
    const res = await postData("community/index", {
      mb_no,
      start_at,
      end_at,
      category,
      wr_status,
      order,
      cur_page: curPage,
    });
    setPageData(res.page);
  };

  useEffect(() => {
    loadPostData();
  }, [curPage]);

  console.log(1);

  if (pageData)
    return (
      <>
        <Lnb lnbType="board" />
        <CurrentBox btns={["add", "mod", "del", "down"]} tit="이벤트/뉴스 리스트" {...btnEvent} />
        <div className="news box_ty01 table_type table_comm">
          <div className="filter_wrap d-flex">
            <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
            <div className="date_input_wrap d-flex">
              <div className="date_input input_ty02">{date.start}</div>
              <div className="date_input input_ty02">{date.end}</div>
            </div>
            <button type="button" className="btn_ty01 btn_search" onClick={loadPostData}>
              검색
            </button>
          </div>
          <div className="table_wrap line part">
            <table className="table">
              <colgroup>
                <col width={"auto"} />
                <col width={"80px"} />
                <col width={"120px"} />
                <col width={"400px"} />
                <col width={"150px"} />
                <col width={"100px"} />
                <col width={"240px"} />
                <col width={"250px"} />
              </colgroup>
              <thead>
                <tr>
                  <th className="check">
                    <CheckBox for="wr_all" id="wr_all" name="wr_all" checked={resData.boardInfo.length === checkedList.length} onClick={checkAll} />
                  </th>
                  <th className="num">NO</th>
                  <th>구분</th>
                  <th>제목</th>
                  <th>등록일</th>
                  <th>상태</th>
                  <th>상태설정</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {resData.boardInfo.map((el, idx) => {
                  return <PostItem key={idx} data={el} checkedList={checkedList} setCheckedList={setCheckedList} />;
                })}
              </tbody>
            </table>
          </div>
          <CurrentBox btns={["add", "mod", "del", "down"]} hideTit={true} />
          <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} />
        </div>
      </>
    );
}

function PostItem({ data, checkedList, setCheckedList }) {
  const navigate = useNavigate();
  const division = { event: "이벤트", news: "뉴스" }[data.wr_subject];
  const [memo, setMemo] = useState(data.wr_1);

  const checkItem = e => {
    if (e.target.checked) setCheckedList([...checkedList, data.wr_id]);
    else setCheckedList([...checkedList].filter(el => el !== data.wr_id));
  };

  return (
    <tr>
      <td className="check">
        <CheckBox for={data.wr_id} id={data.wr_id} name={data.wr_id} checked={checkedList.includes(data.wr_id)} onClick={checkItem} />
      </td>
      <td className="num">2</td>
      <td>{division}</td>
      <td
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/News/NewsDetail", { state: { wr_subject: data.wr_subject, wr_id: data.wr_id } });
        }}
      >
        {data.wr_seo_title}
      </td>
      <td>{data.wr_datetime.replace(/-/g, " .") + "."}</td>
      {data.wr_subject === "event" ? <td>{data.wr_status === 0 ? "진행중" : "종료"}</td> : <td>{data.wr_status === 0 ? "공개" : "비공개"}</td>}
      <td>
        <div className="radio_group">
          <div className="radio_wrap">
            {data.wr_subject === "event"
              ? [
                  ["진행중", "show", 0],
                  ["종료", "hide", 3],
                ].map((el, idx) => {
                  return (
                    <RadioBtn
                      key={idx}
                      for={el[1] + data.wr_id}
                      id={el[1] + data.wr_id}
                      name={"isShow" + data.wr_id}
                      checked={data.wr_status === el[2]}
                      text={el[0]}
                    />
                  );
                })
              : [
                  ["공개", "show", 0],
                  ["비공개", "hide", 1],
                ].map((el, idx) => {
                  return (
                    <RadioBtn
                      key={idx}
                      for={el[1] + data.wr_id}
                      id={el[1] + data.wr_id}
                      name={"isShow" + data.wr_id}
                      checked={data.wr_status === el[2]}
                      text={el[0]}
                    />
                  );
                })}
          </div>
        </div>
      </td>
      <td>
        <div className="input_ty02">
          <input
            type="text"
            placeholder={"직접 입력"}
            value={memo}
            onChange={e => {
              setMemo(e.target.value);
            }}
          />
        </div>
      </td>
    </tr>
  );
}
