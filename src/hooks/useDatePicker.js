import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import arrowRight from "../assets/img/icon/angle_thin_right_g.svg";
import { useLocation } from "react-router-dom";

export function useDatePicker() {
  const defaultDataS = new Date();
  defaultDataS.setDate(1);
  const { pathname } = useLocation();
  const [fixedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(defaultDataS);
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
    if (startDate > endDate) setEndDate(startDate);
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
  const before3m = new Date();
  before3m.setMonth(before3m.getMonth() - 3);

  const date = {
    start: (
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
    ),
    end: (
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
    ),
  };

  useEffect(() => {
    const before3mPage = ["UserQnaHis", "UserPointHis", "UserStempHis"];
    if (before3mPage.some(el => pathname.includes(el))) {
      setStartDate(before3m);
    }
  }, []);

  return {
    date,
    start_at: startDate.toLocaleDateString().split(".").join("-").replace(/\s/g, "").slice(0, -1),
    end_at: endDate.toLocaleDateString().split(".").join("-").replace(/\s/g, "").slice(0, -1),
    before3m: before3m.toLocaleDateString().split(".").join("-").replace(/\s/g, "").slice(0, -1),
  };
}
