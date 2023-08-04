import { useParams, useLocation } from "react-router-dom";
import { Lnb, CurrentBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useCheckToken, useDatePicker } from "../../hooks/bundle_hooks";
import CheckBox from "../../components/CheckBox";
import { useEffect, useState } from "react";

export default function UserRankHis() {
  const [pageData, setPageData] = useState();
  const [curPage, setCurPage] = useState(1);
  const { pathname } = useLocation();
  const { mb_no, postData, resData, setResData } = useCheckToken();
  const { date, start_at, end_at } = useDatePicker();
  const [beforeFilter, setBeforeFilter] = useState();

  const user_no = Number(useParams().id);

  const loadHistory = async () => {
    const data = {
      mb_no,
      user_no,
      start_at,
      end_at,
    };
    const res = await postData("point/myranking", data);
    setBeforeFilter({ ...data });
    setPageData(res.page);
    setCurPage(1);
    if (!res.data) setResData([]);
  };

  const loadPageData = async page => {
    const res = await postData("point/myranking", { ...beforeFilter, cur_page: page });
    setPageData(res.page);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <>
      <Lnb lnbType={pathname.includes("Delete") ? "deleteUserInfo" : "userInfo"} />
      {/* <CurrentBox mod={true} del={true} down={true} tit="탄소 중립 랭킹 변동 내역" /> */}
      <CurrentBox btns={["down"]} tit="탄소 중립 랭킹 변동 내역" />
      <div className="user_history_rank box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search" onClick={loadHistory}>
            검색
          </button>
        </div>
        <div className="table_wrap line">
          <table className="table" id="table">
            <colgroup>
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"auto"} />
            </colgroup>
            <thead>
              <tr>
                <th>NO</th>
                <th>생성일</th>
                <th>포인트 </th>
                <th>순위 </th>
              </tr>
            </thead>
            <tbody>
              {resData &&
                resData?.map((el, idx) => {
                  return (
                    el && (
                      <tr key={idx}>
                        <td>{el.idx}</td>
                        <td>{el.create_at}</td>
                        <td>{el.po_point.toLocaleString("ko-KR") || 0}</td>
                        <td>{el.ranking}</td>
                      </tr>
                    )
                  );
                })}
            </tbody>
          </table>
        </div>

        <CurrentBox btns={["down"]} hideTit={true} />
        {pageData && <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} onClick={loadPageData} />}
        <Pagination />
      </div>
    </>
  );
}
