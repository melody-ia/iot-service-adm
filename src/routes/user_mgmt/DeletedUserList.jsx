import { Link } from "react-router-dom";
import { Lnb, CurrentBox, CheckBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";

export default function DeletedUserList() {
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    join_date: ["최근 가입일 순", "오래된 가입일 순"],
    account_date: ["가입일", "탈퇴/비활성일"],
    account_type: ["전체", "탈퇴", "계정 비활성화"],
  });

  return (
    <>
      <Lnb lnbType="user" />
      {/* <CurrentBox res={true} del={true} down={true} tit="탈퇴/삭제 회원 리스트" /> */}
      <CurrentBox btns={["res", "del", "down"]} tit="탈퇴/삭제 회원 리스트" />
      <div className="deleted_user_list box_ty01 table_type table_comm">
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
        <div className="table_wrap part">
          <table className="table">
            <colgroup>
              {/* <col width={"42px"} /> */}
              <col width={"50px"} />
              <col width={"192px"} />
              <col width={"60px"} />
              <col width={"80px"} />
              <col width={"100px"} />
              <col width={"100px"} />
              <col width={"110px"} />
              <col width={"100px"} />
              <col width={"100px"} />
              <col width={"108px"} />
              <col width={"170px"} />
            </colgroup>
            <thead>
              <tr>
                {/* <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th> */}
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
                {/* <td className="check">
                  <CheckBox for="wr_1" id="wr_1" name="wr_1" />
                </td> */}
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
                {/* <td className="check">
                  <CheckBox for="wr_2" id="wr_2" name="wr_1" />
                </td> */}
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
        {/* <CurrentBox res={true} del={true} down={true} hideTit={true} /> */}
        <CurrentBox btns={["res", "del", "down"]} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}
