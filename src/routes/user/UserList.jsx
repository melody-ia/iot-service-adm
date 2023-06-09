import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";
import CheckBox from "../../components/CheckBox";

export default function UserList() {
  const [fixedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState();
  const calendarStart = useRef(null);
  const calendarEnd = useRef(null);
  const sCancelDatePicker = () => {
    currentDate === undefined? setStartDate(fixedDate) : setStartDate(currentDate); 
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
    currentDate === undefined? setStartDate(fixedDate) : setEndDate(currentDate); ; 
    calendarEnd.current.setOpen(false);
  };  
  const eOpenDatePicker = () => {
    calendarEnd.current.setOpen(true);
  };
  const eCloseDatePicker = () => {
    setCurrentDate(endDate);
    calendarEnd.current.setOpen(false);
  };
  const formatDate = (d) => {
    const date = new Date(d);
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year}년 ${`${monthIndex}`.slice(-2)}월`;
  }

  return(
    <div className="user_list box_ty01">
      <div className="filter_wrap d-flex">
        <div className="select_input input_ty02">
          <input type="text" defaultValue="최근 가입일 순" readOnly/>
          <ul className="select_box">
            <li>최근 가입일 순</li>
            <li>오래된 가입일 순</li>
          </ul>
        </div>
        <div className="select_input input_ty02">
          <input type="text" defaultValue="전체" readOnly/>
          <ul className="select_box">
            <li>전체</li>
            <li>계정 활성화</li>
            <li>계정 비활성화</li>
          </ul>
        </div>
        <div className="date_input input_ty02">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            locale={ko}
            dateFormat="yyyy.MM.dd"
            shouldCloseOnSelect={false}
            disabledKeyboardNavigation
            renderCustomHeader={({date, decreaseMonth, increaseMonth})=> (
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
              <button className="btn_ctrl btn_ctrl-cancel btn_ty01 gray" onClick={sCancelDatePicker}>취소</button>
              <button className="btn_ctrl btn_ctrl-confirm btn_ty01" onClick={sCloseDatePicker}>설정</button>
            </div>
          </DatePicker>
        </div>
        <div className="date_input input_ty02">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            locale={ko}
            dateFormat="yyyy.MM.dd"
            shouldCloseOnSelect={false}
            disabledKeyboardNavigation
            renderCustomHeader={({date, decreaseMonth, increaseMonth})=> (
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
              <button className="btn_ctrl btn_ctrl-cancel btn_ty01 gray" onClick={eCancelDatePicker}>취소</button>
              <button className="btn_ctrl btn_ctrl-confirm btn_ty01" onClick={eCloseDatePicker}>설정</button>
            </div>
          </DatePicker>
        </div>
        <button type="button" className="btn_ty01 btn_search">검색</button>
      </div>
      {/* <div className="table_wrap">
        <div className="table">
          <div className="table_head row">
            <span className="row_item check"><CheckBox for="user_all" id="user_all"/></span>
            <span className="row_item num">NO</span>
            <span className="row_item id">아이디</span>
            <span className="row_item name">이름</span>
            <span className="row_item gender">성별</span>
            <span className="row_item birth">생년월일</span>
            <span className="row_item people">거주인원 수</span>
            <span className="row_item email">이메일</span>
            <span className="row_item phone">휴대폰 번호</span>
            <span className="row_item joinDate">가입일</span>
            <span className="row_item active">계정활성화 여부</span>
            <span className="row_item etc">비고</span>
          </div>
          <div className="table_body">
            <div className="row">
              <span className="row_item check"><CheckBox for="check" id="check" /></span>
              <span className="row_item num">100</span>
              <span className="row_item id disabled">wizzzzzzzzzzz</span>
              <span className="row_item name">김위즈</span>
              <span className="row_item gender">남</span>
              <span className="row_item birth">1990.10.01</span>
              <span className="row_item people">3</span>
              <span className="row_item email">kimwewew@naver.com</span>
              <span className="row_item phone">010-1111-1111</span>
              <span className="row_item joinDate">2023.05.08</span>
              <span className="row_item active">X</span>
              <span className="row_item etc input_ty02">
                <input type="text"/> 
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="table_wrap">
        <table className="table">
          <colgroup>
            <col width="5%" />
            <col width="10%" />
            <col width="180px" />
            <col width="120px" />
            <col width="120px" />
            <col width="120px" />
            <col width="120px" />
            <col width="180px" />
            <col width="150px" />
            <col width="150px" />
            <col width="150px" />
            <col width="180px" />
          </colgroup>
          <thead>
            <tr>
              <th className="check"><CheckBox for="user_all" id="user_all"/></th>
              <th className="num">NO</th>
              <th className="id">아이디</th>
              <th className="name">이름</th>
              <th className="gender">성별</th>
              <th className="birth">생년월일</th>
              <th className="people">거주인원 수</th>
              <th className="email">이메일</th>
              <th className="phone">휴대폰 번호</th>
              <th className="joinDate">가입일</th>
              <th className="active">계정활성화 여부</th>
              <th className="etc">비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="row_item check"><CheckBox for="check" id="check" /></td>
              <td className="row_item num">100</td>
              <td className="row_item id disabled">wizzzzzzzzzzz</td>
              <td className="row_item name">김위즈</td>
              <td className="row_item gender">남</td>
              <td className="row_item birth">1990.10.01</td>
              <td className="row_item people">3</td>
              <td className="row_item email">kimwewew@naver.com</td>
              <td className="row_item phone">010-1111-1111</td>
              <td className="row_item joinDate">2023.05.08</td>
              <td className="row_item active">X</td>
              <td className="row_item etc input_ty02">
                <input type="text"/> 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}