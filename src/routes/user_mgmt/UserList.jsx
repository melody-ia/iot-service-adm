import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Lnb,
  CurrentBox,
  CheckBox,
  Pagination,
} from "../../components/bundle_components";
import {
  useSelectBox,
  useDatePicker,
  useCheckToken,
} from "../../hooks/bundle_hooks";

export default function UserList() {
  const navigate = useNavigate();
  const { date, start_at, end_at } = useDatePicker();
  const { mb_no, postData, resData } = useCheckToken();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    sort_join: ["최근 가입일 순", "오래된 가입일 순"],
  });
  const [pageData, setPageData] = useState();
  const [curPage, setCurPage] = useState(1);

  const loadUserData = async () => {
    const order =
      selectedValues.sort_join === "최근 가입일 순" ? "desc" : "asc";
    const res = await postData("member/index", {
      mb_no,
      start_at,
      end_at,
      cur_page: curPage,
      order,
      type: "all",
    });
    if (!res || res?.code !== 200) return;
    setPageData(res.page);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const btnEvent = {
    add() {
      navigate("/UserList/add");
    },
  };

  return (
    <>
      <Lnb lnbType="user" />
      <CurrentBox
        btns={
          [
            /* "down" */
          ]
        }
        tit="회원리스트"
        {...btnEvent}
      />
      <div className="user_list box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button
            type="button"
            className="m-txt-4 btn_ty01 btn_search"
            onClick={loadUserData}
          >
            검색
          </button>
        </div>
        <div className="table_wrap part">
          <table className="table reTable " id="table">
            <colgroup>
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
              {/* <col width={"170px"} /> */}
            </colgroup>
            <thead>
              <tr>
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
                {/* <th className="etc">비고</th> */}
              </tr>
            </thead>
            <tbody>
              {resData?.memberResult.map((el, idx) => {
                return <UserItem key={idx} data={el} no={idx} />;
              })}
            </tbody>
          </table>
          {!resData?.memberResult[0] && (
            <div className="no_data_wrap">데이터 없음</div>
          )}
        </div>
        <CurrentBox
          btns={
            [
              /* "down" */
            ]
          }
          hideTit={true}
          {...btnEvent}
        />
        {pageData && (
          <Pagination
            pageData={pageData}
            curPage={curPage}
            setCurPage={setCurPage}
          />
        )}
      </div>
    </>
  );
}

function UserItem({ no, data }) {
  return (
    <tr>
      <td className="num">{no + 1}</td>
      <td className="id">
        <Link to={"/UserBasicInfo/" + data.mb_id}>{data.mb_id}</Link>
      </td>
      <td className="name">{data.mb_name}</td>
      <td className="gender">{data.mb_sex}</td>
      <td className="birth">{data.mb_birth}</td>
      <td className="people">{data.mb_family}</td>
      <td className="email">
        {data.mb_email.split("@")[0]}
        <br />
        {"@" + data.mb_email.split("@")[1]}
      </td>
      <td className="phone">{data.mb_hp}</td>
      <td className="joinDate">{data.mb_datetime}</td>
      <td className="active">{data.mb_open === 0 ? "O" : "X"}</td>
      {/* <td className="etc input_ty02 userlist">
        <input type="text" placeholder="직접입력" defaultValue={data.mb_2} />
      </td> */}
    </tr>
  );
}
