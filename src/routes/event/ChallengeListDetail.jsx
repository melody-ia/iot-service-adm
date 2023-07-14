import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useState } from "react";
import RadioBtn from "../../components/RadioBtn";
import banner from "../../assets/img/banner.png";
import arrowRightGreen from "../../assets/img/icon/angle_right_green.svg";
import ChallengeListDetailModal from "./ChallengeListDetailModal";

export default function ChallengeListDetail() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Lnb lnbType="event" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="데일리 챌린지 상세보기"/> */}
      <CurrentBox btns={["mod", "del", "down"]} tit="데일리 챌린지 상세보기" />
      <div className="ch_list_detail detail_form box_ty01 table_type">
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"50px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"50px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
            </colgroup>
            <tbody>
              <tr>
                <th colSpan={3}>프로모션명</th>
                <td colSpan={2}>대중교통 이용하기 프로젝트</td>
                <th colSpan={3}>진행 여부</th>
                <td colSpan={2}>
                  <div className="radio_box d-flex flex-ac flex-jc">
                    <RadioBtn for="ing" id="ing" name="active" text="진행중" />
                    <RadioBtn for="stop" id="stop" name="active" text="진행중지" />
                    <RadioBtn for="end" id="end" name="active" text="진행완료" />
                  </div>
                </td>
              </tr>
              <tr>
                <th colSpan={3}>프로모션 서브명</th>
                <td colSpan={2}>오늘부터 매일매일</td>
                <th colSpan={3}>프로모션 설명</th>
                <td colSpan={2}>꾸준한 기록으로 환경보호 하는 습관을 만들어보세요.</td>
              </tr>
              <tr>
                <th colSpan={3}>등록일</th>
                <td colSpan={2}>2023.05.08</td>
                <th colSpan={3}>프로모션 진행 기간</th>
                <td colSpan={2}>2023.05.08 – 2023.07.08</td>
              </tr>
              <tr>
                <th colSpan={3} className="member" onClick={() => setModalOpen(true)}>
                  총 참여 회원 수 <img src={arrowRightGreen} alt="오른쪽 화살표 아이콘" className="arrow_right" />
                </th>
                <td colSpan={2}>123,456</td>
                <th colSpan={3}>총 등록된 글 개수</th>
                <td colSpan={2}>200,000</td>
              </tr>
              <tr>
                <th colSpan={3}>총 적립된 도장 개수</th>
                <td colSpan={2}>1,000,000</td>
                <th colSpan={3}>총 지급된 포인트 금액</th>
                <td colSpan={2}>1,000,000</td>
              </tr>
              <tr>
                <th colSpan={3}>도장 적립 정책</th>
                <td colSpan={2}>글 1개당 1개 적립</td>
                <th colSpan={5}>포인트 지급</th>
              </tr>
              <tr>
                <th rowSpan={2}>1</th>
                <th>글 등록 개수</th>
                <td>1</td>
                <th>도장 적립 개수</th>
                <td>1</td>
                <th rowSpan={2}>1</th>
                <th>포인트명</th>
                <td>데일리 챌린지 참여</td>
                <th>지급 포인트 금액</th>
                <td>1,000</td>
              </tr>
              <tr>
                <th>적립 기한</th>
                <td colSpan={3}>2023.05.10 – 2050.12.31</td>
                <th>
                  포인트 <br />
                  지급 시점
                </th>
                <td>도장 3개 적립 시</td>
                <th>지급 기한</th>
                <td>
                  2023.05.10 – <br />
                  2050.12.31
                </td>
              </tr>
              <tr>
                <th colSpan={5} rowSpan={2}></th>
                <th rowSpan={2}>2</th>
                <th>포인트명</th>
                <td>보너스 지급</td>
                <th>지급 포인트 금액</th>
                <td>2,000</td>
              </tr>
              <tr>
                <th>
                  포인트 <br />
                  지급 시점
                </th>
                <td>도장 10개 적립 시</td>
                <th>지급 기한</th>
                <td>
                  2023.05.10 – <br />
                  2050.12.31
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table banner_table">
            <colgroup>
              <col width={"80px"} />
              <col width={"700px"} />
              <col width={"700px"} />
            </colgroup>
            <tbody>
              <tr>
                <th></th>
                <th>배너 위치</th>
                <th>배너 이미지</th>
              </tr>
              <tr>
                <td>1</td>
                <td>메인 상단</td>
                <td>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>데일리 발자국 챌린지 리스트 상단</td>
                <td>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>데일리 발자국 챌린지 글쓰기 상단</td>
                <td>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>탄소중립랭킹 하단</td>
                <td>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <th colSpan={2}>비고</th>
                <td>-</td>
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
      </div>
      {modalOpen ? (
        <>
          <ChallengeListDetailModal modalClose={() => setModalOpen(false)} />
          <div className="dim" onClick={() => setModalOpen(false)}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
