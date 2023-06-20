import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox, CheckBox } from "../../components/bundle_components";
import { ko } from "date-fns/esm/locale";
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";

export default function Point() {
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
      <Lnb lnbType="accumulated" />
      <CurrentBox add={true} del={true} down={true} tit="포인트 관리" />
      <div className="point box_ty01 table_type accumulated">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">
              <input type="text" defaultValue="전체" readOnly />
              <ul className="select_box">
                <li>전체</li>
                <li>지급중</li>
                <li>지급중지</li>
                <li>지급종료</li>
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
              <col width={"auto"}/>
              <col width={"80px"}/>
              <col width={"130px"}/>
              <col width={"230px"}/>
              <col width={"250px"}/>
              <col width={"180px"}/>
              <col width={"320px"}/>
              <col width={"150px"}/>
              <col width={"200px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="user_all" id="user_all" />
                </th>
                <th className="num">NO</th>
                <th>구분</th>
                <th>포인트명</th>
                <th>포인트 지급 시점</th>
                <th>지급할 포인트 금액</th>
                <th>지급 기한</th>
                <th>지급 상태</th>
                <th className="etc">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num"></td>
                <td>
                  <div className="select_input_wrap d-flex">
                    <div className="select_input input_ty02">
                      <input type="text" placeholder="선택" readOnly />
                      <ul className="select_box">
                        <li>회원가입</li>
                        <li>프로모션</li>
                        <li>이벤트</li>
                      </ul>
                    </div>            
                  </div>
                </td>
                <td className="input_ty02">
                  <input type="text" placeholder="직접입력" />
                </td>
                <td>
                  <div className="select_input_wrap d-flex">
                    <div className="select_input input_ty02">
                      <input type="text" placeholder="선택" readOnly />
                      <ul className="select_box">
                        <li>회원가입 완료 시</li>
                        <li>도장 n개 적립 시</li>
                        <li>전체 n위 달성 시</li>
                        <li>선택 정보 입력 완료 시</li>
                        <li>최초 글 등록 완료 시</li>
                        <li>이벤트 n회 참여 시</li>
                      </ul>
                    </div>            
                  </div>
                </td>
                <td>
                  <div className="input_ty02 d-flex flex-ac point_input">
                    <input type="text" placeholder="직접입력" /> P
                  </div>
                </td>
                <td>
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
                    <span className="wave">~</span>
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
                </td>
                <td>
                  <div className="select_input_wrap d-flex">
                    <div className="select_input input_ty02">
                      <input type="text" placeholder="선택" readOnly />
                      <ul className="select_box">
                        <li>지급중</li>
                        <li>지급중지</li>
                        <li>지급종료</li>
                      </ul>
                    </div>            
                  </div>
                </td>
                <td className="etc input_ty02">
                  <input type="text" placeholder="직접입력" />
                </td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">2</td>
                <td>회원가입</td>
                <td>최초 회원가입</td>
                <td className="number">
                  <div className="input_ty02 d-flex flex-ac flex-jc">
                    회원가입 완료 시
                  </div>                  
                </td>
                <td >
                  <div className="input_ty02 d-flex flex-ac point_input">
                    <input type="text" placeholder="직접입력" /> P
                  </div>
                </td>
                <td>
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
                    <span className="wave">~</span>
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
                </td>
                <td>
                  <div className="select_input_wrap d-flex">
                    <div className="select_input input_ty02">
                      <input type="text" placeholder="선택" readOnly />
                      <ul className="select_box">
                        <li>지급중</li>
                        <li>지급중지</li>
                        <li>지급종료</li>
                      </ul>
                    </div>            
                  </div>
                </td>
                <td className="etc input_ty02">
                  <input type="text" placeholder="직접입력" />
                </td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">1</td>
                <td>프로모션</td>
                <td>데일리 챌린지 도장 적립</td>
                <td className="number">
                  <div className="input_ty02 d-flex flex-ac flex-jc">
                    도장 <input type="number" />개 적립 시
                  </div>                  
                </td>
                <td>
                  <div className="input_ty02 d-flex flex-ac point_input">
                    <input type="text" placeholder="직접입력" /> P
                  </div>
                </td>
                <td>
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
                    <span className="wave">~</span>
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
                </td>
                <td>
                  <div className="select_input_wrap d-flex">
                    <div className="select_input input_ty02">
                      <input type="text" defaultValue={"지급종료"} readOnly />
                      <ul className="select_box">
                        <li>지급중</li>
                        <li>지급중지</li>
                        <li>지급종료</li>
                      </ul>
                    </div>            
                  </div>
                </td>
                <td className="etc input_ty02">
                  <input type="text" placeholder="직접입력" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
