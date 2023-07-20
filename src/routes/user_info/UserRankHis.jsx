import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useDatePicker } from "../../hooks/bundle_hooks";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserRankHis() {
  const { date, startDate, endDate } = useDatePicker();

  return (
    <>
      <Lnb lnbType="userInfo" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="탄소 중립 랭킹 변동 내역" /> */}
      <CurrentBox btns={["mod", "del", "down"]} tit="탄소 중립 랭킹 변동 내역" />
      <div className="user_history_rank box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
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
                <col width={"100px"}/>
                <col width={"100px"}/>
                <col width={"150px"}/>
                <col width={"150px"}/>
                <col width={"150px"}/>
                <col width={"250px"}/>
                <col width={"250px"}/>
            </colgroup>
            <thead>
              <tr>
                <th rowSpan={2} className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th>
                <th rowSpan={2} className="num">
                  NO
                </th>
                <th rowSpan={2}>변동일</th>
                <th rowSpan={2}>
                  포인트 <button type="sort" className="btn_sort"></button>
                </th>
                <th rowSpan={2}>
                  전체순위 <button type="sort" className="btn_sort"></button>
                </th>
                <th colSpan={2}>지역순위</th>
              </tr>
              <tr>
                <th>지역</th>
                <th>
                  순위 <button type="sort" className="btn_sort"></button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="wr_1" id="wr_1" name="wr_1" />
                </td>
                <td className="num">2</td>
                <td>2023.05.08</td>
                <td>20,000</td>
                <td>1</td>
                <td>서울시 강남구</td>
                <td>1</td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="wr_2" id="wr_2" name="wr_2" />
                </td>
                <td className="num">1</td>
                <td>2023.05.08</td>
                <td>20,000</td>
                <td>1</td>
                <td>-</td>
                <td>-</td>
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
