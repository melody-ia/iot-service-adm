import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useSelectBox } from "../../hooks/bundle_hooks";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import plus from "../../assets/img/icon/border_plus.svg";

export default function NewsAdd() {
  const { selectList, handleSelectBox } = useSelectBox({
    faq_sort : false,
  });
  const [searchOption, setSearchOption] = useState({
    faq_sort : '구분',
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };

  const history = useNavigate();

  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox add={true} del={true} down={true} tit="FAQ 등록/수정" />
      {/* <div className="news_add detail_form box_ty01 table_type add_form">
        <div className="table_wrap line">
          <table className="table">  
            <colgroup>
              <col width={"230px"} />
              <col width={"auto"} />
              <col width={"230px"} />
              <col width={"auto"} />
              <col width={"230px"} />
              <col width={"auto"} />
            </colgroup>
            <tbody>
              <tr>
                <th>구분</th>
                <td>
                  <div className="select_input input_ty02">
                    <input type="text" defaultValue="구분" readOnly />
                    <ul className="select_box">
                      <li>구분</li>
                      <li>탄소발자국</li>
                      <li>챌린지</li>         
                      <li>랭킹</li>         
                      <li>회원</li>         
                      <li>기타</li>         
                    </ul>
                  </div>
                </td>
                <th>등록일</th>
                <td>2023.05.08</td>
                <th>공개여부</th>
                <td>
                  <div className="radio_box d-flex flex-ac flex-jc">
                    <RadioBtn for="show" id="show" name="show" text="공개" />
                    <RadioBtn for="noshow" id="noshow" name="show" text="비공개" />
                  </div>
                </td>               
              </tr>
              <tr>
                <th>제목</th>
                <td colSpan={5} className="align_left"><input type="text" className="w100" /></td>              
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan={5} className="align_left">
                  <textarea className="textarea w100"></textarea>
                </td>
              </tr>
              <tr>
                <th>
                  첨부 파일
                  <button type="button" className="btn_plus"><img src={plus} alt="" /></button>
                </th>
                <td colSpan={5} className="align_left">
                  <p>탄소발자국 안내1.jpg <button type="button" className="btn_close">&times;</button></p>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={5} className="align_left"><textarea className="textarea w100"></textarea></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="foot_btn_wrap d-flex flex-ac">
          <button type="button" className="btn_ty01 btn_bg add">
            등록
          </button>
          <button type="button" className="btn_ty01 btn_bg del">
            삭제
          </button>
          <button type="button" className="btn_ty01 btn_bg down">
            엑셀 다운로드
          </button>
        </div>
      </div> */}
      <div className="faq_add box_ty01 view_form add">
        <div className="write_type">
          <div className="wirte_area">
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">구분</label>
                <div className="select_input input_ty02" onClick={() => {handleSelectBox('faq_sort')}}>
                  <input type="text" defaultValue="구분" readOnly />
                  {selectList.faq_sort && (
                    <ul className="select_box">
                      {['구분', '탄소발자국', '챌린지', '랭킹', '회원', '기타'].map((faqSort, index) => {
                        return (
                          <li key={faqSort} data-value={faqSort} data-type="faq_sort" onClick={searchOptionSel}>{faqSort}</li>
                        )
                      })}
                    </ul>  
                  )}
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
                <label htmlFor="">제목</label>
                <input type="text" defaultValue={"탄소발자국에 대해서 알려주세요"}/>
              </div>
              <div className="input_ty02 flex_right">
                <label htmlFor="">등록일</label>
                <input type="text" placeholder="직접입력" defaultValue={"2023.05.08"}/>
              </div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100 flex_box_mr">
                <span className="label">내용</span>
                <textarea className="textarea faq_content" placeholder="직접입력" defaultValue={"탄소발자국에 대해서 알려주세요 탄소발자국에 대해서 알려주세요 탄소발자국에 대해서 알려주세요 탄소발자국에 대해서 알려주세요"}></textarea>
              </div>      
            </div>
            <div className="flex_box find_file">
              <div className="flex_left w100 flex_box_mr">
                <label htmlFor="">첨부파일</label>
                {/* <button type="button" className="btn_plus"><span>&times;</span> 파일첨부</button> */}
                <div className="find_file_wrap">
                  {/* <input className="upload-name" defaultValue={"파일첨부"} placeholder="파일첨부"/> */}
                  <label htmlFor="file" className="file_label"><span></span>파일첨부</label>
                  <input type="file" className="file"/>
                </div>
              </div>
            </div>
            <div className="file_box input_ty02 find_file">
              <div className="row">
                <input type="text" defaultValue={"신규 가입 안내1.jpg"} readOnly/>
                <button type="button" className="btn_close">&times;</button>
              </div>
              <div className="row">
                <input type="text" defaultValue={"신규 가입 안내1.jpg"} readOnly/>
                <button type="button" className="btn_close">&times;</button>
              </div>
            </div>       
            <div className="flex_box">
              <div className="input_ty02 flex_left w100 flex_box_mr">
                <label htmlFor="">비고</label>
                <textarea className="textarea faq_note" placeholder="직접입력"></textarea>
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