import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";

export default function QnaDetail() {
  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox mod={true} del={true} down={true} tit="1:1문의 상세보기" />
      <div className="qna_detail detail_form box_ty01 table_type add_from">
        <div className="table_wrap line">
          <table className="table">  
            <colgroup>
              <col width={"230px"} />
              <col width={"230px"} />
              <col width={"150px"} />
              <col width={"230px"} />
              <col width={"150px"} />
              <col width={"230px"} />
              <col width={"150px"} />
              <col width={"230px"} />
            </colgroup>
            <tbody>
              <tr>
                <th>아이디</th>
                <td>wwwizz</td>
                <th>문의일</th>
                <td>2023.05.08</td>
                <th>답변일</th>
                <td>2023.05.08</td>
                <th>답변여부</th>
                <td>
                  <div className="radio_box d-flex flex-ac flex-jc">
                    <RadioBtn for="yes" id="yes" name="state" text="답변완료" />
                    <RadioBtn for="no" id="no" name="state" text="답변대기" />
                  </div>
                </td>               
              </tr>
              <tr>
                <th>구분</th>
                <td colSpan={3}>
                  <div className="select_input input_ty02">
                    <input type="text" defaultValue="구분" readOnly />
                    <ul className="select_box">
                      <li>구분</li>
                      <li>데일리 챌린지</li>
                      <li>프로모션/이벤트</li>    
                      <li>탄소발자국 계산기</li>     
                      <li>기기관리</li>     
                      <li>랭킹</li>     
                      <li>포인트</li>     
                      <li>회원</li>     
                      <li>기타</li>     
                    </ul>
                  </div>
                </td>
                <th>첨부파일</th>
                <td colSpan={3} className="align_left">
                  <p>aaaaa_123.jpg</p>
                  <p>bbbbb.jpg</p>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan={7} className="align_left">
                  <p>데일리 발자국 챌린지에 글 쓰고 등록까지 했는데 포인트 적립이 안됐어요. 저번에도 그렇고 이번에 또 이렇게 문의하게 됐는데요 왜 그런거에요?</p>
                  <p>왜?</p>
                  <p>왜?</p>
                  <p>왜?</p>
                  <p>왜?</p>
                  <p>왜?</p>
                </td>
              </tr>
              <tr>
                <th>답변내용</th>
                <td colSpan={7} className="align_left">
                  <div className="input_ty02">
                    <textarea className="textarea w100"></textarea>
                  </div>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={7} className="align_left"><textarea className="textarea w100"></textarea></td>
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
    </>
  );
}