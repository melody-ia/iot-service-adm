import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useSelectBox, useDatePicker, useCheckToken } from "../../hooks/bundle_hooks";
import arrowRightGreen from "../../assets/img/icon/angle_right_green.svg";
import Pagination from "../../components/Pagination";
import { useEffect } from "react";

export default function UserPromoHis() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();
  const { date, start_at, end_at } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    duration: ["진행기간", "참여기간"],
  });
  const { mb_no, resData, postData } = useCheckToken();

  const loadUserPromoData = async () => {
    const filter = { 진행기간: "in_date", 참여기간: "ch_date" }[selectedValues.duration];
    const res = await postData("member/show/challenge", {
      mb_no,
      target_id: id,
      target_id: "admin",
      filter,
      start_at,
      end_at,
    });
    console.log(res);
  };

  useEffect(() => {
    loadUserPromoData();
  }, []);

  return (
    <>
      <Lnb lnbType={pathname.includes("Delete") ? "deleteUserInfo" : "userInfo"} />
      <CurrentBox btns={["down"]} tit="프로모션 참여 내역" />
      <div className="user_history_pro box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search" onClick={loadUserPromoData}>
            검색
          </button>
        </div>
        {resData?.challengeResult.map((el, idx) => {
          return (
            <div key={idx} className="table_wrap line">
              <table className="table">
                <colgroup>
                  <col width={"80px"} />
                </colgroup>
                <tbody>
                  <tr>
                    <td rowSpan={5} className="num">
                      3
                    </td>
                    <th className="tit">프로모션 명</th>
                    <td
                      className="promotion"
                      colSpan={3}
                      onClick={() => {
                        navigate("/UserPromoHis/UserPromoHisDetail/" + id, { state: { challenge_no: el.challenge_no } });
                      }}
                    >
                      {el.ch_title} <img src={arrowRightGreen} alt="오른쪽 화살표 아이콘" className="arrow_right" />
                    </td>
                  </tr>
                  <tr>
                    <th className="tit">프로모션 진행 기간</th>
                    <td className="date">
                      {el.in_start.replace(/-/g, ".")} – {el.in_end.replace(/-/g, ".")}
                    </td>
                    <th className="tit">프로모션 참여 기간</th>
                    <td className="date">
                      {el.ch_start.replace(/-/g, ".")} - {el.ch_end.replace(/-/g, ".")}
                    </td>
                  </tr>
                  <tr>
                    <th className="tit">등록한 글 개수</th>
                    <td className="date">{el.board_count}</td>
                    <th className="tit">도장 적립 개수</th>
                    <td className="date">{el.sum_stamp}</td>
                  </tr>
                  <tr>
                    <th className="tit">좋아요 개수</th>
                    <td className="date">{el.like_count}</td>
                    <th className="tit">신고 당한 이력</th>
                    <td className="date">{el.report_count}</td>
                  </tr>
                  <tr>
                    <th className="tit">적립 포인트</th>
                    <td colSpan={3} className="date">
                      {Number(el.sum_point).toLocaleString("ko-KR")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
        <Pagination />
      </div>
    </>
  );
}
