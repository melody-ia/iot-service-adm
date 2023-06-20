import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox, CheckBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { ko } from "date-fns/esm/locale";
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";
import banner from "../../assets/img/banner.png";

export default function PopupSetting() {
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
      <Lnb lnbType="event" />
      <CurrentBox add={true} mod={true} del={true} down={true} tit="팝업 리스트" />
      <div className="popup_setting box_ty01 table_type">
        <div className="filter_wrap d-flex">    
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">
              <input type="text" defaultValue="등록일" readOnly />
              <ul className="select_box">
                <li>등록일</li>
                <li>공개기한</li>
              </ul>
            </div>
            <div className="select_input input_ty02">
              <input type="text" defaultValue="전체" readOnly />
              <ul className="select_box">
                <li>전체</li>
                <li>공개</li>
                <li>비공개</li>               
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
        <div className="table_wrap line">
          <table className="table">   
            <colgroup>
              <col width={"auto"} />
              <col width={"80px"} />
              <col width={"400px"} />
              <col width={"200px"} />
              <col width={"200px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"240px"} />
              <col width={"250px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="check" id="check" />
                </th>
                <th className="num">NO</th>
                <th>팝업 이미지</th>
                <th>팝업 이름</th>
                <th>팝업 위치</th>
                <th>등록일</th>
                <th>공개기한</th>
                <th>공개여부</th>
                <th>비고</th>
              </tr>
            </thead>    
            <tbody>            
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">2</td>
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>프로모션</td>
                <td>메인</td>
                <td>2023.05.01</td>
                <td>2023.05.08 – <br />2023.07.08</td>
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show01" id="show01" name="show" text="공개" />
                      <RadioBtn for="noshow01" id="noshow01" name="show" text="비공개" />
                    </div>
                  </div>
                </td> 
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder={"직접 입력"}/>
                  </div>
                </td>
              </tr>                        
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">1</td>
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>어플 다운로드</td>
                <td>탄소중립실천랭킹</td>
                <td>2023.05.01</td>
                <td>2023.05.08 – <br />2023.07.08</td>
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show01" id="show01" name="show" text="공개" />
                      <RadioBtn for="noshow01" id="noshow01" name="show" text="비공개" />
                    </div>
                  </div>
                </td> 
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder={"직접 입력"}/>
                  </div>
                </td>
              </tr>                        
            </tbody>
          </table>
        </div>
        <div className="foot_btn_wrap d-flex flex-ac">
          <button type="button" className="btn_ty01 btn_bg add">
            등록
          </button>
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