import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Lnb(props) {
  const { pathname } = useLocation();
  const { lnbType } = props;

  const lnbTab = {
    user: [
      ["회원리스트", "/UserList"],
      ["탈퇴/삭제회원", "url"],
    ],
    userInfo: [
      ["회원 정보", "/UserInfo"],
      ["프로모션 참여 내역", "url"],
      ["탄소발자국 계산 내역", "url"],
      ["탄소 중립 랭킹 변동 내역", "url"],
      ["도장 적립 내역", "url"],
      ["포인트 지급/사용 내역", "url"],
      ["1:1문의 내역", "url"],
      ["등록 기기 내역", "url"],
    ],
    promotion: [
      ["데일리 챌린지 관리", "url"],
      ["탄소 중립 랭킹 관리", "url"],
      ["공개 배너 순위 관리", "url"],
      ["배너 관리", "url"],
      ["팝업 관리", "url"],
    ],
    calcHistory: [],
    point: [
      ["도장관리", "url"],
      ["포인트관리", "url"],
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
            <SwiperSlide key={idx} className={pathname.includes(el[1]) && "active"}>
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
