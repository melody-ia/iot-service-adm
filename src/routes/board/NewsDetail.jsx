import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import banner from "../../assets/img/banner.png";

export default function NewsDetail() {
  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox mod={true} del={true} down={true} tit="이벤트/뉴스 상세보기" />
      <div className="news_detail box_ty01 view_form">
        <div className="write_type">
          <div className="wirte_area">
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">구분</label>
                <div className="select_input input_ty02">
                  <input type="text" defaultValue="이벤트" readOnly />
                  <ul className="select_box">
                    <li>이벤트</li>
                    <li>뉴스</li>
                  </ul>
                </div>
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
              <div className="input_ty02 flex_left">
                <label htmlFor="">등록일</label>
                <input type="text" placeholder="직접입력" defaultValue={"2023.05.08"} readOnly/>
              </div>
              <div className="flex_right"></div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">제목</label>
                <input type="text" defaultValue={"신규 가입 이벤트 진행"} readOnly/>
              </div>          
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <span className="label">내용</span>
                <textarea className="textarea" defaultValue={"신규 가입 이벤트 진행합니다.  신규 가입 이벤트 진행합니다.  신규 가입 이벤트 진행합니다.  신규 가입 이벤트 진행합니다.  신규 가입 이벤트 진행합니다.  신규 가입 이벤트 진행합니다."} readOnly></textarea>
              </div>      
            </div>
            <div className="flex_box img_area">
              <span className="label">상단 이미지</span>
              <img src={banner} alt="" />
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
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