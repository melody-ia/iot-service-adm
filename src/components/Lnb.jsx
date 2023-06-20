import { Link, useLocation, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Lnb(props) {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { lnbType } = props;

  const lnbTab = {
    user: [
      ["회원리스트", "/UserList"],
      ["탈퇴/삭제회원", "/DeletedUserList"],
    ],
    userInfo: [
      ["회원 정보", "/UserBasicInfo/" + id],
      ["프로모션 참여 내역", "/UserPromoHis/" + id],
      ["탄소발자국 계산 내역", "/UserCalcHis/" + id],
      ["탄소 중립 랭킹 변동 내역", "/UserRankHis/" + id],
      ["도장 적립 내역", "/UserStempHis/" + id],
      ["포인트 지급/사용 내역", "/UserPointHis/" + id],
      ["1:1문의 내역", "/UserQnaHis/" + id],
      ["등록 기기 내역", "/UserDeviceHis/" + id],
    ],
    event: [
      ["데일리 챌린지 관리", "/ChallengeList"],
      ["탄소 중립 랭킹 관리", "/RankingSetting"],
      ["공개 배너 순위 관리", "/BannerRanking"],
      ["배너 관리", "/BannerSetting"],
      ["팝업 관리", "/PopupSetting"],
    ],
    calcHistory: [["탄소 발자국 계산 내역", "/CalculatorList"]],
    accumulated: [
      ["도장 관리", "/Stamp"],
      ["포인트 관리", "/Point"],
    ],
    board: [
      ["이벤트/뉴스관리", "url"],
      ["탄소중립TIP 자료실 관리", "url"],
      ["FAQ 관리", "url"],
      ["1:1문의 관리", "url"],
    ],
    device: [
      ["기기 목록 관리", "url"],
      ["GL 추천제품 관리", "url"],
    ],
  };

  const slideTab = {
    slidesPerView: "auto",
    spaceBetween: 10,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
  };

  return (
    <div className="lnb container_item">
      <Swiper className="lnb_tab_slide" {...slideTab}>
        {lnbTab[lnbType].map((el, idx) => {
          return (
            <SwiperSlide key={idx} className={pathname.includes(el[1].replace(id, "")) && "active"}>
              <Link to={el[1]} className="lnb_btn">
                {el[0]}
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
