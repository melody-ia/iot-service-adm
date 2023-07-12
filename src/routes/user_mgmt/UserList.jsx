import { Link } from "react-router-dom";
import { Lnb, CurrentBox, CheckBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";

export default function UserList() {
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    sort_join: ["최근 가입일 순", "오래된 가입일 순"],
    account_type: ["전체", "계정 활성화", "계정 비활성화"],
  });

  const userList_form = [
    {
      no: 100,
      id: "wizzzzzzzzzzz",
      name: "김위즈",
      gender: "남",
      birth: "1999.10.01",
      reside: "3",
      email:
        "kimwewewa\
        @naver.com",
      num: "010-1111-1111",
      join: "2023.05.08",
      accountAc: "x",
      etc: "직접입력",
    },
    {
      no: 100,
      id: "wizzzzzzzzzzz",
      name: "김위즈",
      gender: "남",
      birth: "1999.10.01",
      reside: "3",
      email:
        "kimwewewa\
        @naver.com",
      num: "010-1111-1111",
      join: "2023.05.08",
      accountAc: "x",
      etc: "직접입력",
    },
  ];

  return (
    <>
      <Lnb lnbType="user" />
      <CurrentBox add={true} mod={true} del={true} down={true} tit="회원리스트" />
      <div className="user_list box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="m-txt-4 btn_ty01 btn_search">
            검색
          </button>
        </div>
        <div className="table_wrap part">
          <table className="table reTable ">
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_userList" />
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
                <th className="active">계정활성화여부</th>
                <th className="etc">비고</th>
              </tr>
            </thead>
            <tbody>
              {userList_form.map(item => {
                return (
                  <tr>
                    <td className="check">
                      <CheckBox for="wr_2" id="wr_2" name="wr_userList" />
                    </td>
                    <td className="num">{item.no}</td>
                    <td className="id disabled">
                      <Link to="/UserBasicInfo/wizzzzzzzzzzz2">{item.id}</Link>
                    </td>
                    <td className="name">{item.name}</td>
                    <td className="gender">{item.gender}</td>
                    <td className="birth">{item.birth}</td>
                    <td className="people">{item.reside}</td>
                    <td className="email">{item.email}</td>
                    <td className="phone">{item.num}</td>
                    <td className="joinDate">{item.join}</td>
                    <td className="active">{item.accountAc}</td>
                    <td className="etc input_ty02 userlist">
                      <input type="text" placeholder={item.etc} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <CurrentBox add={true} mod={true} del={true} down={true} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}
