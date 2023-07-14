import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";

export default function UserQnaHisDetail() {
  return (
    <>
      <Lnb lnbType="userInfo" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="1:1문의 내역 상세보기" /> */}
      <CurrentBox btns={["mod", "del", "down"]} tit="1:1문의 내역 상세보기" />
      <div className="user_history_qna_detail detail_form box_ty01 table_type">
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"110px"} />
              <col width={"200px"} />
              <col width={"110px"} />
              <col width={"200px"} />
              <col width={"110px"} />
              <col width={"200px"} />
              <col width={"110px"} />
              <col width={"200px"} />
            </colgroup>
            <tbody>
              <tr>
                <th>NO</th>
                <td>100</td>
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
                <td colSpan={3}>프로모션</td>
                <th>첨부파일</th>
                <td colSpan={3} className="align_left">
                  <p>aaaa_123.jpg</p>
                  <p>bbbbb.jpg</p>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan={7} className="align_left">
                  프로모션 참가 했는데 포인트 적립이 안됐어요. <br />왜 안되는거에요? <br />
                  저번에도 그랬는데
                </td>
              </tr>
              <tr>
                <th>답변내용</th>
                <td colSpan={7}>
                  <div className="input_ty02 align_left">
                    <textarea placeholder="직접입력" defaultValue={"포인트 적립 완료 되었습니다. 다시 한번 확인해주세요"} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={7}>
                  <div className="input_ty02 align_left">
                    <input type="text" placeholder="직접입력" className="align_left" defaultValue={"블랙리스트"} />
                  </div>
                </td>
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
