import { Lnb, CurrentBox, CheckBox, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";
import pdImg from "../../assets/img/GL-011_detail.png";
import plus from "../../assets/img/icon/border_plus.svg";

export default function Product() {
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    signUp_date: ["최근 등록일 순", "오래된 등록일 순"],
    open_state: ["전체(공개여부)", "공개", "비공개"],
    icon_sort: ["전체(아이콘)", "BEST", "NEW", "등록안함"],
  });

  return (
    <>
      <Lnb lnbType="device" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="GL 추천제품 리스트" /> */}
      <CurrentBox btns={["mod", "del", "down"]} tit="GL 추천제품 리스트" />
      <div className="product box_ty01 table_type table_comm">
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
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"80px"} />
              <col width={"120px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"200px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"130px"} />
              <col width={"150px"} />
              <col width={"230px"} />
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
                  <button type="button" className="btn_add">
                    <img src={plus} alt="" />
                  </button>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
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
                    <input type="text" placeholder={"직접 입력"} />
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
                    <input type="text" placeholder={"직접 입력"} />
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
                    <input type="text" placeholder={"직접 입력"} />
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
