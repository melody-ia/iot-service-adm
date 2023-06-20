import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";

export default function NewsDetail() {
  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox mod={true} del={true} down={true} tit="FAQ 상세보기" />
      <div className="faq_detail detail_form box_ty01 table_type add_from">
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
                <td>탄소발자국</td>
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
                <td colSpan={5} className="align_left">탄소발자국에 대해서 알려주세요.</td>              
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan={5} className="align_left">
                  <p>탄소발자국에 대해서 알려주세요.</p>
                  <p>탄소발자국에 대해서 알려주세요.</p>
                  <p>탄소발자국에 대해서 알려주세요.</p>
                  <p>탄소발자국에 대해서 알려주세요.</p>
                  <p>탄소발자국에 대해서 알려주세요.</p>
                  <p>탄소발자국에 대해서 알려주세요.</p>
                </td>
              </tr>
              <tr>
                <th>첨부 파일</th>
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