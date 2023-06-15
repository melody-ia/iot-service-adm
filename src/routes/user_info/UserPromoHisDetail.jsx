import { Lnb, CurrentBox } from "../../components/bundle_components";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserPromoHisDetail() {
  return (
    <>
      <Lnb lnbType="userInfo" />
      <CurrentBox mod={true} del={true} down={true} tit="프로모션 참여 상세내역" />
      <div className="user_history_pro_detail box_ty01 table_type">
        <div className="table_wrap">
          <table className="table">  
            <colgroup>
              <col width={"80px"}/>
              <col width={"150px"}/>
              <col width={"auto"}/>
              <col width={"500px"}/>
            </colgroup>       
            <tbody>
              <tr>
                <th colSpan={3} className="bg_gray">프로모션 명</th>
                <td colSpan={6} className="bg_gray">데일리 챌린지_데일리 탄소 줄이기</td>
              </tr>
              <tr>
                <th colSpan={3} className="bg_gray">프로모션 진행 기간</th>
                <td className="bg_gray">2023.03.01 – 2023.12.31</td>
                <th colSpan={2} className="bg_gray">프로모션 참여 기간</th>
                <td colSpan={3} className="bg_gray">2023.05.10 - 오늘날짜</td>
              </tr>
              <tr>
                <th colSpan={3} className="bg_gray">등록한 글 총 개수</th>
                <td className="bg_gray">15</td>
                <th colSpan={2} className="bg_gray">삭제한 글 총 개수</th>
                <td colSpan={3} className="bg_gray">1</td>
              </tr>
              <tr>
                <th>
                  <CheckBox for="check" id="check" />
                </th>
                <th>NO</th>
                <th>등록일</th>
                <th>본문</th>
                <th>도장 적립<br />15</th>
                <th colSpan={2}>포인트 지급/차감<br />15,000p</th>
                <th>좋아요<br />299</th>
                <th>신고<br />1</th>
              </tr>
              <tr>
                <td>
                  <CheckBox for="check" id="check" />
                </td>
                <td>2</td>
                <td>2023-05-01</td>
                <td className="desc">탄소를 줄이기 위해 오늘도 열심히 대중교통을 이용하고</td>
                <td>+ 1</td>
                <td>+ 15,000</td>
                <td>프로모션 참여</td>
                <td>200</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>
                <td>2023-05-01</td>
                <td className="desc">탄소를 줄이기 위해 오늘도 열심히 대중교통을 이용하고</td>
                <td>+ 1</td>
                <td>+ 15,000</td>
                <td>프로모션 참여</td>
                <td>200</td>
                <td>0</td>
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
