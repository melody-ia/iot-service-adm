import Radio from "../../components/RadioBtn";
import banner from "../../assets/img/banner.png";
import arrowRight from "../../assets/img/icon/angle_right_green.svg";
import plus from "../../assets/img/icon/border_plus.svg";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useSelectBox } from "../../hooks/bundle_hooks";

export default function ChallengeAdd() {
  const { selectedValues, selecBoxHtml } = useSelectBox({
    stamp_point: ["글 1개 / 도장 1개"],
    point_pay: ["데일리 챌린지 참여 / 1,000"],
    banner_location: [
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
    challist_banner_location: [
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
    chalwrite_banner_location: [
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

  return (
    <>
      <Lnb lnbType="event" />
      <CurrentBox mod={true} del={true} down={true} tit="데일리 챌린지 등록/수정" />
      <div className="ch_add">
        <div className="box_ty01">
          <div className="write_type">
            <div className="wirte_area stamp_policy">
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">프로모션 명</label>
                  <input type="text" />
                </div>
                <div className="radio_group flex_right">
                  <span className="label">진행 여부</span>
                  <div className="radio_wrap">
                    <Radio for="ing" id="ing" name="promotion" text="진행중" />
                    <Radio for="end" id="end" name="promotion" text="진행중지" />
                    <Radio for="fin" id="fin" name="promotion" text="진행완료" />
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">프로모션 서브명</label>
                  <input type="text" />
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">프로모션 설명</label>
                  <input type="text" />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">등록일</label>
                  <input type="text" defaultValue={"2023.05.30"} />
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">프로모션 진행 기간</label>
                  <input type="text" defaultValue={"2023.05.30 - 2023.07.08"} />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">
                    총 참여 회원 수 <img src={arrowRight} alt="" className="icon" />
                  </label>
                  <input type="text" defaultValue={"0"} disabled />
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">총 등록된 글 개수</label>
                  <input type="text" defaultValue={"0"} disabled />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">총 적립된 도장 개수</label>
                  <input type="text" defaultValue={"0"} disabled />
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">총 지급된 포인트 금액</label>
                  <input type="text" defaultValue={"0"} disabled />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box_ty01 ">
          <div className="write_type">
            <div className="plus_area stamp_policy">
              <div className="flex_box plus_tit">
                <div className="flex_left">
                  {/* btn_plus 클릭시 numBox 추가  */}
                  <span className="label">
                    도장 적립 정책{" "}
                    <button type="button" className="btn_plus">
                      <img src={plus} alt="" className="icon" />
                    </button>
                  </span>
                  {selecBoxHtml[0]}
                </div>
              </div>
              <div className="numBox">
                <div className="flex_box">
                  <div className="input_ty02 flex_left mr12">
                    <label htmlFor="">글 등록 개수</label>
                    <input type="text" defaultValue={"데일리 챌린지 참여"} />
                  </div>
                  <div className="input_ty02 flex_right">
                    <label htmlFor="" className="stamp_signup">
                      도장 등록 개수
                    </label>
                    <input type="text" defaultValue={"1"} />
                  </div>
                </div>
                <div className="flex_box flex_box_mb">
                  <div className="input_ty02 flex_left">
                    <label htmlFor="">적립 기한</label>
                    <input type="text" defaultValue={"2023.05.30 - 2023.07.08"} />
                  </div>
                  <div className="flex_right"></div>
                </div>
                <button className="btn_del"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="box_ty01 ">
          <div className="write_type">
            <div className="plus_area point_pay">
              <div className="flex_box plus_tit">
                <div className="flex_left">
                  {/* btn_plus 클릭시 numBox 추가  */}
                  <span className="label">
                    포인트 지급{" "}
                    <button type="button" className="btn_plus">
                      <img src={plus} alt="" className="icon" />
                    </button>
                  </span>
                  {selecBoxHtml[1]}
                </div>
              </div>
              <div className="numBox">
                <div className="flex_box">
                  <div className="input_ty02 flex_left">
                    <label htmlFor="">포인트명</label>
                    <input type="text" defaultValue={"데일리 챌린지 참여"} />
                  </div>
                  <div className="input_ty02 flex_right">
                    <label htmlFor="" className="point_signup">
                      지급 포인트 금액
                    </label>
                    <input type="text" defaultValue={"1,000"} />
                  </div>
                </div>
                <div className="flex_box flex_box_mb">
                  <div className="input_ty02 flex_left">
                    <label htmlFor="">포인트 지급 시점</label>
                    <input type="text" defaultValue={"도장 3개 적립 시"} />
                  </div>
                  <div className="input_ty02 flex_right">
                    <label htmlFor="" className="point_signup">
                      지급 기한
                    </label>
                    <input type="text" defaultValue={"2023.05.10 - 2050.12.31"} />
                  </div>
                </div>
                <button className="btn_del"></button>
              </div>
              <div className="numBox">
                <div className="flex_box">
                  <div className="input_ty02 flex_left">
                    <label htmlFor="">포인트명</label>
                    <input type="text" defaultValue={"데일리 챌린지 참여"} />
                  </div>
                  <div className="input_ty02 flex_right">
                    <label htmlFor="" className="point_signup">
                      지급 포인트 금액
                    </label>
                    <input type="text" defaultValue={"1,000"} />
                  </div>
                </div>
                <div className="flex_box flex_box_mb">
                  <div className="input_ty02 flex_left">
                    <label htmlFor="">포인트 지급 시점</label>
                    <input type="text" defaultValue={"도장 3개 적립 시"} />
                  </div>
                  <div className="input_ty02 flex_right">
                    <label htmlFor="" className="point_signup">
                      지급 기한
                    </label>
                    <input type="text" defaultValue={"2023.05.10 - 2050.12.31"} />
                  </div>
                </div>
                <button className="btn_del"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="table_wrap line">
          <table className="table banner_table">
            <colgroup>
              <col width={"80px"} />
              <col width={"250px"} />
              <col width={"700px"} />
            </colgroup>
            <tbody>
              <tr>
                <th></th>
                <th>배너 위치</th>
                <th>배너 이미지</th>
              </tr>
              <tr>
                <td>
                  1<button className="btn_del"></button>
                </td>
                <td>{selecBoxHtml[2]}</td>
                <td>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  2 <button className="btn_del"></button>
                </td>
                <td>{selecBoxHtml[3]}</td>
                <td>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  3 <button className="btn_del"></button>
                </td>
                <td>{selecBoxHtml[4]}</td>
                <td>
                  <button type="button" className="btn_plus">
                    <img src={plus} alt="" className="icon" />
                  </button>
                </td>
              </tr>
              <tr>
                <th colSpan={2}>비고</th>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
