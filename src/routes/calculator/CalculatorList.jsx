import { Link } from "react-router-dom";
import { Lnb, CurrentBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";

export default function CalculatorList() {
  const { date, startDate, endDate } = useDatePicker();

  const { selectedValues, selecBoxHtml } = useSelectBox({
    co2_state: ["전체", "CO2 발생량 높은 순", "CO2 발생량 낮은 순"],
    cal_standard: ["계산일", "생년월일"],
    gender: ["전체(성별)", "남성", "여성"],
    region: ["전체(지역)", "서울시", "경기도", "강원도", "경상도", "전라도", "충청도", "제주도", "인천", "대전", "대구", "광주", "부산", "울산"],
  });

  return (
    <>
      <Lnb lnbType="calcHistory" />
      {/* <CurrentBox down={true} tit="탄소발자국 계산 내역 리스트" /> */}
      <CurrentBox btns={["down"]} tit="탄소발자국 계산 내역 리스트" />
      <div className="calc_list box_ty01 table_type table_comm">
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
        <div className="table_wrap">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"100px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"100px"} />
              <col width={"100px"} />
              <col width={"100px"} />
              <col width={"150px"} />
              <col width={"150px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="num">NO</th>
                <th>계산일</th>
                <th>아이디</th>
                <th>지역</th>
                <th>성별</th>
                <th>생년월일</th>
                <th>거주인원 수</th>
                <th>총 CO2 발생량 (kg)</th>
                <th>소나무 (그루)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>2023.05.08</td>
                <td>
                  <Link to="/UserCalcHis/:id"> wizzzzz</Link>
                </td>
                <td>서울시 강남구</td>
                <td>남성</td>
                <td>1990.10.01</td>
                <td>-</td>
                <td>6,570.2</td>
                <td>1,164</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2023.05.08</td>
                <td>abc1234</td>
                <td>강원도 삼척시</td>
                <td>여성</td>
                <td>1990.10.01</td>
                <td>3</td>
                <td>6,570.2</td>
                <td>1,164</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <CurrentBox down={true} hideTit={true} /> */}
        <CurrentBox btns={["down"]} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}
