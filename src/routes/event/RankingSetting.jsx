import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { ko } from "date-fns/esm/locale";
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";
import { useSelectBox } from "../../hooks/bundle_hooks";

export default function RankingSetting() {
  const [fixedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState();
  const calendarStart = useRef(null);
  const calendarEnd = useRef(null);
  const sCancelDatePicker = () => {
    currentDate === undefined ? setStartDate(fixedDate) : setStartDate(currentDate);
    calendarStart.current.setOpen(false);
  };
  const sOpenDatePicker = () => {
    calendarStart.current.setOpen(true);
  };
  const sCloseDatePicker = () => {
    setCurrentDate(startDate);
    calendarStart.current.setOpen(false);
  };
  const eCancelDatePicker = () => {
    currentDate === undefined ? setStartDate(fixedDate) : setEndDate(currentDate);
    calendarEnd.current.setOpen(false);
  };
  const eOpenDatePicker = () => {
    calendarEnd.current.setOpen(true);
  };
  const eCloseDatePicker = () => {
    setCurrentDate(endDate);
    calendarEnd.current.setOpen(false);
  };
  const formatDate = d => {
    const date = new Date(d);
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}년 ${`${monthIndex}`.slice(-2)}월`;
  };

  const { selectList, handleSelectBox } = useSelectBox({
    gender_sort: false,
    region_sort: false,
  });
  const [searchOption, setSearchOption] = useState({
    gender_sort: "전체",
    region_sort: "전체(지역)",
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };

  return (
    <>
      <Lnb lnbType="event" />
      <CurrentBox mod={true} del={true} down={true} tit="탄소 중립 랭킹 관리" />
      <div className="ranking_setting box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">    
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02" onClick={() => {handleSelectBox("gender_sort")}}>
              <input type="text" defaultValue="전체(성별)" readOnly/>
              {selectList.gender_sort && (
                <ul className="select_box">
                  {["전체", "남성", "여성"].map((gender, index) => {
                    return (
                      <li key={gender} data-type="gender_sort" data-value={gender} onClick={searchOptionSel}>{gender}</li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="select_input input_ty02" onClick={() => handleSelectBox("region_sort")}>
              <input type="text" defaultValue="전체(지역)" readOnly />
              {selectList.region_sort && (
                <ul className="select_box">
                  {["전체(지역)", "서울시", "경기도", "강원도", "경상도", "전라도", "충청도", "제주도", "인천", "대전", "대구", "광주", "부산", "울산",].map((region, index) => {
                    return (
                      <li key={region} data-type="region_sort" data-value={region} onClick={searchOptionSel}>{region}</li>
                    )
                  })}
                </ul>
              )}
            </div>           
          </div>            
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">                   
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                locale={ko}
                dateFormat="yyyy.MM.dd"
                shouldCloseOnSelect={false}
                disabledKeyboardNavigation
                renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                  <div className="react-datepicker__customHeader d-flex flex-ac flex-js">
                    <button onClick={decreaseMonth} className="arrow_left">
                      <img src={arrowRight} alt="" />
                    </button>
                    <h5 className="year_month">{formatDate(date)}</h5>
                    <button onClick={increaseMonth} className="arrow_right">
                      <img src={arrowRight} alt="" />
                    </button>
                  </div>
                )}
                ref={calendarStart}
                onInputClick={() => sOpenDatePicker()}
              >
                <div className="button-container">
                  <button className="btn_ctrl btn_ctrl-cancel btn_ty01 gray" onClick={sCancelDatePicker}>
                    취소
                  </button>
                  <button className="btn_ctrl btn_ctrl-confirm btn_ty01" onClick={sCloseDatePicker}>
                    설정
                  </button>
                </div>
              </DatePicker>
            </div>
            <div className="date_input input_ty02">
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                locale={ko}
                dateFormat="yyyy.MM.dd"
                shouldCloseOnSelect={false}
                disabledKeyboardNavigation
                renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                  <div className="react-datepicker__customHeader d-flex flex-ac flex-js">
                    <button onClick={decreaseMonth} className="arrow_left">
                      <img src={arrowRight} alt="" />
                    </button>
                    <h5 className="year_month">{formatDate(date)}</h5>
                    <button onClick={increaseMonth} className="arrow_right">
                      <img src={arrowRight} alt="" />
                    </button>
                  </div>
                )}
                ref={calendarEnd}
                onInputClick={() => eOpenDatePicker()}
              >
                <div className="button-container">
                  <button className="btn_ctrl btn_ctrl-cancel btn_ty01 gray" onClick={eCancelDatePicker}>
                    취소
                  </button>
                  <button className="btn_ctrl btn_ctrl-confirm btn_ty01" onClick={eCloseDatePicker}>
                    설정
                  </button>
                </div>
              </DatePicker>
            </div>
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
                <th rowSpan={2} className="num">NO</th>
                <th rowSpan={2}>변동일</th>
                <th rowSpan={2}>아이디</th>
                <th rowSpan={2}>성별</th>
                <th rowSpan={2}>생년월일</th>
                <th rowSpan={2}>거주인원 수 <button type="sort" className="btn_sort"></button></th>
                <th rowSpan={2}>포인트 <button type="sort" className="btn_sort"></button></th>
                <th rowSpan={2}>전체순위 <button type="sort" className="btn_sort"></button></th>
                <th colSpan={2}>지역순위</th>
              </tr>
              <tr>
                <th>지역</th>
                <th>순위 <button type="sort" className="btn_sort"></button></th>
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
        <CurrentBox add={false} mod={true} del={true} down={true} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}