import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import banner from "../../assets/img/banner.png";

export default function NewsDetail() {
  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox mod={true} del={true} down={true} tit="이벤트/뉴스 상세보기" />
      <div className="news_detail detail_form box_ty01 table_type">
        <div className="table_wrap line">
          <table className="table">  
            {/* <colgroup>
              <col width={"110px"}/>
              <col width={"200px"}/>
              <col width={"110px"}/>
              <col width={"200px"}/>
              <col width={"110px"}/>
              <col width={"200px"}/>
              <col width={"110px"}/>
              <col width={"200px"}/>
            </colgroup> */}
            <tbody>
              <tr>
                <th>구분</th>
                <td>
                  <div className="radio_box d-flex flex-ac flex-jc">
                    <RadioBtn for="event" id="event" name="category" text="이벤트" />
                    <RadioBtn for="news" id="news" name="category" text="뉴스" />
                  </div>
                </td>
                <th>등록일</th>
                <td>2023.05.08</td>
                <th>공개여부</th>
                <td>
                  <div className="radio_box d-flex flex-ac flex-jc">
                    <RadioBtn for="yes" id="yes" name="state" text="답변완료" />
                    <RadioBtn for="no" id="no" name="state" text="답변대기" />
                  </div>
                </td>               
              </tr>
              <tr>
                <th>제목</th>
                <td colSpan={5} className="align_left">신규 가입 이벤트 진행</td>              
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan={5} className="align_left">
                  <p>신규 가입 이벤트 진행합니다.</p>
                  <p>신규 가입 이벤트 진행합니다.</p>
                  <p>신규 가입 이벤트 진행합니다.</p>
                  <p>신규 가입 이벤트 진행합니다.</p>
                  <p>신규 가입 이벤트 진행합니다.</p>
                  <p>신규 가입 이벤트 진행합니다.</p>
                  <p>신규 가입 이벤트 진행합니다.</p>
                  <p>신규 가입 이벤트 진행합니다.</p>
                </td>
              </tr>
              <tr>
                <th>상단 이미지</th>
                <td colSpan={2}><img src={banner} alt="" /></td>
                <th>첨부 파일</th>
                <td colSpan={2}>
                  <p>신규 가입 안내1.jpg</p>
                  <p>신규 가입 안내2.jpg</p>
                  <p>신규 가입 안내3.jpg</p>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={5}>-</td>
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