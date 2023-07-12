import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import banner from "../../assets/img/banner.png";

export default function TipDetail() {
  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox mod={true} del={true} down={true} tit="탄소중립 TIP 자료실 상세보기" />
      <div className="tip_detail box_ty01 view_form">
        <div className="write_type">
          <div className="wirte_area">
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">등록일</label>
                <input type="text" placeholder="직접입력" defaultValue={"2023.05.08"} readOnly/>
              </div>
              <div className="flex_right">
                <label htmlFor="">공개여부</label>
                <div className="radio_group d-flex w100">
                  <RadioBtn for="show" id="show" name="show" text="공개" />
                  <RadioBtn for="noshow" id="noshow" name="show" text="비공개" />
                </div>
              </div>             
            </div>            
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">제목</label>
                <input type="text" defaultValue={"탄소발자국 계산기 사용법"} readOnly/>
              </div>          
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">내용</label>
                <textarea className="textarea" defaultValue={"탄소발자국 계산기 사용법 탄소발자국 계산기 사용법탄소발자국 계산기 사용법 탄소발자국 계산기 사용법 탄소발자국 계산기 사용법 탄소발자국 계산기 사용법"} readOnly></textarea>
              </div>      
            </div>
            <div className="flex_box img_area">
              <label htmlFor="">상단 이미지</label>
              <img src={banner} alt="" />
            </div>
            <div className="flex_box">
              <div className="flex_left w100">
                <label htmlFor="">첨부파일</label>
                <div className="file_box input_ty02">
                  <div className="row">
                    <input type="text" defaultValue={"신규 가입 안내1.jpg"} readOnly />
                  </div>
                  <div className="row">
                    <input type="text" defaultValue={"신규 가입 안내1.jpg"} readOnly/>
                  </div>
                </div>
              </div>
            </div>            
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">비고</label>
                <textarea className="textarea" readOnly></textarea>
              </div>
            </div>
          </div>         
        </div>
      </div>
    </>
  );
}