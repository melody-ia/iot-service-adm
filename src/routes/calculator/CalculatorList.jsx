import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox, Pagination } from "../../components/bundle_components";
import { ko } from "date-fns/esm/locale";
import { useSelectBox } from "../../hooks/bundle_hooks";

import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";

export default function CalculatorList() {
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
    co2_state : false,
    cal_standard : false,
    gender : false,
    region : false,
  });
  const [searchOption, setSearchOption] = useState({
    co2_state : '전체',
    cal_standard : '계산일',
    banner_location : '메인 상단',
    gender : '전체(성별)',
    region : '전체(지역)',
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };

  return (
    <>
      <Lnb lnbType="calcHistory" />
      <CurrentBox down={true} tit="탄소발자국 계산 내역 리스트" />
      <div className="calc_list box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02" onClick={() => {handleSelectBox('co2_state')}}>
              <input type="text" defaultValue="전체" readOnly />
              {selectList.co2_state && (
                <ul className="select_box">
                  {['전체', 'CO2 발생량 높은 순', 'CO2 발생량 낮은 순'].map((co2State, index) => {
                    return(
                      <li key={co2State} data-value={co2State} data-type="co2_state" onClick={searchOptionSel}>{co2State}</li>
                    )
                  })}
                </ul>  
              )}
            </div>
            <div className="select_input input_ty02" onClick={() => {handleSelectBox('cal_standard')}}>
              <input type="text" defaultValue="계산일" readOnly />
              {selectList.cal_standard && (
                <ul className="select_box">
                  {['계산일', '생년월일'].map((calStandard, index) => {
                    return(
                      <li key={calStandard} data-value={calStandard} data-type="cal_standard" onClick={searchOptionSel}>{calStandard}</li>
                    )
                  })}
                </ul>  
              )}
            </div>
            <div className="select_input input_ty02" onClick={() => {handleSelectBox('gender')}}>
              <input type="text" defaultValue="전체(성별)" readOnly />
              {selectList.gender && (
                <ul className="select_box">
                  {['전체(성별)', '남성', '여성'].map((gender, index) => {
                    return(
                      <li key={gender} data-value={gender} data-type="gender" onClick={searchOptionSel}>{gender}</li>
                    )
                  })}
                </ul>  
              )}
            </div>
            <div className="select_input input_ty02"  onClick={() => {handleSelectBox('region')}}>
              <input type="text" defaultValue="전체(지역)" readOnly />
              {selectList.region && (
                <ul className="select_box">
                  {['전체(지역)', '서울시', '경기도', '강원도', '경상도', '전라도', '충청도', '제주도', '인천', '대전', '대구', '광주', '부산', '울산'].map((region, index) => {
                    return(
                      <li key={region} data-value={region} data-type="region" onClick={searchOptionSel}>{region}</li>
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
        <div className="table_wrap">
          <table className="table">
            <colgroup>
              <col width={"auto"} />
              <col width={"150px"} />
              <col width={"200px"} />
              <col width={"200px"} />
              <col width={"100px"} />
              <col width={"150px"} />
              <col width={"120px"} />
              <col width={"200px"} />
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
        <CurrentBox down={true} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}
