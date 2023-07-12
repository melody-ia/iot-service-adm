import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useState } from "react";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/img/banner.png";
import plus from "../../assets/img/icon/border_plus.svg";

export default function PopupAdd() {
  const { date, startDate, endDate } = useDatePicker();

  const { selectList, handleSelectBox } = useSelectBox({
    popup_loaction: false,
  });
  const [searchOption, setSearchOption] = useState({
    popup_loaction: "메인",
  });
  const searchOptionSel = e => {
    setSearchOption({ ...searchOption, [e.target.dataset.type]: e.target.dataset.value });
  };

  const history = useNavigate();

  return (
    <>
      <Lnb lnbType="event" />
      <CurrentBox mod={true} del={true} tit="팝업 등록/수정" />
      <div className="popup_add box_ty01 table_type add_type">
        <div className="size_info">
          <h5 className="size_tit">팝업 사이즈 안내</h5>
          <ul>
            <li>팝업 사이즈: 가로 1080px 세로 365px (세로 사이즈는 변동 가능)</li>
          </ul>
        </div>
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"300px"} />
              <col width={"80px"} />
              <col width={"50%"} />
            </colgroup>
            <tbody>
              <tr>
                <th>팝업 이름</th>
                <td className="input_ty02">
                  <input type="text" />
                </td>
                <th rowSpan={4}>
                  팝업 이미지
                  <div className="btn_wrap">
                    <button type="button">
                      <img src={plus} alt="" />
                    </button>
                  </div>
                </th>
                <td rowSpan={4}>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <th>팝업 위치</th>
                <td>
                  <div
                    className="select_input input_ty02"
                    onClick={() => {
                      handleSelectBox("popup_loaction");
                    }}
                  >
                    <input type="text" defaultValue="메인" readOnly />
                    {selectList.popup_loaction && (
                      <ul className="select_box">
                        {[
                          "메인",
                          "데일리 챌린지 리스트",
                          "탄소중립실천랭킹",
                          "탄소발자국계산기",
                          "이벤트/뉴스 리스트",
                          "GL 추천제품",
                          "마이페이지 개인정보수정",
                          "MY 챌린지 현황",
                          "MY 챌린지 적립 내역",
                          "MY 발자국 계산 내역",
                          "MY 랭킹 현황",
                          "MY ECO Point",
                        ].map((popupLoaction, index) => {
                          return (
                            <li key={popupLoaction} data-value={popupLoaction} datat-type="popupLoaction" onClick={searchOptionSel}>
                              {popupLoaction}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
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
