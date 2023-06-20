import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import plus from "../../assets/img/icon/border_plus.svg";

export default function TipAdd() {
  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox add={true} del={true} down={true} tit="탄소중립 TIP 자료실 등록/수정" />
      <div className="tip_add detail_form box_ty01 table_type add_from">
        <div className="table_wrap line">
          <table className="table">  
            <colgroup>
              <col width={"230px"} />
              <col width={"auto"} />
              <col width={"230px"} />
              <col width={"auto"} />
            </colgroup>
            <tbody>
              <tr>
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
                <td colSpan={3} className="align_left"><input type="text" className="w100" /></td>              
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan={3} className="align_left">
                  <textarea className="textarea w100"></textarea>
                </td>
              </tr>
              <tr>
                <th>
                  상단 이미지
                  <button type="button" className="btn_plus"><img src={plus} alt="" /></button>
                </th>
                <td></td>
                <th>
                  첨부 파일
                  <button type="button" className="btn_plus"><img src={plus} alt="" /></button>
                </th>
                <td className="align_left"></td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={3} className="align_left"><textarea className="textarea w100"></textarea></td>
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
      </div>
    </>
  );
}