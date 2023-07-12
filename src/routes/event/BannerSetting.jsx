import { useState } from "react";
import { Lnb, CurrentBox, CheckBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";
import banner from "../../assets/img/banner.png";

export default function BannerSetting() {
  const { date, startDate, endDate } = useDatePicker();

  const { selectList, handleSelectBox } = useSelectBox({
    upload_state: false,
    upload_date: false,
    banner_location: false,
  });
  const [searchOption, setSearchOption] = useState({
    upload_state: "전체",
    upload_date: "업로드일",
    banner_location: "전체",
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };

  return (
    <>
      <Lnb lnbType="event" />
      <CurrentBox add={true} mod={true} del={true} down={true} tit="배너 리스트" />
      <div className="banner_setting box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("upload_state");
              }}
            >
              <input type="text" defaultValue="전체" readOnly />
              {selectList.upload_state && (
                <ul className="select_box">
                  {["전체", "최근 업로드 순", "오래된 업로드 순", "공개", "비공개"].map((uploadState, index) => {
                    return (
                      <li key={uploadState} data-value={uploadState} data-type="upload_state" onClick={searchOptionSel}>
                        {uploadState}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              className="select_input input_ty02"
              onClick={() => {
                handleSelectBox("upload_data");
              }}
            >
              <input type="text" defaultValue="업로드일" readOnly />
              {selectList.upload_data && (
                <ul className="select_box">
                  {["업로드일", "공개 기한"].map((uploadDate, index) => {
                    return (
                      <li key={uploadDate} data-value={uploadDate} data-type="upload_date" onClick={searchOptionSel}>
                        {uploadDate}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div
              className="select_input input_ty02 wide"
              onClick={() => {
                handleSelectBox("banner_location");
              }}
            >
              <input type="text" defaultValue="전체" readOnly />
              {selectList.banner_location && (
                <ul className="select_box">
                  {[
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
                  ].map((bannerLocation, index) => {
                    return (
                      <li key={bannerLocation} data-value={bannerLocation} data-type="banner_location" onClick={searchOptionSel}>
                        {bannerLocation}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
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
              <col width={"80px"} />
              <col width={"350px"} />
              <col width={"200px"} />
              <col width={"150px"} />
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
                  <CheckBox for="banner_check02" id="banner_check02" name="banner_check02" />
                </td>
                <td>4</td>
                <td className="basic">
                  <RadioBtn for="wr_1" id="wr_1" name="wr_1" />
                </td>
                <td className="banner_img">
                  <img src={banner} alt="" />
                </td>
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
                  <CheckBox for="banner_check03" id="banner_check03" name="banner_check03" />
                </td>
                <td>3</td>
                <td className="basic">
                  <RadioBtn for="wr_2" id="wr_2" name="wr_2" />
                </td>
                <td className="banner_img">
                  <img src={banner} alt="" />
                </td>
                <td>카테고리</td>
                <td>2023.05.08</td>
                <td>2023.05.08 – 2023.07.08</td>
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show02" id="show02" name="show02" text="공개" />
                      <RadioBtn for="noshow02" id="noshow02" name="show02" text="비공개" />
                    </div>
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="check">
                  <CheckBox for="banner_check04" id="banner_check04" name="banner_check04" />
                </td>
                <td>2</td>
                <td className="basic">
                  <RadioBtn for="wr_3" id="wr_3" name="wr_3" />
                </td>
                <td className="banner_img">
                  <img src={banner} alt="" />
                </td>
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
                  <CheckBox for="banner_check05" id="banner_check05" name="banner_check05" />
                </td>
                <td>1</td>
                <td className="basic">
                  <RadioBtn for="wr_4" id="wr_4" name="wr_4" />
                </td>
                <td className="banner_img">
                  <img src={banner} alt="" />
                </td>
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
        <CurrentBox add={true} mod={true} del={true} down={true} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}
