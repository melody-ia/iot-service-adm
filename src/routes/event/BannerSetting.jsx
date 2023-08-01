import { Lnb, CurrentBox, CheckBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";
import banner from "../../assets/img/banner.png";
import { useNavigate } from "react-router-dom";

export default function BannerSetting() {
  const navigate = useNavigate();

  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    upload_state: ["전체", "공개", "비공개"],
    // upload_date: ["업로드일", "공개 기한"],
    banner_location: [
      "전체",
      "메인 상단",
      "메인 중간",
      "카테고리",
      "데일리 발자국 챌린지 리스트 상단",
      "데일리 발자국 챌린지 글쓰기 상단",
      "탄소중립랭킹 중간",
      "탄소중립랭킹 하단",
      "이벤트/뉴스 상단",
      "GL 추천 제품",
    ],
  });

  const btnEvent = {
    add() {
      navigate("/BannerSetting/add");
    },
  };

  return (
    <>
      <Lnb lnbType="event" />
      {/* <CurrentBox add={true} mod={true} del={true} down={true} tit="배너 리스트" /> */}
      <CurrentBox btns={["add", "mod", "del", "down"]} tit="배너 리스트" {...btnEvent} />
      <div className="banner_setting box_ty01 table_type table_comm">
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
              {/* <col width={"80px"} /> */}
              <col width={"auto"} />
              <col width={"200px"} />
              <col width={"230px"} />
              <col width={"250px"} />
              <col width={"240px"} />
              <col width={"300px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="banner_check01" id="banner_check01" name="banner_check01" />
                </th>
                <th>NO</th>
                {/* <th>기본</th> */}
                <th>배너 이미지</th>
                <th>배너 위치</th>
                {/* <th>업로드일</th> */}
                <th>공개 기한</th>
                <th>공개 여부</th>
                <th>순위설정</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="check">
                  <CheckBox for="banner_check02" id="banner_check02" name="banner_check02" />
                </td>
                <td>4</td>
                {/* <td className="basic">
                  <RadioBtn for="wr_1" id="wr_1" name="wr_1" />
                </td> */}
                <td className="banner_img">
                  <img src={banner} alt="" />
                </td>
                <td>메인 상단</td>
                {/* <td>2023.05.08</td> */}
                <td>2023.05.08 – 2023.07.08</td>
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show01" id="show01" name="show" text="공개" />
                      <RadioBtn for="noshow01" id="noshow01" name="show" text="비공개" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="number" placeholder={"직접 입력"} />
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
                  <CheckBox for="banner_check03" id="banner_check03" name="banner_check03" />
                </td>
                <td>3</td>
                {/* <td className="basic">
                  <RadioBtn for="wr_2" id="wr_2" name="wr_2" />
                </td> */}
                <td className="banner_img">
                  <img src={banner} alt="" />
                </td>
                <td>카테고리</td>
                {/* <td>2023.05.08</td> */}
                <td>2023.05.08 – 2023.07.08</td>
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show02" id="show02" name="show02" text="공개" />
                      <RadioBtn for="noshow02" id="noshow02" name="show02" text="비공개" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="number" placeholder={"직접 입력"} />
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
                  <CheckBox for="banner_check04" id="banner_check04" name="banner_check04" />
                </td>
                <td>2</td>
                {/* <td className="basic">
                  <RadioBtn for="wr_3" id="wr_3" name="wr_3" />
                </td> */}
                <td className="banner_img">
                  <img src={banner} alt="" />
                </td>
                <td>데일리 챌린지</td>
                {/* <td>2023.05.08</td> */}
                <td>2023.05.08 – 2023.07.08</td>
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show03" id="show03" name="show03" text="공개" />
                      <RadioBtn for="noshow03" id="noshow03" name="show03" text="비공개" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="input_ty02">
                    <input type="number" placeholder={"직접 입력"} />
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
        <CurrentBox btns={["add", "mod", "del", "down"]} hideTit={true} {...btnEvent} />
        <Pagination />
      </div>
    </>
  );
}
