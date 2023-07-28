import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Lnb, CurrentBox, CheckBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useDatePicker, useCheckToken } from "../../hooks/bundle_hooks";

export default function DeletedUserList() {
  const { mb_no, postData, resData } = useCheckToken();
  const { date, start_at, end_at } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    join_date: ["최근 가입일 순", "오래된 가입일 순"],
    account_date: ["가입일", "탈퇴/비활성일"],
    account_type: ["전체", "탈퇴", "계정 비활성화"],
  });
  const [pageData, setPageData] = useState();
  const [curPage, setCurPage] = useState(1);

  const loadUserData = async () => {
    const order = selectedValues.signUp_date === "최근 가입일 순" ? "desc" : "asc";
    const res = await postData("member/index", {
      mb_no,
      start_at: "2021-03-01",
      end_at,
      cur_page: curPage,
      order,
      type: "leave",
    });
    setPageData(res.page);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <>
      <Lnb lnbType="user" />
      {/* <CurrentBox res={true} del={true} down={true} tit="탈퇴/삭제 회원 리스트" /> */}
      <CurrentBox btns={["down"]} tit="탈퇴/삭제 회원 리스트" />
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
              {resData?.memberResult.map((el, idx) => {
                return <UserItem key={idx} data={el} />;
              })}
            </tbody>
          </table>
        </div>
        {/* <CurrentBox res={true} del={true} down={true} hideTit={true} /> */}
        <CurrentBox btns={["down"]} hideTit={true} />
        {pageData && <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} />}
      </div>
    </>
  );
}

function UserItem({ data }) {
  return (
    <tr>
      <td className="num">100</td>
      <td className="id disabled">
        <Link to={"/UserBasicInfo/" + data.mb_id}>{data.mb_id}</Link>
      </td>
      <td className="name">{data.mb_name}</td>
      <td className="gender">{data.mb_sex}</td>
      <td className="birth">{data.mb_birth}</td>
      <td className="people">{data.mb_certify}</td>
      <td className="email">
        {data.mb_email.split("@")[0]}
        <br />
        {"@" + data.mb_email.split("@")[1]}
      </td>
      <td className="phone">{data.mb_hp}</td>
      <td className="joinDate">{data.mb_datetime}</td>
      <td className="active">X</td>
      <td className="etc input_ty02 userlist">
        <input type="text" placeholder="직접입력" defaultValue={data.mb_2} readOnly />
      </td>
    </tr>
  );
}
