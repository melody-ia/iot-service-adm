import { Lnb, CurrentBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useCheckToken, useDatePicker } from "../../hooks/bundle_hooks";
import { useEffect, useState } from "react";

export default function RankingSetting() {
  const [pageData, setPageData] = useState();
  const [curPage, setCurPage] = useState(1);
  const { mb_no, postData, resData, setResData } = useCheckToken();
  const { date, start_at, end_at } = useDatePicker();
  const [beforeFilter, setBeforeFilter] = useState();

  const loadHistory = async () => {
    const data = {
      mb_no,
      start_at,
      end_at,
    };
    const res = await postData("point/ranking", data);
    setBeforeFilter({ ...data });
    setPageData(res.page);
    setCurPage(1);
    if (!res.data) setResData([]);
  };

  const loadPageData = async page => {
    const res = await postData("point/ranking", { ...beforeFilter, cur_page: page });
    setPageData(res.page);
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <>
      <Lnb lnbType="event" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="탄소 중립 랭킹 관리" /> */}
      <CurrentBox btns={["down"]} tit="탄소 중립 랭킹 관리" />
      <div className="ranking_setting box_ty01 table_type table_comm">
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
              <col width={"auto"} />
              <col width={"auto"} />
            </colgroup>
            <thead>
              <tr>
                <th>전체순위 </th>
                <th>아이디</th>
                <th>성별</th>
                <th>생년월일</th>
                <th>거주인원 수</th>
                <th>포인트 </th>
              </tr>
            </thead>
            <tbody>
              {resData &&
                resData?.map((el, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{el.ranking}</td>
                      <td>{el.mb_id}</td>
                      <td>{el.mb_sex ? el.mb_sex : "-"}</td>
                      <td>{el.mb_birth ? el.mb_birth : "-"}</td>
                      <td>{el.certify ? el.certify : "-"}</td>
                      <td>{el.po_point ? el.po_point.toLocaleString("ko-KR") : 0}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {/* <CurrentBox add={false} mod={true} del={true} down={true} hideTit={true} /> */}
        <CurrentBox btns={["down"]} hideTit={true} />
        {pageData && <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} onClick={loadPageData} />}
        <Pagination />
      </div>
    </>
  );
}
