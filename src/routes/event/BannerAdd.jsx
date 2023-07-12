import { useNavigate } from "react-router-dom";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";
import banner from "../../assets/img/banner.png";
import plus from "../../assets/img/icon/border_plus.svg";
import zoom from "../../assets/img/icon/zoomIn.svg";

export default function BannerAdd() {
  const history = useNavigate();
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    banner_location: [
      "메인 상단",
      "메인 중간",
      "카테고리",
      "데일리 발자국 챌린지 리스트 상단",
      "데일리 발자국 챌린지 글쓰기 상단",
      "데일리 발자국 챌린지 리스트 상단",
      "탄소중립랭킹 중간",
      "탄소중립랭킹 하단",
      "이벤트/뉴스 상단",
      "GL 추천 제품",
    ],
  });

  return (
    <>
      <Lnb lnbType="event" />
      <CurrentBox mod={true} del={true} tit="배너 등록/수정" />
      <div className="banner_add box_ty01 table_type add_type">
        <div className="size_info">
          <h5 className="size_tit">배너 위치별 사이즈 안내</h5>
          <ul>
            <li>1. 메인 상단: 가로 1080px 세로 480px</li>
            <li>2. 메인 중간: 가로 1080px 세로 365px</li>
            <li>3. 카테고리: 가로 1080px 세로 210px</li>
            <li>4. 데일리 발자국 챌린지 리스트 상단: 가로 1080px 세로 610px</li>
            <li>5. 데일리 발자국 챌린지 글쓰기 상단: 가로 1080px 세로 480px</li>
            <li>6. 탄소중립랭킹 중간: 가로 1080px 세로 610px</li>
            <li>7. 탄소중립랭킹 하단: 가로 1080px 세로 210px</li>
            <li>8. 이벤트/뉴스 상단: 가로 1080px 세로 1020px</li>
            <li>9. GL 추천제품: 가로 1080px 세로 1020px</li>
          </ul>
        </div>
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"50%"} />
              <col width={"150px"} />
              <col width={"300px"} />
            </colgroup>
            <tbody>
              <tr>
                <th rowSpan={3}>
                  배너이미지
                  <div className="btn_wrap">
                    <button type="button">
                      <img src={plus} alt="" />
                    </button>
                    {/* 새창으로 미리보기 */}
                    <button type="button" className="btn_view">
                      <img src={zoom} alt="" />
                    </button>
                  </div>
                </th>
                <td rowSpan={3}>
                  <img src={banner} alt="" />
                </td>
                <th>배너 위치</th>
                <td>
                  {selecBoxHtml}
                  {/* <div
                    className="select_input input_ty02"
                    onClick={() => {
                      handleSelectBox("banner_location");
                    }}
                  >
                    <input type="text" defaultValue="메인 상단" readOnly />
                    {selectList.banner_location && (
                      <ul className="select_box">
                        {[
                          "메인 상단",
                          "메인 중간",
                          "카테고리",
                          "데일리 발자국 챌린지 리스트 상단",
                          "데일리 발자국 챌린지 글쓰기 상단",
                          "데일리 발자국 챌린지 리스트 상단",
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
                  </div> */}
                </td>
              </tr>
              <tr>
                <th>공개 기한</th>
                <td>
                  <div className="date_input_wrap d-flex flex-jc">
                    <div className="date_input">{date.start}</div>
                    <span>~</span>
                    <div className="date_input">{date.end}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>공개 여부</th>
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      <RadioBtn for="show" id="show" name="show" text="공개" />
                      <RadioBtn for="noshow" id="noshow" name="show" text="비공개" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>링크연결</th>
                <td colSpan={3}>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={3}>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bottom_btn_wrap">
          <button type="button" className="btn_ty01 cancel" onClick={() => history(-1)}>
            취소
          </button>
          <button type="button" className="btn_ty01">
            등록
          </button>
        </div>
      </div>
    </>
  );
}
