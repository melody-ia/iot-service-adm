import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Lnb, CurrentBox, CheckBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useDatePicker, useCheckToken } from "../../hooks/bundle_hooks";

export default function Tip() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mb_no, postData, resData } = useCheckToken();
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    signUp_date: ["최근 등록일 순", "오래된 등록일 순"],
    open_state: ["공개여부", "공개", "비공개"],
  });
  const [pageData, setPageData] = useState();
  const [checkedList, setCheckedList] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [modList, setModeList] = useState({ wr_id: [], wr_status: [], wr_memo: [] });

  const checkAll = e => {
    if (e.target.checked) setCheckedList(resData.boardInfo.map(el => el.wr_id));
    else setCheckedList([]);
  };

  const loadPostData = async () => {
    const start_at = startDate.toLocaleDateString().split(".").join("-").replace(/\s/g, "").slice(0, -1);
    const end_at = endDate.toLocaleDateString().split(".").join("-").replace(/\s/g, "").slice(0, -1);
    const category = "tip";
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

  const modPostData = async type => {
    await postData("community/edit", { mb_no, type, wr_subject: "tip", ...modList });
    loadPostData();
    setCheckedList([]);
  };

  const btnEvent = {
    add() {
      navigate("/Tip/add");
    },
    mod() {
      modPostData("edit");
    },
    del() {
      modPostData("delete");
    },
  };

  useEffect(() => {
    loadPostData();
  }, [curPage]);

  // if (resData && pageData)
  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox btns={["add", "mod", "del"]} tit="탄소중립 TIP 자료실 리스트" />
      <div className="tip box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search">
            검색
          </button>
        </div>
        <div className="table_wrap line part">
          <table className="table">
            <colgroup>
              <col width={"auto"} />
              <col width={"80px"} />
              <col width={"450px"} />
              <col width={"150px"} />
              <col width={"100px"} />
              <col width={"145px"} />
              <col width={"230px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th>
                <th className="num">NO</th>
                <th>제목</th>
                <th>등록일</th>
                <th>상태</th>
                <th>상태설정</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="wr_1" id="wr_1" name="wr_1" />
                </td>
                <td className="num">2</td>
                <td>
                  <Link to={"/Tip/TipDetail/" + id}>탄소발자국 계산기 사용법</Link>
                </td>
                <td>2023.05.01</td>
                <td>공개</td>
                <td>
                  <div className="radio_group">
                    <div className="radio_wrap">
                      <RadioBtn for="show01" id="show01" name="show" text="공개" />
                      <RadioBtn for="noshow01" id="noshow01" name="show" text="비공개" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder={"직접 입력"} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="wr_2" id="wr_2" name="wr_2" />
                </td>
                <td className="num">1</td>
                <td>
                  <Link to={"/Tip/TipDetail/" + id}>탄소 중립 실천 가이드 자료</Link>
                </td>
                <td>2023.05.01</td>
                <td>공개</td>
                <td>
                  <div className="radio_group">
                    <div className="radio_wrap">
                      <RadioBtn for="show02" id="show02" name="show02" text="공개" />
                      <RadioBtn for="noshow02" id="noshow02" name="show02" text="비공개" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder={"직접 입력"} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <CurrentBox add={true} mod={true} del={true} down={true} hideTit={true} /> */}
        <CurrentBox btns={["add", "mod", "del"]} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}

function PostItem({ data, checkedList, setCheckedList, modList, setModeList }) {
  const navigate = useNavigate();
  const division = { event: "이벤트", news: "뉴스" }[data.wr_subject];
  const [postContents, setPostContents] = useState({ wr_id: data.wr_id, wr_status: data.wr_status, wr_memo: data.wr_1 });

  const checkItem = e => {
    if (e.target.checked) setCheckedList([...checkedList, data.wr_id]);
    else setCheckedList([...checkedList].filter(el => el !== data.wr_id));
  };

  const handlePostContents = e => {
    const type = e.target.dataset.type;
    const value = e.target.dataset.value || e.target.value;
    let copy = { ...postContents };
    copy[type] = value;
    setPostContents(copy);
  };

  const modData = () => {
    let copy = { ...modList };
    if (!checkedList.includes(data.wr_id)) {
      if (copy.wr_id.includes(data.wr_id)) {
        const idx = copy.wr_id.indexOf(data.wr_id);
        ["wr_id", "wr_status", "wr_memo"].forEach(el => {
          copy[el].splice(idx, 1);
        });
        return setModeList(copy);
      }
      return;
    }
    if (copy.wr_id.includes(data.wr_id)) {
      const idx = copy.wr_id.indexOf(data.wr_id);
      ["wr_id", "wr_status", "wr_memo"].forEach(el => {
        copy[el].splice(idx, 1);
        copy[el].push(postContents[el]);
      });
    } else {
      ["wr_id", "wr_status", "wr_memo"].forEach(el => {
        copy[el].push(postContents[el]);
      });
    }
    setModeList(copy);
  };

  useEffect(() => {
    modData();
  }, [checkedList, postContents]);

  return (
    <tr>
      <td className="check">
        <CheckBox for={data.wr_id} id={data.wr_id} name={data.wr_id} checked={checkedList.includes(data.wr_id)} onClick={checkItem} />
      </td>
      <td className="num">{data.wr_id}</td>
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
                      dataType={"wr_status"}
                      dataValue={el[2]}
                      onClick={handlePostContents}
                      // disabled={!checkedList.includes(data.wr_id)}
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
                      dataType={"wr_status"}
                      dataValue={el[2]}
                      onClick={handlePostContents}
                      // disabled={!checkedList.includes(data.wr_id)}
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
            value={postContents.wr_memo}
            data-type="wr_memo"
            onChange={handlePostContents}
            // readOnly={!checkedList.includes(data.wr_id)}
          />
        </div>
      </td>
    </tr>
  );
}
