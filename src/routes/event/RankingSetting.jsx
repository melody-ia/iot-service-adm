import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function RankingSetting() {
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    gender_sort: ["전체", "남성", "여성"],
    region_sort: ["전체(지역)", "서울시", "경기도", "강원도", "경상도", "전라도", "충청도", "제주도", "인천", "대전", "대구", "광주", "부산", "울산"],
  });

  return (
    <>
      <Lnb lnbType="event" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="탄소 중립 랭킹 관리" /> */}
      <CurrentBox btns={["mod", "del", "down"]} tit="탄소 중립 랭킹 관리" />
      <div className="ranking_setting box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
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
            <thead>
              <tr>
                <th rowSpan={2} className="check">
                  <CheckBox for="wr_1" id="wr_1" name="wr_1" />
                </th>
                <th rowSpan={2} className="num">
                  NO
                </th>
                <th rowSpan={2}>변동일</th>
                <th rowSpan={2}>아이디</th>
                <th rowSpan={2}>성별</th>
                <th rowSpan={2}>생년월일</th>
                <th rowSpan={2}>
                  거주인원 수 <button type="sort" className="btn_sort"></button>
                </th>
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
                  <CheckBox for="wr_2" id="wr_2" name="wr_2" />
                </td>
                <td className="num">1</td>
                <td>2023.05.08</td>
                <td>rrr12345</td>
                <td>남</td>
                <td>1990.01.01 </td>
                <td>3</td>
                <td>20,000</td>
                <td>1</td>
                <td>서울시 강남구</td>
                <td>1</td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">2</td>
                <td>2023.05.08</td>
                <td>asdf123</td>
                <td>여</td>
                <td>2000.01.01 </td>
                <td>1</td>
                <td>100,000</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <CurrentBox add={false} mod={true} del={true} down={true} hideTit={true} /> */}
        <CurrentBox btns={["add", "mod", "del", "down"]} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}
