import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useDatePicker } from "../../hooks/bundle_hooks";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserPointHis() {
  const { date, startDate, endDate } = useDatePicker();

  return (
    <>
      <Lnb lnbType="userInfo" />
      <CurrentBox mod={true} del={true} down={true} tit="포인트 지급/사용 내역" />
      <div className="user_history_point box_ty01 table_type">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02 year">
              <input type="text" defaultValue="전체" readOnly />
              <ul className="select_box">
                <li>전체</li>
                <li>지급 내역</li>
                <li>사용 내역</li>
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
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"auto"} />
              <col width={"150px"} />
              <col width={"300px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="check" id="check" />
                </th>
                <th className="num">NO</th>
                <th>날짜</th>
                <th>+ P</th>
                <th>지급/사용 내역</th>
                <th>- P</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">1</td>
                <td className="date">2023.04.20</td>
                <td>1,000</td>
                <td>프로모션 참여</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">2</td>
                <td className="date">2023.04.20</td>
                <td>5,000</td>
                <td>프로모션 참여</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">3</td>
                <td className="date">2023.04.20</td>
                <td></td>
                <td>쇼핑몰 사용</td>
                <td>2,000</td>
                <td></td>
              </tr>
              <tr className="write_row">
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num"></td>
                <td className="date"></td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
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
