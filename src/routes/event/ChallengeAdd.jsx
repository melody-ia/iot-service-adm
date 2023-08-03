import { useState } from "react";
import { useCheckToken, useDatePicker } from "../../hooks/bundle_hooks";
import { serverUrl } from "../../variables/bundle_variables";
// import Radio from "../../components/RadioBtn";
import arrowRight from "../../assets/img/icon/angle_right_green.svg";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import ChallengeListDetailModal from "./ChallengeListDetailModal";
import copy from "../../assets/img/icon/copy.png";
import { useNavigate } from "react-router-dom";

export default function ChallengeAdd() {
  const navigate = useNavigate();
  const { date, start_at, end_at } = useDatePicker();
  const { mb_no, postData } = useCheckToken();
  const [challengeContents, setchallengeContents] = useState({
    ch_title: "",
    ch_status: 0,
    ch_stamp_board: "",
    ch_stamp_count: "",
    ch_max_stamp: "",
    ch_point_name: "",
    ch_point_price: "",
    stamp_to_point: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const copyUrl = () => {
    navigator.clipboard.writeText(serverUrl + "ChallengeWrite");
  };

  const handlePostContents = e => {
    const type = e.target.dataset.type;
    let value = e.target.dataset.value || e.target.value;
    if (e.target.dataset?.format === "number") value = value.replace(/[^0-9]/, "");
    let copy = { ...challengeContents };
    copy[type] = value;
    setchallengeContents(copy);
  };

  const dataSubmit = async () => {
    if (
      Object.keys(challengeContents)
        .filter(el => el !== "ch_status")
        .some(el => !challengeContents[el])
    )
      return alert("입력항목을 모두 입력해 주세요.");
    let data = { ...challengeContents };
    ["ch_stamp_board", "ch_stamp_count", "ch_max_stamp", "ch_point_price", "stamp_to_point"].forEach(el => {
      data[el] = Number(data[el]);
    });
    const res = await postData("challenge/create", { mb_no, start_at, end_at, ...data });
    if (res.code === 200) {
      alert("등록되었습니다.");
      navigate("/ChallengeList");
    }
  };

  const btnEvent = {
    add() {
      dataSubmit();
    },
  };

  return (
    <>
      <Lnb lnbType="event" />
      <CurrentBox btns={["add", "down"]} tit="데일리 챌린지 등록" {...btnEvent} />
      <div className="ch_add">
        <div className="box_ty01">
          <div className="write_type">
            <div className="wirte_area stamp_policy">
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">프로모션 명</label>
                  <input type="text" value={challengeContents.ch_title} data-type="ch_title" onChange={handlePostContents} />
                </div>
                <div className="radio_group flex_right">
                  <span className="label">진행 여부</span>
                  <div className="radio_group d-flex w100">
                    {[
                      ["진행중", "ing", 0],
                      ["종료", "end", 1],
                    ].map((el, idx) => {
                      return (
                        <RadioBtn
                          key={idx}
                          for={el[1]}
                          id={el[1]}
                          name={"isShow"}
                          checked={challengeContents.ch_status == el[2]}
                          text={el[0]}
                          dataType={"ch_status"}
                          dataValue={el[2]}
                          onClick={handlePostContents}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">프로모션 진행 기간</label>
                  <div className="date_input input_ty02">{date.start}</div>&nbsp;~&nbsp;<div className="date_input input_ty02">{date.end}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box_ty01 ">
          <div className="write_type">
            <div className="wirte_area stamp_policy">
              <div className="flex_box plus_tit">
                <div className="flex_left">
                  <span className="label">도장 적립 정책 </span>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left mr12">
                  <label htmlFor="">글 등록 개수(1일)</label>
                  <input
                    type="text"
                    value={challengeContents.ch_stamp_board}
                    data-type="ch_stamp_board"
                    data-format="number"
                    onChange={handlePostContents}
                  />
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="" className="stamp_signup">
                    도장 등록 개수
                  </label>
                  <input
                    type="text"
                    value={challengeContents.ch_stamp_count}
                    data-type="ch_stamp_count"
                    data-format="number"
                    onChange={handlePostContents}
                  />
                </div>
              </div>
              <div className="flex_box flex_box_mb">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">최대 적립 개수</label>
                  <input
                    type="text"
                    value={challengeContents.ch_max_stamp}
                    data-type="ch_max_stamp"
                    data-format="number"
                    onChange={handlePostContents}
                  />
                </div>
                <div className="flex_right"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="box_ty01 ">
          <div className="write_type">
            <div className="wirte_area point_pay">
              <div className="flex_box plus_tit">
                <div className="flex_left">
                  <span className="label">포인트 지급 정책</span>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">포인트명</label>
                  <input type="text" value={challengeContents.ch_point_name} data-type="ch_point_name" onChange={handlePostContents} />
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="" className="point_signup">
                    지급 포인트 금액
                  </label>
                  <input
                    type="text"
                    value={challengeContents.ch_point_price}
                    data-type="ch_point_price"
                    data-format="number"
                    onChange={handlePostContents}
                  />
                </div>
              </div>
              <div className="flex_box flex_box_mb">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">포인트 지급 조건</label>
                  <input
                    type="text"
                    placeholder="포인트가 지급되는 도장 횟수를 숫자로 입력해주세요."
                    value={challengeContents.stamp_to_point}
                    data-type="stamp_to_point"
                    data-format="number"
                    onChange={handlePostContents}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <>
          <ChallengeListDetailModal modalClose={() => setModalOpen(false)} />
          <div className="dim" onClick={() => setModalOpen(false)}></div>
        </>
      )}
    </>
  );
}
