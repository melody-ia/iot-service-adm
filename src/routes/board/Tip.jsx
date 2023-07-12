import { useState } from "react";
import { Lnb, CurrentBox, CheckBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { Link, useParams } from "react-router-dom";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";

export default function Tip() {
  const { id } = useParams();
  const { date, startDate, endDate } = useDatePicker();

  const { selectList, handleSelectBox } = useSelectBox({
    signUp_date: false,
    open_state: false,
  });
  const [searchOption, setSearchOption] = useState({
    signUp_date: "최근 등록일 순",
    open_state: "공개여부",
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };

  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox add={true} mod={true} del={true} down={true} tit="탄소중립 TIP 자료실 리스트" />
      <div className="tip box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("signUp_date");
              }}
            >
              <input type="text" defaultValue="최근 등록일 순" readOnly />
              {selectList.signUp_date && (
                <ul className="select_box">
                  {["최근 등록일 순", "오래된 등록일 순"].map((signUpDate, index) => {
                    return (
                      <li key={signUpDate} data-value={signUpDate} data-type="signUp_date" onClick={searchOptionSel}>
                        {signUpDate}
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
              <col width={"500px"} />
              <col width={"150px"} />
              <col width={"220px"} />
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
                <td>
                  <Link to={"/Tip/TipDetail/" + id}>탄소발자국 계산기 사용법</Link>
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
                <td>
                  <Link to={"/Tip/TipDetail/" + id}>탄소 중립 실천 가이드 자료</Link>
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
