import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import Pagination from "../../components/Pagination";
import { useCheckToken } from "../../hooks/useCheckToken";

export default function UserPromoHisDetail() {
  const { id } = useParams();
  const { state, pathname } = useLocation();
  const { mb_no, postData, resData, setResData } = useCheckToken();
  const [pageData, setPageData] = useState();
  const [curPage, setCurPage] = useState(1);
  const [beforeFilter, setBeforeFilter] = useState();

  const loadChallengeData = async () => {
    const data = {
      mb_no,
      target_id: id,
      target_id: "admin",
      challenge_no: state.challenge_no,
    };
    const res = await postData("member/show/challenge/detail", { ...data });
    setBeforeFilter({ ...data });
    setPageData(res.page);
    setCurPage(1);
    if (!res.data) setResData([]);
  };

  const loadPageData = async page => {
    const res = await postData("member/show/challenge/detail", { ...beforeFilter, cur_page: page });
    setPageData(res.page);
  };

  useEffect(() => {
    loadChallengeData();
  }, []);

  return (
    <>
      <Lnb lnbType={pathname.includes("Delete") ? "deleteUserInfo" : "userInfo"} />
      <CurrentBox btns={["down"]} tit="프로모션 참여 상세 내역" />
      <div className="user_history_pro_detail detail_form box_ty01 table_type">
        <div className="table_wrap line">
          <table className="table" id="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"auto"} />
              <col width={"500px"} />
            </colgroup>
            <tbody>
              <tr>
                <th>NO</th>
                <th>등록일</th>
                <th>본문</th>
                <th>
                  도장 적립
                  {/* <br /> */}
                  {/* 15 */}
                </th>
                <th colSpan={2}>
                  포인트 지급/차감
                  {/* <br /> */}
                  {/* 15,000p */}
                </th>
                <th>
                  좋아요
                  {/* <br /> */}
                  {/* 299 */}
                </th>
                <th>
                  신고
                  {/* <br /> */}
                  {/* 1 */}
                </th>
              </tr>

              {resData?.history.map((el, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{el.date}</td>
                    <td className="overflow">{el.wr_content}</td>
                    <td>+ {resData.challengeInfo[0].ch_stamp_count}</td>
                    <td>+ {el.po_point}</td>
                    <td>{el.po_content}</td>
                    <td>{el.likes}</td>
                    <td>{el.reports}</td>
                  </tr>
                );
              })}
              {/* <tr>
                <td>2</td>
                <td>2023-05-01</td>
                <td className="overflow">탄소를 줄이기 위해 오늘도 열심히 대중교통을 이용하고</td>
                <td>+ 1</td>
                <td>+ 15,000</td>
                <td>프로모션 참여</td>
                <td>200</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2023-05-01</td>
                <td className="overflow">탄소를 줄이기 위해 오늘도 열심히 대중교통을 이용하고 대중교통을 이용하고</td>
                <td>+ 1</td>
                <td>+ 15,000</td>
                <td>프로모션 참여</td>
                <td>200</td>
                <td>0</td>
              </tr> */}
            </tbody>
          </table>
        </div>

        <CurrentBox btns={["down"]} hideTit={true} />
        {pageData && <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} onClick={loadPageData} />}
      </div>
    </>
  );
}
