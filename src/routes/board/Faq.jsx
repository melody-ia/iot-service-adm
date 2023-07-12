import { useState } from "react";
import { Lnb, CurrentBox, CheckBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { Link, useParams } from "react-router-dom";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";

export default function Faq() {
  const { id } = useParams();
  const { date, startDate, endDate } = useDatePicker();
  const { selectList, handleSelectBox } = useSelectBox({
    signUp_state: false,
    faq_sort: false,
    open_state: false,
  });
  const [searchOption, setSearchOption] = useState({
    signUp_state: "최근 등록일 순",
    faq_sort: "구분",
    open_state: "공개여부",
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };

  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox add={true} mod={true} del={true} down={true} tit="FAQ 리스트" />
      <div className="faq box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("signUp_state");
              }}
            >
              <input type="text" defaultValue="최근 등록일 순" readOnly />
              {selectList.signUp_state && (
                <ul className="select_box">
                  {["최근 등록일 순", "오래된 등록일 순", "지급중지", "지급종료"].map((signUpState, index) => {
                    return (
                      <li key={signUpState} data-value={signUpState} data-type="signUp_state" onClick={searchOptionSel}>
                        {signUpState}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("faq_sort");
              }}
            >
              <input type="text" defaultValue="구분" readOnly />
              {selectList.faq_sort && (
                <ul className="select_box">
                  {["구분", "탄소발자국", "챌린지", "랭킹", "회원", "기타"].map((faqSort, index) => {
                    return (
                      <li key={faqSort} data-value={faqSort} data-type="faq_sort" onClick={searchOptionSel}>
                        {faqSort}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("open_state");
              }}
            >
              <input type="text" defaultValue="공개여부" readOnly />
              {selectList.open_state && (
                <ul className="select_box">
                  {["공개여부", "공개", "비공개"].map((openState, index) => {
                    return (
                      <li key={openState} data-value={openState} data-type="open_state" onClick={searchOptionSel}>
                        {openState}
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
          <button type="button" className="btn_ty01 btn_search">
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
              <col width={"230px"} />
              <col width={"250px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th>
                <th className="num">NO</th>
                <th>구분</th>
                <th>제목</th>
                <th>등록일</th>
                <th>공개여부</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="wr_1" id="wr_1" name="wr_1" />
                </td>
                <td className="num">2</td>
                <td>탄소발자국</td>
                <td>
                  <Link to={"/Faq/FaqDetail/" + id}>탄소발자국에 대해서 알려주세요.</Link>
                </td>
                <td>2023.05.01</td>
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
                <td>챌린지</td>
                <td>
                  <Link to={"/Faq/FaqDetail/" + id}>챌리지 방법 알려주세요.</Link>
                </td>
                <td>2023.05.01</td>
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
        <CurrentBox add={true} mod={true} del={true} down={true} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}
