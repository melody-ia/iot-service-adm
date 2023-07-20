import { Link, useParams } from "react-router-dom";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useDatePicker } from "../../hooks/bundle_hooks";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserQnaHis() {
  const { id } = useParams();
  const { date, startDate, endDate } = useDatePicker();

  return (
    <>
      <Lnb lnbType="userInfo" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="1:1문의 내역" /> */}
      <CurrentBox btns={["mod", "del", "down"]} tit="1:1문의 내역" />
      <div className="user_history_qna box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">
              <input type="text" defaultValue="최근 문의일 순" readOnly />
              <ul className="select_box">
                <li>최근 문의일 순</li>
                <li>오래된 문의일 순</li>
              </ul>
            </div>
            <div className="select_input input_ty02">
              <input type="text" defaultValue="문의일" readOnly />
              <ul className="select_box">
                <li>문의일</li>
                <li>답변일</li>
              </ul>
            </div>
            <div className="select_input input_ty02">
              <input type="text" defaultValue="전체" readOnly />
              <ul className="select_box">
                <li>전체</li>
                <li>답변완료</li>
                <li>답변대기</li>
              </ul>
            </div>
            <div className="select_input input_ty02">
              <input type="text" defaultValue="전체" readOnly />
              <ul className="select_box">
                <li>전체</li>
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
          </div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search">
            검색
          </button>
        </div>
        <div className="table_wrap line part">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"80px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"200px"} />
              <col width={"auto"} />
              <col width={"auto"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th>
                <th className="num">NO</th>
                <th>문의일</th>
                <th>답변일</th>
                <th>답변여부</th>
                <th>구분</th>
                <th>내용</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="wr_1" id="wr_1" name="wr_1" />
                </td>
                <td className="num">2</td>
                <td>2023.04.20</td>
                <td>2023.05.08</td>
                <td>답변완료</td>
                <td>프로모션</td>
                <td className="overflow">
                  <Link to={"/UserQnaHis/UserQnaHisDetail/" + id}>프로모션 참가 했는데 포인트 적립이 안됐어요. 왜 안되는거에요? 저번에도</Link>
                </td>
                <td>블랙리스트</td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="wr_2" id="wr_2" name="wr_2" />
                </td>
                <td className="num">1</td>
                <td>2023.04.20</td>
                <td>-</td>
                <td>답변대기</td>
                <td>프로모션</td>
                <td className="overflow">
                  <Link to={"/UserQnaHis/UserQnaHisDetail/" + id}>프로모션 참가 했는데 포인트 적립이 안됐어요. 왜 안되는거에요? 저번에도</Link>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
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
        <Pagination />
      </div>
    </>
  );
}
