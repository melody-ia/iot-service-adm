import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { ko } from "date-fns/esm/locale";
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";
import CheckBox from "../../components/CheckBox";
import Pagination from "../../components/Pagination";

export default function UserPromoHis() {
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

  return (
    <>
      <Lnb lnbType="userInfo" />
      <CurrentBox mod={true} del={true} down={true} tit="프로모션 참여 내역" />
      <div className="user_history_pro box_ty01 table_type">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">
              <input type="text" defaultValue="진행 기간" readOnly />
              <ul className="select_box">
                <li>진행 기간</li>
                <li>참여 기간</li>
              </ul>
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
              <col width={"80px"}/>
              <col width={"150px"}/>
            </colgroup>         
            <tbody>             
              <tr>
                <td rowSpan={5} className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td rowSpan={5} className="num">3</td>
                <th className="tit">프로모션 명</th>
                <td className="promotion" colSpan={3}>
                  <Link to="/UserPromoHisDetail">데일리 챌린지_데일리 탄소 줄이기 <img src={arrowRight} alt="오른쪽 화살표 아이콘" className="arrow_right" /></Link>
                </td>
              </tr>
              <tr>
                <th className="tit">프로모션 진행 기간</th>
                <td className="date">2023.03.01 – 2023.12.31</td>
                <th className="tit">프로모션 참여 기간</th>
                <td className="date">2023.05.10 - 오늘날짜</td>
              </tr>
              <tr>
                <th className="tit">등록한 글 개수</th>
                <td className="date">15</td>
                <th className="tit">도장 적립 개수</th>
                <td className="date">15</td>
              </tr>
              <tr>
                <th className="tit">좋아요 개수</th>
                <td className="date">200</td>
                <th className="tit">신고 당한 이력</th>
                <td className="date">1</td>
              </tr>
              <tr>
                <th className="tit">적립 포인트</th>
                <td colSpan={3} className="date">15,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table_wrap">
          <table className="table">  
            <colgroup>
              <col width={"80px"}/>
              <col width={"150px"}/>
            </colgroup>         
            <tbody>             
              <tr>
                <td rowSpan={5} className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td rowSpan={5} className="num">2</td>
                <th className="tit">프로모션 명</th>
                <td className="promotion" colSpan={3}>
                  <Link to="/UserPromoHisDetail">데일리 챌린지_데일리 탄소 줄이기 <img src={arrowRight} alt="오른쪽 화살표 아이콘" className="arrow_right" /></Link>
                </td>
              </tr>
              <tr>
                <th className="tit">프로모션 진행 기간</th>
                <td className="date">2023.03.01 – 2023.12.31</td>
                <th className="tit">프로모션 참여 기간</th>
                <td className="date">2023.05.10 - 오늘날짜</td>
              </tr>
              <tr>
                <th className="tit">등록한 글 개수</th>
                <td className="date">15</td>
                <th className="tit">도장 적립 개수</th>
                <td className="date">15</td>
              </tr>
              <tr>
                <th className="tit">좋아요 개수</th>
                <td className="date">200</td>
                <th className="tit">신고 당한 이력</th>
                <td className="date">1</td>
              </tr>
              <tr>
                <th className="tit">적립 포인트</th>
                <td colSpan={3} className="date">15,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table_wrap">
          <table className="table">  
            <colgroup>
              <col width={"80px"}/>
              <col width={"150px"}/>
            </colgroup>         
            <tbody>             
              <tr>
                <td rowSpan={5} className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td rowSpan={5} className="num">1</td>
                <th className="tit">프로모션 명</th>
                <td className="promotion" colSpan={3}>
                  <Link to="/UserPromoHisDetail">데일리 챌린지_데일리 탄소 줄이기 <img src={arrowRight} alt="오른쪽 화살표 아이콘" className="arrow_right" /></Link>
                </td>
              </tr>
              <tr>
                <th className="tit">프로모션 진행 기간</th>
                <td className="date">2023.03.01 – 2023.12.31</td>
                <th className="tit">프로모션 참여 기간</th>
                <td className="date">2023.05.10 - 오늘날짜</td>
              </tr>
              <tr>
                <th className="tit">등록한 글 개수</th>
                <td className="date">15</td>
                <th className="tit">도장 적립 개수</th>
                <td className="date">15</td>
              </tr>
              <tr>
                <th className="tit">좋아요 개수</th>
                <td className="date">200</td>
                <th className="tit">신고 당한 이력</th>
                <td className="date">1</td>
              </tr>
              <tr>
                <th className="tit">적립 포인트</th>
                <td colSpan={3} className="date">15,000</td>
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
