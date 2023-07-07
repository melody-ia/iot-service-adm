import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useSelectBox } from "../../hooks/bundle_hooks";
import { useState } from 'react';

export default function QnaDetail() {
  const { selectList, handleSelectBox } = useSelectBox({
    inquiry_sort : false,
  });
  const [searchOption, setSearchOption] = useState({
    inquiry_sort : '구분'
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };
  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox mod={true} del={true} down={true} tit="1:1문의 상세보기" />
      <div className="qna_detail box_ty01 view_form">
        <div className="write_type">
          <div className="wirte_area">
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">아이디</label>
                <input type="text" defaultValue={"wwwizz"} readOnly/>
              </div>
              <div className="flex_right">
                <label htmlFor="">답변여부</label>
                <div className="radio_group d-flex w100">
                  <RadioBtn for="yes" id="yes" name="state" text="답변완료" />
                  <RadioBtn for="no" id="no" name="state" text="답변대기" />
                </div>
              </div>                          
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">문의일</label>
                <input type="text" defaultValue={"2023.05.08"} readOnly/>
              </div>
              <div className="input_ty02 flex_right">
                <label htmlFor="">답변일</label>
                <input type="text" defaultValue={"2023.05.08"} readOnly/>
              </div>             
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">구분</label>
                <div className="select_input input_ty02" onClick={() => {handleSelectBox('inquiry_sort')}}>
                  <input type="text" defaultValue="구분" readOnly />
                  {selectList.inquiry_sort && (
                    <ul className="select_box">
                      {['구분', '데일리 챌린지', '프로모션/이벤트', '탄소발자국 계산기', '기기관리', '랭킹', '포인트', '회원', '기타'].map((inquirySort, index) => {
                        return (
                          <li key={inquirySort} data-value={inquirySort} data-type="inquiry_sort" onClick={searchOptionSel}>{inquirySort}</li>
                        )
                      })}
                    </ul>  
                  )}
                </div>
              </div>
              <div className="flex_right"></div>
            </div>            
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">내용</label>
                <textarea className="textarea" defaultValue={"탄소발자국에 대해서 알려주세요 탄소발자국에 대해서 알려주세요 탄소발자국에 대해서 알려주세요 탄소발자국에 대해서 알려주세요"} readOnly></textarea>
              </div>      
            </div>
            <div className="flex_box">
              <div className="flex_left w100">
                <label htmlFor="">첨부파일</label>
                <div className="file_box input_ty02">
                  <div className="row">
                    <input type="text" defaultValue={"신규 가입 안내1.jpg"} readOnly />
                  </div>
                </div>
              </div>
            </div>            
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">답변내용</label>
                <textarea className="textarea" placeholder="직접입력"></textarea>
              </div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">비고</label>
                <textarea className="textarea" placeholder="직접입력"></textarea>
              </div>
            </div>
          </div>         
        </div>
      </div>
    </>
  );
}