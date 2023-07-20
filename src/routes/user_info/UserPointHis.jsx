import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useDatePicker } from "../../hooks/bundle_hooks";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserPointHis() {
  const { date, startDate, endDate } = useDatePicker();

  return (
    <>
      <Lnb lnbType="userInfo" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="포인트 지급/사용 내역" /> */}
      <CurrentBox btns={["mod", "del", "down"]} tit="포인트 지급/사용 내역" />
      <div className="user_history_point box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
            <p className="user_point_total">총 보유 포인트 : <span>2,500</span></p>
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
            <button type="button" className="btn_ty01 btn_search">검색</button>
        </div>
        <div className="table_wrap line part">
          <table className="table">
            <colgroup>
              <col width={"100px"} />
              <col width={"100px"} />
              <col width={"200px"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"200px"} />
              <col width={"300px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
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
                  <CheckBox for="wr_1" id="wr_1" name="wr_1" />
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
                  <CheckBox for="wr_2" id="wr_2" name="wr_2" />
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
                  <CheckBox for="wr_3" id="wr_3" name="wr_3" />
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
                  <CurrentBox btns={["add"]}/>
                  {/* <button type="button" className="btn_ty01 btn_bg add" data-btn="add">등록</button> */}
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
