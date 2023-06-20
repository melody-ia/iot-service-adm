import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox, CheckBox } from "../../components/bundle_components";
import { ko } from "date-fns/esm/locale";
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";

export default function Stamp() {
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
      <CurrentBox add={true} del={true} down={true} tit="도장 관리" />
      <div className="stamp box_ty01 table_type accumulated">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">
              <input type="text" defaultValue="전체" readOnly />
              <ul className="select_box">
                <li>전체</li>
                <li>적립중</li>
                <li>적립중지</li>
                <li>적립종료</li>
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
              <col width={"120px"}/>
              <col width={"130px"}/>
              <col width={"120px"}/>
              <col width={"300px"}/>
              <col width={"150px"}/>
              <col width={"200px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="user_all" id="user_all" />
                </th>
                <th className="num">NO</th>
                <th colSpan={4}>도장 적립 정책</th>
                <th>적립 기한</th>
                <th>적립 상태</th>
                <th className="etc">비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num"></td>
                <td>글 등록 개수</td>
                <td className="input_ty02">
                  <input type="text" placeholder="직접입력" />
                </td>
                <td>도장 적립 개수</td>
                <td className="input_ty02">
                  <input type="text" placeholder="직접입력" />
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
                      <input type="text" defaultValue="전체" readOnly />
                      <ul className="select_box">
                        <li>전체</li>
                        <li>적립중</li>
                        <li>적립중지</li>
                        <li>적립종료</li>
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
                <td>글 등록 개수</td>
                <td>1</td>
                <td>도장 적립 개수</td>
                <td>1</td>
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
                <td>적립중지</td>
                <td className="etc input_ty02">
                  <input type="text" placeholder="직접입력" />
                </td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">1</td>
                <td>글 등록 개수</td>
                <td>2</td>
                <td>도장 적립 개수</td>
                <td>1</td>
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
                <td>적립중</td>
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
