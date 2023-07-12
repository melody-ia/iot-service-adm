import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Lnb, CurrentBox, CheckBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";

export default function ChallengeList() {
  const { id } = useParams();
  const { date, startDate, endDate } = useDatePicker();
  const { selectList, handleSelectBox } = useSelectBox({
    sort_date: false,
    search_type: false,
    search_state: false,
    progress_state: false,
    progress_state2: false,
  });

  const [searchOption, setSearchOption] = useState({
    sort_date: "최근 등록일 순",
    search_type: "등록일",
    search_state: "전체",
    search_dateS: startDate,
    search_dateE: endDate,
    progress_state: "진행중",
    progress_state2: "진행중",
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };
  const dataSubmit = async () => {
    // const res = await axios.post("api", {
    //   data: { ...searchOption },
    // });
  };

  return (
    <>
      <Lnb lnbType="event" />
      <CurrentBox add={true} mod={true} del={true} down={true} tit="데일리 챌린지 리스트" />
      <div className="ch_list box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("sort_date");
              }}
            >
              <input type="text" value={searchOption.sort_date} readOnly />
              {selectList.sort_date && (
                <ul className="select_box">
                  {["최근 등록일 순", "오래된 등록일 순"].map((el, idx) => {
                    return (
                      <li key={idx} data-type="sort_date" data-value={el} onClick={searchOptionSel}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("search_type");
              }}
            >
              <input type="text" value={searchOption.search_type} readOnly />
              {selectList.search_type && (
                <ul className="select_box">
                  {["등록일", "진행기간"].map((el, idx) => {
                    return (
                      <li key={idx} data-type="search_type" data-value={el} onClick={searchOptionSel}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("search_state");
              }}
            >
              <input type="text" value={searchOption.search_state} readOnly />
              {selectList.search_state && (
                <ul className="select_box">
                  {["전체", "진행중", "진행중지", "진행완료"].map((el, idx) => {
                    return (
                      <li key={idx} data-type="search_state" data-value={el} onClick={searchOptionSel}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search" onClick={dataSubmit}>
            검색
          </button>
        </div>
        <div className="table_wrap">
          <table className="table">
            <colgroup>
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"300px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"150px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th>
                <th className="num">NO</th>
                <th>프로모션 명</th>
                <th className="date">등록일</th>
                <th>
                  프로모션
                  <br />
                  진행 기간
                </th>
                <th>
                  총<br />
                  참여 회원 수
                </th>
                <th>
                  총<br />
                  등록된 글 개수
                </th>
                <th>
                  총 적립된
                  <br />
                  도장 개수
                </th>
                <th>
                  총 지급된
                  <br />
                  포인트 금액
                </th>
                <th>진행 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="wr_1" id="wr_1" name="wr_1" />
                </td>
                <td className="num">2</td>
                <td>
                  <Link to={"/ChallengeList/ChallengeListDetail/" + id}>대중교통 이용하기 프로젝트</Link>
                </td>
                <td>2023.05.08</td>
                <td>
                  2023.05.08 – <br />
                  2023.07.08
                </td>
                <td>123,456</td>
                <td>200,000</td>
                <td>1,000,000</td>
                <td>1,000,000</td>
                <td
                  onClick={() => {
                    handleSelectBox("progress_state");
                  }}
                >
                  <div className="select_input input_ty02">
                    <input type="text" defaultValue="진행중" readOnly />
                    {selectList.progress_state && (
                      <ul className="select_box">
                        {["전체", "진행중", "진행중지", "진행완료"].map((el, idx) => {
                          return (
                            <li key={idx} data-type="progress_state" data-value={el} onClick={searchOptionSel}>
                              {el}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="wr_2" id="wr_2" name="wr_2" />
                </td>
                <td className="num">1</td>
                <td>
                  <Link to="/">대중교통 이용하기 프로젝트</Link>
                </td>
                <td>2023.05.08</td>
                <td>
                  2023.05.08 – <br />
                  2023.07.08
                </td>
                <td>123,456</td>
                <td>200,000</td>
                <td>1,000,000</td>
                <td>1,000,000</td>
                <td
                  onClick={() => {
                    handleSelectBox("progress_state2");
                  }}
                >
                  <div className="select_input input_ty02">
                    <input type="text" defaultValue="진행중지" readOnly />
                    {selectList.progress_state2 && (
                      <ul className="select_box">
                        {["전체", "진행중", "진행중지", "진행완료"].map((el, idx) => {
                          return (
                            <li key={idx} data-type="progress_state2" data-value={el} onClick={searchOptionSel}>
                              {el}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <CurrentBox add={true} mod={true} del={true} down={true} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}
