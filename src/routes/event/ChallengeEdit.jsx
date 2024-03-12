import { useEffect, useState } from "react";
import { useCheckToken, useDatePicker } from "../../hooks/bundle_hooks";
import { serverUrl } from "../../variables/bundle_variables";
// import Radio from "../../components/RadioBtn";
import arrowRight from "../../assets/img/icon/angle_right_green.svg";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import ChallengeListDetailModal from "./ChallengeListDetailModal";
import copy from "../../assets/img/icon/copy.png";
import { useNavigate, useParams } from "react-router-dom";

export default function ChallengeEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { date, start_at, end_at, setStartDate, setEndDate } = useDatePicker();
  const { mb_no, postData } = useCheckToken();
  const [challengeContents, setChallengeContents] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const copyUrl = () => {
    navigator.clipboard.writeText(
      serverUrl + "ChallengeWrite/" + challengeContents.ch_no
    );
  };

  const handlePostContents = (e) => {
    const type = e.target.dataset.type;
    let value = e.target.dataset.value || e.target.value;
    if (e.target.dataset?.format === "number")
      value = value.replace(/[^0-9]/, "");
    let copy = { ...challengeContents };
    copy[type] = value;
    setChallengeContents(copy);
  };

  const loadChallengeData = async () => {
    const res = await postData("challenge/show", { mb_no, ch_no: Number(id) });
    if (!res || res?.code !== 200) return;
    // console.log(res);
    setChallengeContents({ ...res.data.challengeInfo[0] });
    setStartDate(new Date(res.data.challengeInfo[0].start_at));
    setEndDate(new Date(res.data.challengeInfo[0].end_at));
  };

  const deleteChallenge = async () => {
    const confirm = window.confirm("삭제하시겠습니까?");
    if (!confirm) return;
    const res = await postData("challenge/del", { mb_no, ch_no: Number(id) });
    if (res.code === 200) {
      alert("삭제되었습니다.");
      navigate("/ChallengeList");
    }
  };

  const dataSubmit = async () => {
    const checkContents = [
      "ch_title",
      "ch_stamp_board",
      "ch_stamp_count",
      "ch_max_stamp",
      "ch_point_name",
      "ch_point_price",
      "stamp_to_point",
    ];
    if (checkContents.some((el) => !challengeContents[el]))
      return alert("입력항목을 모두 입력해 주세요.");
    let data = {};
    [...checkContents, "ch_status"].forEach((el) => {
      data[el] = challengeContents[el];
    });
    [
      "ch_stamp_board",
      "ch_stamp_count",
      "ch_stamp_count",
      "ch_max_stamp",
      "ch_point_price",
      "stamp_to_point",
      "ch_status",
    ].forEach((el) => {
      data[el] = Number(data[el]);
    });
    const ch_no = challengeContents.ch_no;
    const res = await postData("challenge/update", {
      mb_no,
      start_at,
      end_at,
      ch_no,
      ...data,
    });
    if (res.code === 200) {
      alert("수정되었습니다.");
      navigate("/ChallengeList");
    }
  };

  const btnEvent = {
    mod() {
      if(window.confirm("수정 하시겠습니까?"))
      {
        dataSubmit();
      }
    },
    del() {
      if(window.confirm("삭제 하시겠습니까?"))
      {
        deleteChallenge();
      }
    },
  };

  useEffect(() => {
    loadChallengeData();
  }, []);

  // console.log(challengeContents);

  if (challengeContents)
    return (
      <>
        <Lnb lnbType="event" />
        <CurrentBox
          btns={["mod", "del" /* "down" */]}
          tit="데일리 챌린지 수정"
          {...btnEvent}
        />
        <div className="ch_add">
          <div className="box_ty01">
            <div className="write_type">
              <div className="wirte_area stamp_policy">
                <div className="flex_box">
                  <div className="input_ty02 flex_left">
                    <label htmlFor="">프로모션 명</label>
                    <input
                      type="text"
                      value={challengeContents.ch_title}
                      data-type="ch_title"
                      onChange={handlePostContents}
                    />
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
                  {/* <div className="input_ty02 flex_left">
                    <label htmlFor="">
                      글쓰기 URL
                      <img
                        src={copy}
                        className="icon click"
                        onClick={copyUrl}
                      />
                    </label>
                    <input
                      type="text"
                      value={
                        serverUrl.replace("-api", "").replace("api.", "") +
                        "ChallengeWrite/" +
                        challengeContents.ch_no
                      }
                      placeholder="챌린지 등록 시 URL이 발급 됩니다."
                      disabled
                    />
                  </div> */}
                  <div className="input_ty02 flex_right">
                    <label htmlFor="">프로모션 진행 기간</label>
                    <div className="date_input input_ty02">{date.start}</div>
                    &nbsp;~&nbsp;
                    <div className="date_input input_ty02">{date.end}</div>
                  </div>
                </div>
                <div className="flex_box">
                  <div className="input_ty02 flex_left">
                    <label htmlFor="">
                      총 참여 회원 수{" "}
                     {/*  <img
                        src={arrowRight}
                        alt=""
                        className="icon click"
                        onClick={() => setModalOpen(true)}
                      /> */}
                    </label>
                    <input
                      type="text"
                      value={Number(
                        challengeContents.sum_member
                      ).toLocaleString("ko-KR")}
                      disabled
                    />
                  </div>
                  <div className="input_ty02 flex_right">
                    <label htmlFor="">총 등록된 글 개수</label>
                    <input
                      type="text"
                      value={Number(challengeContents.sum_board).toLocaleString(
                        "ko-KR"
                      )}
                      disabled
                    />
                  </div>
                </div>
                <div className="flex_box">
                  <div className="input_ty02 flex_left">
                    <label htmlFor="">총 적립된 도장 개수</label>
                    <input
                      type="text"
                      value={Number(challengeContents.sum_stamp).toLocaleString(
                        "ko-KR"
                      )}
                      disabled
                    />
                  </div>
                  <div className="input_ty02 flex_right">
                    <label htmlFor="">총 지급된 포인트 금액</label>
                    <input
                      type="text"
                      value={Number(challengeContents.sum_point).toLocaleString(
                        "ko-KR"
                      )}
                      disabled
                    />
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
                    <label htmlFor="">달성 기준 게시글 수(1일)</label>
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
                    달성시 도장 적립 개수
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
                    <label htmlFor="">최대 도장 적립 개수</label>
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
                    <span className="label">포인트 지급 </span>
                  </div>
                </div>
                <div className="flex_box">
                  <div className="input_ty02 flex_left">
                    <label htmlFor="">포인트명</label>
                    <input
                      type="text"
                      value={challengeContents.ch_point_name}
                      data-type="ch_point_name"
                      onChange={handlePostContents}
                    />
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
                    <label htmlFor="">포인트 지급 조건(도장)</label>
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
            <ChallengeListDetailModal
              modalClose={() => setModalOpen(false)}
              ch_no={challengeContents.ch_no}
            />
            <div className="dim" onClick={() => setModalOpen(false)}></div>
          </>
        )}
      </>
    );
}
