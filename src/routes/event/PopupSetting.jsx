import { Lnb, CurrentBox, CheckBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";
import banner from "../../assets/img/banner.png";
import { useNavigate } from "react-router-dom";

export default function PopupSetting() {
    const navigate = useNavigate();

  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    signUp_date: ["등록일", "공개 기한"],
    open_state: ["전체", "공개", "비공개"],
  });

  const btnEvent = {
    add(){
        navigate('/PopupSetting/add');
    }
}

  return (
    <>
      <Lnb lnbType="event" />
      {/* <CurrentBox add={true} mod={true} del={true} down={true} tit="팝업 리스트" /> */}
      <CurrentBox btns={["add", "mod", "del", "down"]} tit="팝업 리스트" {...btnEvent}/>
      <div className="popup_setting box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search">
            검색
          </button>
        </div>
        <div className="table_wrap line part">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"80px"} />
              <col width={"400px"} />
              <col width={"180px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"240px"} />
              <col width={"300px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="popup_check01" id="popup_check01" name="popup_check" />
                </th>
                <th className="num">NO</th>
                <th>팝업 이미지</th>
                <th>팝업 이름</th>
                <th>팝업 위치</th>
                <th>등록일</th>
                <th>공개 기한</th>
                <th>공개여부</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="popup_check02" id="popup_check02" name="popup_check" />
                </td>
                <td className="num">2</td>
                <td className="banner_img">
                  <img src={banner} alt="" />
                </td>
                <td>프로모션</td>
                <td>메인</td>
                <td>2023.05.01</td>
                <td>
                  2023.05.08 – <br />
                  2023.07.08
                </td>
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show01" id="show01" name="openState01" text="공개" />
                      <RadioBtn for="noshow01" id="noshow01" name="openState01" text="비공개" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder={"직접 입력"} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="check" id="check" />
                </td>
                <td className="num">1</td>
                <td className="banner_img">
                  <img src={banner} alt="" />
                </td>
                <td>어플 다운로드</td>
                <td>탄소중립실천랭킹</td>
                <td>2023.05.01</td>
                <td>
                  2023.05.08 – <br />
                  2023.07.08
                </td>
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show02" id="show02" name="openState02" text="공개" />
                      <RadioBtn for="noshow02" id="noshow02" name="openState02" text="비공개" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder={"직접 입력"} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <CurrentBox add={true} mod={true} del={true} down={true} hideTit={true} /> */}
        <CurrentBox btns={["add", "mod", "del", "down"]} hideTit={true} {...btnEvent}/>
        <Pagination />
      </div>
    </>
  );
}
