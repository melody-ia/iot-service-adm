import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { Lnb, CurrentBox, CheckBox, RadioBtn } from "../../components/bundle_components";
import { ko } from "date-fns/esm/locale";
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

  return (
    <>
      <Lnb lnbType="device" />
      <CurrentBox mod={true} del={true} down={true} tit="GL 추천제품 리스트" />
      <div className="product box_ty01 table_type">
        <div className="filter_wrap d-flex">    
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">
              <input type="text" defaultValue="최근 등록일 순" readOnly />
              <ul className="select_box">
                <li>최근 등록일 순</li>
                <li>오래된 등록일 순</li>
              </ul>
            </div>
            <div className="select_input input_ty02">
              <input type="text" defaultValue="전체(공개여부)" readOnly />
              <ul className="select_box">
                <li>전체(공개여부)</li>
                <li>공개</li>
                <li>비공개</li>         
              </ul>
            </div>           
            <div className="select_input input_ty02">
              <input type="text" defaultValue="전체(아이콘)" readOnly />
              <ul className="select_box">
                <li>전체(아이콘)</li>
                <li>BEST</li>
                <li>NEW</li>         
                <li>등록안함</li>         
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
                  <CheckBox for="check" id="check" />
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
                  <CheckBox for="check" id="check" />
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
                    <RadioBtn for="show01" id="show01" name="show01" text="공개" />
                    <RadioBtn for="noshow01" id="noshow01" name="show01" text="비공개" />
                  </div>
                </td> 
                <td>
                  <div className="radio_wrap">
                    <RadioBtn for="best01" id="best01" name="icon01" text="BEST" />
                    <RadioBtn for="new01" id="new01" name="icon01" text="NEW" />
                    <RadioBtn for="no01" id="no01" name="icon01" text="등록안함" />
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
                    <RadioBtn for="show01" id="show01" name="show01" text="공개" />
                    <RadioBtn for="noshow01" id="noshow01" name="show01" text="비공개" />
                  </div> 
                </td> 
                <td>
                  <div className="radio_wrap">
                    <RadioBtn for="best01" id="best01" name="icon01" text="BEST" />
                    <RadioBtn for="new01" id="new01" name="icon01" text="NEW" />
                    <RadioBtn for="no01" id="no01" name="icon01" text="등록안함" />
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
                    <RadioBtn for="show01" id="show01" name="show01" text="공개" />
                    <RadioBtn for="noshow01" id="noshow01" name="show01" text="비공개" />
                  </div>                 
                </td> 
                <td>        
                  <div className="radio_wrap">
                    <RadioBtn for="best01" id="best01" name="icon01" text="BEST" />
                    <RadioBtn for="new01" id="new01" name="icon01" text="NEW" />
                    <RadioBtn for="no01" id="no01" name="icon01" text="등록안함" />
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