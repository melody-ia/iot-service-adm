import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox, CheckBox, RadioBtn } from "../../components/bundle_components";
import { ko } from "date-fns/esm/locale";
import { useSelectBox } from "../../hooks/bundle_hooks";

import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";
import pdImg from "../../assets/img/GL-011_detail.png";
import plus from "../../assets/img/icon/border_plus.svg";

export default function Product() {
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
    signUp_date : false,
    open_state : false,
    icon_sort : false,
  });
  const [searchOption, setSearchOption] = useState({
    signUp_date : '최근 등록일 순',
    open_state : '전체(공개여부)',
    icon_sort : '전체(아이콘)'
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };

  return (
    <>
      <Lnb lnbType="device" />
      <CurrentBox mod={true} del={true} down={true} tit="GL 추천제품 리스트" />
      <div className="product box_ty01 table_type">
        <div className="filter_wrap d-flex">    
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02" onClick={() => {handleSelectBox('signUp_date')}}>
              <input type="text" defaultValue="최근 등록일 순" readOnly />
              {selectList.signUp_date && (
                <ul className="select_box">
                  {['최근 등록일 순', '오래된 등록일 순'].map((signUpDate, index) => {
                    return (
                      <li key={signUpDate} data-value={signUpDate} data-type="signUp_date" onClick={searchOptionSel}>{signUpDate}</li>
                    )
                  })}
                </ul>  
              )}
            </div>
            <div className="select_input input_ty02" onClick={() => {handleSelectBox('open_state')}}>
              <input type="text" defaultValue="전체(공개여부)" readOnly />
              {selectList.open_state && (
                <ul className="select_box">
                  {['전체(공개여부)', '공개', '비공개'].map((openState, index) => {
                    return (
                      <li key={openState} data-value={openState} data-type="open_state" onClick={searchOptionSel}>{openState}</li>
                    )
                  })}
                </ul>  
              )}
            </div>           
            <div className="select_input input_ty02" onClick={() => {handleSelectBox('icon_sort')}}>
              <input type="text" defaultValue="전체(아이콘)" readOnly />
              {selectList.icon_sort && (
                <ul className="select_box">
                  {['전체(아이콘)', 'BEST', 'NEW', '등록안함'].map((iconSort, index) => {
                    return (
                      <li key={iconSort} data-value={iconSort} data-type="icon_sort" onClick={searchOptionSel}>{iconSort}</li>
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
              <col width={"80px"} />
              <col width={"120px"} />
              <col width={"150px"} />
              <col width={"130px"} />
              <col width={"130px"} />
              <col width={"200px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"170px"} />
              <col width={"200px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th>
                <th className="num">NO</th>
                <th>등록일</th>
                <th>제품이미지</th>
                <th>구분</th>
                <th>제조사</th>
                <th>제품명</th>
                <th>제품 코드</th>
                <th>링크</th>
                <th>공개여부</th>
                <th>아이콘</th>
                <th>비고</th>
              </tr>
            </thead>    
            <tbody>            
              <tr>
                <td className="check">
                  <CheckBox for="wr_1" id="wr_1" name="wr_1" />
                </td>
                <td className="num"></td>
                <td></td>
                <td className="pd_img">
                  <button type="button" className="btn_add"><img src={plus} alt="" /></button>
                </td>
                <td>
                  <div className="input_ty02"><input type="text" placeholder="직접입력" /></div>
                </td>
                <td><div className="input_ty02"><input type="text" placeholder="직접입력" /></div></td>
                <td><div className="input_ty02"><input type="text" placeholder="직접입력" /></div></td>
                <td><div className="input_ty02"><input type="text" placeholder="직접입력" /></div></td>
                <td><div className="input_ty02"><input type="text" placeholder="직접입력" /></div></td>
                <td>
                  <div className="radio_wrap">
                    <RadioBtn for="wr_open_1_1" id="wr_open_1_1" name="wr_open_1" text="공개" />
                    <RadioBtn for="wr_open_1_2" id="wr_open_1_2" name="wr_open_1" text="비공개" />
                  </div>
                </td> 
                <td>
                  <div className="radio_wrap">
                    <RadioBtn for="wr_icon_1_1" id="wr_icon_1_1" name="wr_icon_1" text="BEST" />
                    <RadioBtn for="wr_icon_1_2" id="wr_icon_1_2" name="wr_icon_1" text="NEW" />
                    <RadioBtn for="wr_icon_1_3" id="wr_icon_1_3" name="wr_icon_1" text="등록안함" />
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
                  <CheckBox for="wr_2" id="wr_2" name="wr_2" />
                </td>
                <td className="num">2</td>
                <td>2023.06.01</td>
                <td>
                  <div className="pd_img">
                    <img src={pdImg} alt="" className="img" />
                    <button type="button" className="btn_edit"></button>
                  </div>
                </td>
                <td>음식물 처리기</td>
                <td>GL</td>
                <td>지엘 미생물 음식물처리기 가정용 GL-010 시리즈 블랙/화이트 1.2kg 분쇄기 건조기</td>
                <td>GL-010LHW</td>
                <td>https://smartstore.naver.com/glecomall/products/6857771373</td>
                <td>  
                  <div className="radio_wrap">
                    <RadioBtn for="wr_open_2_1" id="wr_open_2_1" name="wr_open_2" text="공개" />
                    <RadioBtn for="wr_open_2_2" id="wr_open_2_2" name="wr_open_2" text="비공개" />
                  </div> 
                </td> 
                <td>
                  <div className="radio_wrap">
                    <RadioBtn for="wr_icon_2_1" id="wr_icon_2_1" name="wr_icon_2" text="BEST" />
                    <RadioBtn for="wr_icon_2_2" id="wr_icon_2_2" name="wr_icon_2" text="NEW" />
                    <RadioBtn for="wr_icon_2_3" id="wr_icon_2_3" name="wr_icon_2" text="등록안함" />
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
                  <CheckBox for="wr_3" id="wr_3" name="wr_3" />
                </td>
                <td className="num">1</td>
                <td>2023.06.01</td>
                <td>
                  <div className="pd_img">
                    <img src={pdImg} alt="" className="img" />
                    <button type="button" className="btn_edit"></button>
                  </div>
                </td>
                <td>음식물 처리기</td>
                <td>GL</td>
                <td>지엘 미생물 음식물처리기 가정용 GL-010 시리즈 블랙/화이트 1.2kg 분쇄기 건조기</td>
                <td>GL-010LHW</td>
                <td>https://smartstore.naver.com/glecomall/products/6857771373</td>
                <td>
                  <div className="radio_wrap">
                    <RadioBtn for="wr_open_3_1" id="wr_open_3_1" name="wr_open_3" text="공개" />
                    <RadioBtn for="wr_open_3_2" id="wr_open_3_2" name="wr_open_3" text="비공개" />
                  </div>                 
                </td> 
                <td>        
                  <div className="radio_wrap">
                    <RadioBtn for="wr_icon_3_1" id="wr_icon_3_1" name="wr_icon_3" text="BEST" />
                    <RadioBtn for="wr_icon_3_2" id="wr_icon_3_2" name="wr_icon_3" text="NEW" />
                    <RadioBtn for="wr_icon_3_3" id="wr_icon_3_3" name="wr_icon_3" text="등록안함" />
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
      </div>
    </>
  );
}