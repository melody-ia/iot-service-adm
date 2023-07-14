import { Link, useParams } from "react-router-dom";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";
import arrowRightGreen from "../../assets/img/icon/angle_right_green.svg";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserPromoHis() {
  const { id } = useParams();
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    duration: ["진행 기간", "참여 기간"],
  });
  console.log(selectedValues);

  return (
    <>
      <Lnb lnbType="userInfo" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="프로모션 참여 내역" /> */}
      <CurrentBox btns={["mod", "del", "down"]} tit="프로모션 참여 내역" />
      <div className="user_history_pro box_ty01 table_type">
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
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"150px"} />
            </colgroup>
            <tbody>
              <tr>
                <td rowSpan={5} className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td rowSpan={5} className="num">
                  3
                </td>
                <th className="tit">프로모션 명</th>
                <td className="promotion" colSpan={3}>
                  <Link to={"/UserPromoHis/UserPromoHisDetail/" + id}>
                    데일리 챌린지_데일리 탄소 줄이기 <img src={arrowRightGreen} alt="오른쪽 화살표 아이콘" className="arrow_right" />
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="tit">프로모션 진행 기간</th>
                <td className="date">2023.03.01 – 2023.12.31</td>
                <th className="tit">프로모션 참여 기간</th>
                <td className="date">2023.05.10 - 오늘날짜</td>
              </tr>
              <tr>
                <th className="tit">등록한 글 개수</th>
                <td className="date">15</td>
                <th className="tit">도장 적립 개수</th>
                <td className="date">15</td>
              </tr>
              <tr>
                <th className="tit">좋아요 개수</th>
                <td className="date">200</td>
                <th className="tit">신고 당한 이력</th>
                <td className="date">1</td>
              </tr>
              <tr>
                <th className="tit">적립 포인트</th>
                <td colSpan={3} className="date">
                  15,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"150px"} />
            </colgroup>
            <tbody>
              <tr>
                <td rowSpan={5} className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td rowSpan={5} className="num">
                  2
                </td>
                <th className="tit">프로모션 명</th>
                <td className="promotion" colSpan={3}>
                  <Link to={"/UserPromoHis/UserPromoHisDetail/" + id}>
                    데일리 챌린지_데일리 탄소 줄이기 <img src={arrowRightGreen} alt="오른쪽 화살표 아이콘" className="arrow_right" />
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="tit">프로모션 진행 기간</th>
                <td className="date">2023.03.01 – 2023.12.31</td>
                <th className="tit">프로모션 참여 기간</th>
                <td className="date">2023.05.10 - 오늘날짜</td>
              </tr>
              <tr>
                <th className="tit">등록한 글 개수</th>
                <td className="date">15</td>
                <th className="tit">도장 적립 개수</th>
                <td className="date">15</td>
              </tr>
              <tr>
                <th className="tit">좋아요 개수</th>
                <td className="date">200</td>
                <th className="tit">신고 당한 이력</th>
                <td className="date">1</td>
              </tr>
              <tr>
                <th className="tit">적립 포인트</th>
                <td colSpan={3} className="date">
                  15,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"150px"} />
            </colgroup>
            <tbody>
              <tr>
                <td rowSpan={5} className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td rowSpan={5} className="num">
                  1
                </td>
                <th className="tit">프로모션 명</th>
                <td className="promotion" colSpan={3}>
                  <Link to={"/UserPromoHis/UserPromoHisDetail/" + id}>
                    데일리 챌린지_데일리 탄소 줄이기 <img src={arrowRightGreen} alt="오른쪽 화살표 아이콘" className="arrow_right" />
                  </Link>
                </td>
              </tr>
              <tr>
                <th className="tit">프로모션 진행 기간</th>
                <td className="date">2023.03.01 – 2023.12.31</td>
                <th className="tit">프로모션 참여 기간</th>
                <td className="date">2023.05.10 - 오늘날짜</td>
              </tr>
              <tr>
                <th className="tit">등록한 글 개수</th>
                <td className="date">15</td>
                <th className="tit">도장 적립 개수</th>
                <td className="date">15</td>
              </tr>
              <tr>
                <th className="tit">좋아요 개수</th>
                <td className="date">200</td>
                <th className="tit">신고 당한 이력</th>
                <td className="date">1</td>
              </tr>
              <tr>
                <th className="tit">적립 포인트</th>
                <td colSpan={3} className="date">
                  15,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="foot_btn_wrap d-flex flex-ac">
          <button type="button" className="btn_ty01 btn_bg mod">
            수정
          </button>
          <button type="button" className="btn_ty01 btn_bg del">
            삭제
          </button>
          <button type="button" className="btn_ty01 btn_bg down">
            엑셀 다운로드
          </button>
        </div>
        <Pagination />
      </div>
    </>
  );
}
