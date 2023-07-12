import { useState } from "react";
import { Link } from "react-router-dom";
import { Lnb, CurrentBox, CheckBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";

export default function DeletedUserList() {
  const { date, startDate, endDate } = useDatePicker();

  const { selectList, handleSelectBox } = useSelectBox({
    join_date: false,
    account_date: false,
  });
  const [searchOption, setSearchOption] = useState({
    join_date: "최근 가입일 순",
    account_date: "전체",
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };

  return (
    <>
      <Lnb lnbType="user" />
      <CurrentBox res={true} del={true} down={true} tit="탈퇴/삭제 회원 리스트" />
      <div className="deleted_user_list box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("join_date");
              }}
            >
              <input type="text" defaultValue="최근 가입일 순" readOnly />
              {selectList.join_date && (
                <ul className="select_box">
                  {["최근 가입일 순", "오래된 가입일 순"].map((joinDate, index) => {
                    return (
                      <li key={joinDate} data-type="join_date" data-value={joinDate} onClick={searchOptionSel}>
                        {joinDate}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("account_date");
              }}
            >
              <input type="text" defaultValue="가입일" readOnly />
              {selectList.account_date && (
                <ul className="select_box">
                  {["가입일", "탈퇴/삭제일"].map((accountDate, index) => {
                    return (
                      <li key={accountDate} data-type="account_date" data-value={accountDate} onClick={searchOptionSel}>
                        {accountDate}
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
        <div className="table_wrap part">
          <table className="table">
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="user_all" id="user_all" />
                </th>
                <th className="num">NO</th>
                <th className="id">아이디</th>
                <th className="name">이름</th>
                <th className="gender">성별</th>
                <th className="birth">생년월일</th>
                <th className="people">거주인원 수</th>
                <th className="email">이메일</th>
                <th className="phone">휴대폰 번호</th>
                <th className="joinDate">가입일</th>
                <th className="active">탈퇴/삭제일</th>
                <th className="etc">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">2</td>
                <td className="id disabled">
                  <Link to="/UserBasicInfo/wizzzzzzzzzzz1">wizzzzzzzzzzz1</Link>
                </td>
                <td className="name">김위즈</td>
                <td className="gender">남</td>
                <td className="birth">1990.10.01</td>
                <td className="people">3</td>
                <td className="email">
                  kimwewew
                  <br />
                  @naver.com
                </td>
                <td className="phone">010-1111-1111</td>
                <td className="joinDate">2023.05.08</td>
                <td className="active">2023.05.08 </td>
                <td className="etc input_ty02 userlist">
                  <input type="text" placeholder="직접입력" />
                </td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">1</td>
                <td className="id disabled">
                  <Link to="/UserBasicInfo/wizzzzzzzzzzz1">wizzzzzzzzzzz1</Link>
                </td>
                <td className="name">김위즈</td>
                <td className="gender">남</td>
                <td className="birth">1990.10.01</td>
                <td className="people">3</td>
                <td className="email">
                  kimwewew
                  <br />
                  @naver.com
                </td>
                <td className="phone">010-1111-1111</td>
                <td className="joinDate">2023.05.08</td>
                <td className="active">2023.05.08 </td>
                <td className="etc input_ty02 userlist">
                  <input type="text" placeholder="직접입력" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <CurrentBox res={true} del={true} down={true} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}
