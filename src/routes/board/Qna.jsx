import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { ko } from "date-fns/esm/locale";
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";
import { Link, useParams } from "react-router-dom";
import { useSelectBox } from "../../hooks/bundle_hooks";

export default function Qna() {
  const { id } = useParams();
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
    inquiry_order : false,
    inquiry_date : false,
    answer_state : false,
    inquiry_sort : false,
  });
  const [searchOption, setSearchOption] = useState({
    inquiry_order : '전체',
    inquiry_date : '문의일', 
    answer_state : '답변여부',
    inquiry_sort : '구분'
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };

  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox mod={true} del={true} down={true} tit="1:1문의 리스트" />
      <div className="qna box_ty01 table_type">
        <div className="filter_wrap d-flex">    
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02" onClick={() => {handleSelectBox('inquiry_order')}}>
              <input type="text" defaultValue="전체" readOnly />
              {selectList.inquiry_order && (
                <ul className="select_box">
                  {['전체', '최근 문의일 순', '오래된 문의일 순'].map((inquiryOrder, index) => {
                    return (
                      <li key={inquiryOrder} data-value={inquiryOrder} data-type="inquiry_order" onClick={searchOptionSel}>{inquiryOrder}</li>
                    )
                  })}
                </ul>  
              )}
            </div>
            <div className="select_input input_ty02" onClick={() => {handleSelectBox('inquiry_date')}}>
              <input type="text" defaultValue="문의일" readOnly />
              {selectList.inquiry_date && (
                <ul className="select_box">
                  {['전체', '최근 문의일 순', '오래된 문의일 순'].map((inquiryDate, index) => {
                    return (
                      <li key={inquiryDate} data-value={inquiryDate} data-type="inquiry_date" onClick={searchOptionSel}>{inquiryDate}</li>
                    )
                  })}
                </ul>  
              )}
            </div>           
            <div className="select_input input_ty02" onClick={() => {handleSelectBox('answer_state')}}>
              <input type="text" defaultValue="답변여부" readOnly />
              {selectList.answer_state && (
                <ul className="select_box">
                  {['답변여부', '답변완료', '답변대기'].map((answerState, index) => {
                    return (
                      <li key={answerState} data-value={answerState} data-type="answer_state" onClick={searchOptionSel}>{answerState}</li>
                    )
                  })}
                </ul>  
              )}
            </div>           
            <div className="select_input input_ty02" onClick={() => {handleSelectBox('inquiry_sort')}}>
              <input type="text" defaultValue="구분" readOnly />
              {selectList.inquiry_sort && (
                <ul className="select_box">
                  {['구분', '데일리 챌린지', '프로모션/이벤트', '탄소발자국 계산기', '기기관리', '랭킹', '포인트', '회원', '기타'].map((inquirySort, index) => {
                    return (
                      <li key={inquirySort} data-value={inquirySort} data-type="inquiry_sort" onClick={searchOptionSel}>{inquirySort}</li>
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
            <colgroup>
              <col width={"auto"} />
              <col width={"120px"} />
              <col width={"120px"} />
              <col width={"120px"} />
              <col width={"150px"} />
              <col width={"160px"} />
              <col width={"400px"} />
              <col width={"200px"} />
            </colgroup>
            <thead>
              <tr>               
                <th className="num">NO</th>
                <th>아이디</th>
                <th>문의일</th>
                <th>답변일</th>
                <th>답변여부</th>
                <th>구분</th>
                <th>내용</th>
                <th>비고</th>
              </tr>
            </thead>    
            <tbody>            
              <tr>
                <td className="num">2</td>
                <td>wwwizz</td>             
                <td>2023.05.01</td>
                <td>2023.05.01</td>
                <td>답변완료</td>
                <td>프로모션/이벤트</td>
                <td className="overflow">
                  <Link to={"/Qna/QnaDetail/" + id} >
                    데일리 발자국 챌린지에 글 쓰고 등록까지 했는데 포인트 적립이 안
                    됐어요. 저번에도 그렇고 이번에 또 이렇게 문의하게 됐는데요 왜..
                  </Link>
                </td>
                <td></td>
              </tr>                                                                                         
              <tr>
                <td className="num">1</td>
                <td>kkdididi</td>             
                <td>2023.05.01</td>
                <td>-</td>
                <td>답변대기</td>
                <td>데일리챌린지</td>
                <td className="overflow">
                  <Link to={"/Qna/QnaDetail/" + id} >
                  안녕하세요 문의 드립니다. 
                  </Link>
                </td>
                <td>내부 담당자 확인 후 처리</td>
              </tr>                                                                                         
            </tbody>
          </table>
        </div>
        <CurrentBox mod={true} del={true} down={true} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}