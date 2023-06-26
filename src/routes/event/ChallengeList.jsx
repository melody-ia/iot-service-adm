import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox, CheckBox, Pagination } from "../../components/bundle_components";
import { useSelectBox } from "../../hooks/bundle_hooks";
import { ko } from "date-fns/esm/locale";
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";

export default function ChallengeList() {
  const { id } = useParams();
  const { selectList, handleSelectBox } = useSelectBox({
    sort_date: false,
    search_type: false,
    search_state: false,
  });
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
  const [searchOption, setSearchOption] = useState({
    sort_date: "최근 등록일 순",
    search_type: "등록일",
    search_state: "전체",
    search_dateS: startDate,
    search_dateE: endDate,
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };
  const dataSubmit = async () => {
    // const res = await axios.post("api", {
    //   data: { ...searchOption },
    // });
  };

  return (
    <>
      <Lnb lnbType="event" />
      <CurrentBox add={true} mod={true} del={true} down={true} tit="데일리 챌린지 리스트" />
      <div className="ch_list box_ty01 table_type">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("sort_date");
              }}
            >
              <input type="text" value={searchOption.sort_date} readOnly />
              {selectList.sort_date && (
                <ul className="select_box">
                  {["최근 등록일 순", "오래된 등록일 순"].map((el, idx) => {
                    return (
                      <li key={idx} data-type="sort_date" data-value={el} onClick={searchOptionSel}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("search_type");
              }}
            >
              <input type="text" value={searchOption.search_type} readOnly />
              {selectList.search_type && (
                <ul className="select_box">
                  {["등록일", "진행기간"].map((el, idx) => {
                    return (
                      <li key={idx} data-type="search_type" data-value={el} onClick={searchOptionSel}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("search_state");
              }}
            >
              <input type="text" value={searchOption.search_state} readOnly />
              {selectList.search_state && (
                <ul className="select_box">
                  {["전체", "진행중", "진행중지", "진행완료"].map((el, idx) => {
                    return (
                      <li key={idx} data-type="search_state" data-value={el} onClick={searchOptionSel}>
                        {el}
                      </li>
                    );
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
          <button type="button" className="btn_ty01 btn_search" onClick={dataSubmit}>
            검색
          </button>
        </div>
        <div className="table_wrap">
          <table className="table">
            <colgroup>
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"300px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"150px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="user_all" id="user_all" />
                </th>
                <th className="num">NO</th>
                <th>프로모션 명</th>
                <th className="date">등록일</th>
                <th>
                  프로모션
                  <br />
                  진행 기간
                </th>
                <th>
                  총<br />
                  참여 회원 수
                </th>
                <th>
                  총<br />
                  등록된 글 개수
                </th>
                <th>
                  총 적립된
                  <br />
                  도장 개수
                </th>
                <th>
                  총 지급된
                  <br />
                  포인트 금액
                </th>
                <th>진행 여부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">2</td>
                <td>
                  <Link to={"/ChallengeList/ChallengeListDetail/" + id}>대중교통 이용하기 프로젝트</Link>
                </td>
                <td>2023.05.08</td>
                <td>
                  2023.05.08 – <br />
                  2023.07.08
                </td>
                <td>123,456</td>
                <td>200,000</td>
                <td>1,000,000</td>
                <td>1,000,000</td>
                <td>진행중</td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">1</td>
                <td>
                  <Link to="/">대중교통 이용하기 프로젝트</Link>
                </td>
                <td>2023.05.08</td>
                <td>
                  2023.05.08 – <br />
                  2023.07.08
                </td>
                <td>123,456</td>
                <td>200,000</td>
                <td>1,000,000</td>
                <td>1,000,000</td>
                <td>진행완료</td>
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
