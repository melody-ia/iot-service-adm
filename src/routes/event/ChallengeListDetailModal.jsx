import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Pagination } from "../../components/bundle_components";
import { useCheckToken, useSelectBox } from "../../hooks/bundle_hooks";

export default function ChallengeListDetailModal({ modalClose, ch_no }) {
  const { id } = useParams();
  const { mb_no, postData, resData, setResData } = useCheckToken();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    participation: ["참여 횟수 높은 순", "참여 횟수 낮은 순"],
  });
  const [searchId, setSearchId] = useState();
  const [pageData, setPageData] = useState({
    limit: 15,
    offset: 0,
    prev: null,
    start_block: 1,
    end_block: 1,
    next: null,
  });
  const [curPage, setCurPage] = useState(1);
  const [beforeFilter, setBeforeFilter] = useState();

  const loadUserData = async () => {
    const order = selectedValues.signUp_date === "참여 횟수 높은 순" ? "desc" : "asc";
    const data = { mb_no, order, ch_no: 1, target_id: searchId || "" };
    const res = await postData("challenge/detail", { ...data });
    setBeforeFilter({ ...data });
    setPageData(res.page);
    setCurPage(1);
    if (!res.data) setResData([]);
  };

  const loadPageData = async page => {
    const res = await postData("challenge/detail", { ...beforeFilter, cur_page: page });
    setPageData(res.page);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <>
      <div className="ch_list_modal modal box_ty01">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">{selecBoxHtml}</div>
          </div>
          <div className="input_ty02">
            <input
              type="text"
              placeholder="아이디 입력"
              value={searchId}
              onChange={e => {
                setSearchId(e.target.value);
              }}
            />
          </div>
          <button type="button" className="btn_ty01 btn_search" onClick={loadUserData}>
            검색
          </button>
        </div>
        <div className="table_wrap">
          <table className="table" id="table">
            <colgroup>
              <col width={"150px"} />
              <col width={"auto"} />
              <col width={"auto"} />
            </colgroup>
            <thead>
              <tr className="main_tit">
                <th colSpan={3}>대중교통 이용하기 프로젝트</th>
              </tr>
              <tr>
                <th>NO</th>
                <th>아이디</th>
                <th>참여 횟수</th>
              </tr>
            </thead>
            <tbody>
              {resData?.challengeUserInfo.map((el, idx) => {
                return <UserItem data={el} idx={idx + 1} ch_no={ch_no} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="foot_btn_wrap d-flex flex-ac">
          <button type="button" className="btn_ty01" onClick={modalClose}>
            닫기
          </button>
        </div>
        {pageData && <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} onClick={loadPageData} />}
      </div>
    </>
  );
}

function UserItem({ data, idx, ch_no }) {
  const navigate = useNavigate();

  console.log(ch_no);
  return (
    <tr>
      <td>{idx}</td>
      <td
        onClick={() => {
          navigate("/UserPromoHis/UserPromoHisDetail/" + data.mb_id, { state: { challenge_no: ch_no } });
        }}
      >
        <Link to={"/UserPromoHis/UserPromoHisDetail/" + data.mb_id}></Link>
        {data.mb_id}
      </td>
      <td>{data.boards}</td>
    </tr>
  );
}
