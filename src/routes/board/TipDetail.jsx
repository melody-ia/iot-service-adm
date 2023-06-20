import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import banner from "../../assets/img/banner.png";

export default function TipDetail() {
  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox mod={true} del={true} down={true} tit="탄소중립 TIP 자료실 상세보기" />
      <div className="top_detail detail_form box_ty01 table_type">
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
                <td colSpan={3} className="align_left">탄소발자국 계산기 사용법</td>              
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan={3} className="align_left">
                  <p>탄소발자국 계산기 사용법</p>
                  <p>탄소발자국 계산기 사용법</p>
                  <p>탄소발자국 계산기 사용법</p>
                  <p>탄소발자국 계산기 사용법</p>
                  <p>탄소발자국 계산기 사용법</p>
                  <p>탄소발자국 계산기 사용법</p>
                  <p>탄소발자국 계산기 사용법</p>
                  <p>탄소발자국 계산기 사용법</p>
                </td>
              </tr>
              <tr>
                <th>상단 이미지</th>
                <td><img src={banner} alt="" /></td>
                <th>첨부 파일</th>
                <td className="align_left">
                  <p>사용 안내1.pdf</p>
                  <p>탄소발자국2.jpg</p>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={3} className="align_left">-</td>
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