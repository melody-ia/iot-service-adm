import { Lnb, CurrentBox, CheckBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import banner from "../../assets/img/banner.png";
import arrowRight from "../../assets/img/icon/angle_thin_right_g.svg";

export default function BannerSetting() {  
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
      <CurrentBox add={true} mod={true} del={true} down={true} tit="배너 리스트"/>
      <div className="banner_setting box_ty01 table_type">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div className="select_input input_ty02">
              <input type="text" defaultValue="전체" readOnly />
              <ul className="select_box">
                <li>전체</li>
                <li>최근 업로드 순</li>
                <li>오래된 업로드 순</li>
                <li>공개</li>
                <li>비공개</li>
              </ul>
            </div>
            <div className="select_input input_ty02">
              <input type="text" defaultValue="업로드일" readOnly />
              <ul className="select_box">
                <li>업로드일</li>
                <li>공개기한</li>
              </ul>
            </div>
            <div className="select_input input_ty02">
              <input type="text" defaultValue="전체" readOnly />
              <ul className="select_box">
                <li>전체</li>
                <li>메인 상단</li>
                <li>메인 중간</li>
                <li>카테고리</li>
                <li>데일리 발자국 챌린지 리스트 상단</li>
                <li>데일리 발자국 챌린지 글쓰기 상단</li>
                <li>탄소중립랭킹 중간</li>
                <li>탄소중립랭킹 하단</li>
                <li>이벤트/뉴스 상단</li>
                <li>GL 추천 제품</li>
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
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"80px"}/>
              <col width={"350px"}/>
              <col width={"200px"}/>
              <col width={"200px"}/>
              <col width={"250px"}/>
              <col width={"250px"}/>
              <col width={"300px"}/>
            </colgroup>
            <thead>
              <tr>
                <th className="check"> 
                  <CheckBox for="check" id="check" />
                </th>
                <th>NO</th>
                <th>기본</th>
                <th>배너 이미지</th>
                <th>배너 위치</th>
                <th>업로드일</th>
                <th>공개 기한</th>
                <th>공개 여부</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>4</td>
                <td className="basic">
                  <RadioBtn for="basic01" id="basic01" name="basic"/>
                </td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단</td>          
                <td>2023.05.08</td>         
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show01" id="show01" name="show" text="공개" />
                      <RadioBtn for="noshow01" id="noshow01" name="show" text="비공개" />
                    </div>
                  </div>
                </td> 
                <td></td>
              </tr>              
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>3</td>
                <td className="basic">
                  <RadioBtn for="basic02" id="basic02" name="basic"/>
                </td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>카테고리</td>          
                <td>2023.05.08</td>         
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show02" id="show02" name="show02" text="공개"/>
                      <RadioBtn for="noshow02" id="noshow02" name="show02" text="비공개" />
                    </div>
                  </div>
                </td> 
                <td></td>
              </tr>              
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>2</td>
                <td className="basic">
                  <RadioBtn for="basic03" id="basic03" name="basic"/>
                </td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>데일리 챌린지</td>          
                <td>2023.05.08</td>         
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show03" id="show03" name="show03" text="공개" />
                      <RadioBtn for="noshow03" id="noshow03" name="show03" text="비공개" />
                    </div>
                  </div>
                </td> 
                <td></td>
              </tr>              
              <tr>
                <td className="check"> 
                  <CheckBox for="check" id="check" />
                </td>
                <td>1</td>
                <td className="basic">
                  <RadioBtn for="basic04" id="basic04" name="basic"/>
                </td>             
                <td className="banner_img"><img src={banner} alt="" /></td>   
                <td>메인 상단(기본)</td>          
                <td>2023.05.08</td>         
                <td>2023.05.08 – 2023.07.08</td>         
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show04" id="show04" name="show04" text="공개" />
                      <RadioBtn for="noshow04" id="noshow04" name="show04" text="비공개" />
                    </div>
                  </div>
                </td> 
                <td>기본 이미지 삭제 불가</td>
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
  )
}