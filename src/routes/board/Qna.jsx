import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { ko } from "date-fns/esm/locale";
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";
import { Link, useParams } from "react-router-dom";

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

  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox mod={true} del={true} down={true} tit="1:1문의 리스트" />
      <div className="qna board_list box_ty01 table_type">
        <div className="filter_wrap d-flex">    
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">
              <input type="text" defaultValue="전체" readOnly />
              <ul className="select_box">
                <li>전체</li>
                <li>최근 문의일 순</li>
                <li>오래된 문의일 순</li>
              </ul>
            </div>
            <div className="select_input input_ty02">
              <input type="text" defaultValue="문의일" readOnly />
              <ul className="select_box">
                <li>문의일</li>
                <li>답변일</li>        
              </ul>
            </div>           
            <div className="select_input input_ty02">
              <input type="text" defaultValue="답변여부" readOnly />
              <ul className="select_box">
                <li>답변여부</li>
                <li>답변완료</li>
                <li>답변대기</li>         
              </ul>
            </div>           
            <div className="select_input input_ty02">
              <input type="text" defaultValue="구분" readOnly />
              <ul className="select_box">
                <li>구분</li>
                <li>데일리 챌린지</li>
                <li>프로모션/이벤트</li>    
                <li>탄소발자국 계산기</li>     
                <li>기기관리</li>     
                <li>랭킹</li>     
                <li>포인트</li>     
                <li>회원</li>     
                <li>기타</li>     
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