import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import banner from "../../assets/img/banner.png";
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";
import plus from "../../assets/img/icon/border_plus.svg";

export default function PopupAdd() {  
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

  return(
    <>
      <Lnb lnbType="event" />
      <CurrentBox mod={true} del={true} tit="팝업 등록/수정"/>
      <div className="popup_add box_ty01 table_type add_type">
        <div className="size_info">
          <h5 className="size_tit">팝업 사이즈 안내</h5>
          <ul>
            <li>팝업 사이즈: 가로 1080px 세로 365px (세로 사이즈는 변동 가능)</li>
          </ul>
        </div>
        <div className="table_wrap line">
          <table className="table"> 
            <colgroup>
              <col width={"80px"}/>
              <col width={"300px"}/>
              <col width={"80px"}/>
              <col width={"50%"}/>
            </colgroup>
            <tbody>
              <tr>               
                <th>팝업 이름</th>
                <td className="input_ty02">
                  <input type="text" />
                </td>
                <th rowSpan={4}>
                  팝업 이미지
                  <div className="btn_wrap">
                    <button type="button"><img src={plus} alt="" /></button>
                  </div>
                </th>
                <td rowSpan={4}>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <th>팝업 위치</th>
                <td>
                  <div className="select_input input_ty02">
                    <input type="text" defaultValue="메인" readOnly />
                    <ul className="select_box">
                      <li>메인</li>
                      <li>데일리 챌린지 리스트</li>
                      <li>탄소중립실천랭킹</li>
                      <li>탄소발자국계산기</li>
                      <li>이벤트/뉴스 리스트</li>
                      <li>GL 추천제품</li>
                      <li>마이페이지 개인정보수정</li>
                      <li>MY 챌린지 현황</li>
                      <li>MY 챌린지 적립 내역</li>
                      <li>MY 발자국 계산 내역</li>
                      <li>MY 랭킹 현황</li>
                      <li>MY ECO Point</li>
                    </ul>
                  </div>
                </td>
              </tr>              
              <tr>
                <th>공개 기한</th>
                <td>
                  <div className="date_input_wrap d-flex flex-jc">
                    <div className="date_input">
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
                    <span>~</span>
                    <div className="date_input">
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
                </td>
              </tr>
              <tr>
                <th>공개 여부</th>
                <td> 
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show" id="show" name="show" text="공개" />
                      <RadioBtn for="noshow" id="noshow" name="show" text="비공개" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>링크연결</th>
                <td colSpan={3}>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={3}>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
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
          <button type="button" className="btn_ty01 btn_bg can">
            취소
          </button>
        </div>         
      </div>
    </>
  )
}