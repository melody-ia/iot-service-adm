import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Lnb() {
  const slideTab = {
    slidesPerView: "auto",
    spaceBetween: 10,
    slidesOffsetBefore: 20,
    slidesOffsetAfter: 20,
  };

  return(
    <div className="lnb container_item">
      <Swiper className="lnb_tab_slide" {...slideTab}>
        <SwiperSlide className="active">
          <button type="button" className="lnb_btn">회원리스트</button>
        </SwiperSlide>
        <SwiperSlide>
          <button type="button" className="lnb_btn">탈퇴/삭제회원</button>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}