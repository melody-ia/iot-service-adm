import { useNavigate } from "react-router-dom";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useSelectBox } from "../../hooks/bundle_hooks";

export default function NewsAdd() {
  const history = useNavigate();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    post_sort: ["이벤트", "뉴스"],
  });

  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox add={true} del={true} down={true} tit="이벤트/뉴스 등록/수정" />
      <div className="news_add box_ty01 view_form add">
        <div className="write_type">
          <div className="wirte_area">
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">구분</label>
                {selecBoxHtml}
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
                <label htmlFor="">제목</label>
                <input type="text" defaultValue={"신규 가입 이벤트 진행"} />
              </div>
              <div className="input_ty02 flex_right">
                <label htmlFor="">등록일</label>
                <input type="text" placeholder="직접입력" defaultValue={"2023.05.08"} />
              </div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">내용</label>
                <textarea
                  className="textarea"
                  placeholder="직접입력"
                  defaultValue={
                    "신규 가입 이벤트 진행합니다.  신규 가입 이벤트 진행합니다.  신규 가입 이벤트 진행합니다.  신규 가입 이벤트 진행합니다.  신규 가입 이벤트 진행합니다.  신규 가입 이벤트 진행합니다."
                  }
                ></textarea>
              </div>
            </div>
            {/* <div className="flex_box img_area">
              <div className="flex_left w100">
                <span className="label">상단 이미지</span>
                <button type="button" className="btn_plus"><span>&times;</span> 파일첨부</button>
                {/************** 이미지 첨부시 **************/}
            {/* <img src={banner} alt="" />}
              </div>
            </div> */}
            <div className="flex_box find_file">
              <div className="flex_left w100 flex_box_mr">
                <label htmlFor="">상단 이미지</label>
                <div className="find_file_wrap">
                  <label htmlFor="file" className="file_label">
                    <span></span>파일첨부
                  </label>
                  <input type="file" className="file" />
                </div>
              </div>
            </div>
            {/* <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">첨부파일</label>
                <button type="button" className="btn_plus"><span>&times;</span> 파일첨부</button>
              </div>
            </div> */}
            <div className="flex_box find_file">
              <div className="flex_left w100 flex_box_mr">
                <label htmlFor="">첨부파일</label>
                <div className="find_file_wrap">
                  <label htmlFor="file" className="file_label">
                    <span></span>파일첨부
                  </label>
                  <input type="file" className="file" />
                </div>
              </div>
            </div>
            {/************* 파일 첨부시 *************/}
            {/* <div className="file_box input_ty02">
              <div className="row">
                <input type="text" defaultValue={"신규 가입 안내1.jpg"} readOnly/>
                <button type="button" className="btn_close">&times;</button>
              </div>
              <div className="row">
                <input type="text" defaultValue={"신규 가입 안내1.jpg"} readOnly/>
                <button type="button" className="btn_close">&times;</button>
              </div>
            </div>             */}
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">비고</label>
                <textarea className="textarea" placeholder="직접입력"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_btn_wrap">
          <button type="button" className="btn_ty01 cancel" onClick={() => history(-1)}>
            취소
          </button>
          <button type="button" className="btn_ty01">
            등록
          </button>
        </div>
      </div>
    </>
  );
}
