import { useDatePicker } from "../../hooks/bundle_hooks";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserCalcHis() {
  const { date, startDate, endDate } = useDatePicker();

  return (
    <>
      <Lnb lnbType="userInfo" />
      {/* <CurrentBox del={true} down={true} tit="탄소발자국 계산 내역" /> */}
      <CurrentBox btns={["del", "down"]} tit="탄소발자국 계산 내역" />
      <div className="user_history_calc box_ty01 table_type">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">
              <input type="text" defaultValue="최신 순" readOnly />
              <ul className="select_box">
                <li>최신 순</li>
                <li>오래된 순</li>
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
              <col width={"70px"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"350px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="check" id="check" />
                </th>
                <th className="num">NO</th>
                <th>계산일</th>
                <th colSpan={4}>계산 상세 내역</th>
                <th>총 CO2 발생량 (kg)</th>
                <th>소나무 (그루)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={9} className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td rowSpan={9} className="num">
                  2
                </td>
                <td rowSpan={9}>2023.05.08</td>
                <td rowSpan={2}>교통</td>
                <td rowSpan={2}>15.6</td>
                <td>소형승용차 / 휘발유 / 123km / 2명</td>
                <td>10</td>
                <td rowSpan={9}>6,570.2 kg</td>
                <td rowSpan={9}>약 1,164 그루</td>
              </tr>
              <tr>
                <td>지하철 / 30분 / 20회</td>
                <td>5.6</td>
              </tr>
              <tr>
                <td>여행</td>
                <td>240.45</td>
                <td>자가용 / 2대 / 50km</td>
                <td>100</td>
              </tr>
              <tr>
                <td rowSpan={2}>요리</td>
                <td rowSpan={2}>5,984.65</td>
                <td>소고기 / 10kg</td>
                <td>5960</td>
              </tr>
              <tr>
                <td>치즈 / 1kg</td>
                <td>21.2</td>
              </tr>
              <tr>
                <td>전기</td>
                <td>100</td>
                <td>100kWh / 2명</td>
                <td>100</td>
              </tr>
              <tr>
                <td>가스</td>
                <td>123.5</td>
                <td>도시가스 / 1000㎥ / 2명</td>
                <td>123.5</td>
              </tr>
              <tr>
                <td>수도</td>
                <td>76</td>
                <td>500㎥ / 2명</td>
                <td>76</td>
              </tr>
              <tr>
                <td>쓰레기 배출</td>
                <td>30</td>
                <td>30L / 2명</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"70px"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"350px"} />
            </colgroup>
            <tbody>
              <tr>
                <td rowSpan={9} className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td rowSpan={9} className="num">
                  1
                </td>
                <td rowSpan={9}>2023.05.08</td>
                <td rowSpan={2}>교통</td>
                <td rowSpan={2}>15.6</td>
                <td>소형승용차 / 휘발유 / 123km / 2명</td>
                <td>10</td>
                <td rowSpan={9}>6,570.2 kg</td>
                <td rowSpan={9}>약 1,164 그루</td>
              </tr>
              <tr>
                <td>지하철 / 30분 / 20회</td>
                <td>5.6</td>
              </tr>
              <tr>
                <td>여행</td>
                <td>240.45</td>
                <td>자가용 / 2대 / 50km</td>
                <td>100</td>
              </tr>
              <tr>
                <td rowSpan={2}>요리</td>
                <td rowSpan={2}>5,984.65</td>
                <td>소고기 / 10kg</td>
                <td>5960</td>
              </tr>
              <tr>
                <td>치즈 / 1kg</td>
                <td>21.2</td>
              </tr>
              <tr>
                <td>전기</td>
                <td>100</td>
                <td>100kWh / 2명</td>
                <td>100</td>
              </tr>
              <tr>
                <td>가스</td>
                <td>123.5</td>
                <td>도시가스 / 1000㎥ / 2명</td>
                <td>123.5</td>
              </tr>
              <tr>
                <td>수도</td>
                <td>76</td>
                <td>500㎥ / 2명</td>
                <td>76</td>
              </tr>
              <tr>
                <td>쓰레기 배출</td>
                <td>30</td>
                <td>30L / 2명</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="foot_btn_wrap d-flex flex-ac">
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
