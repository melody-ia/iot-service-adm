import { useEffect } from "react";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useCheckToken } from "../../hooks/bundle_hooks";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import RadioBtn from "../../components/RadioBtn";
import arrowRightGreen from "../../assets/img/icon/angle_right_green.svg";
import ChallengeListDetailModal from "./ChallengeListDetailModal";

export default function ChallengeListDetail() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const { mb_no, postData, resData } = useCheckToken();
  const { id } = useParams();
  const [chInfo, setChInfo] = useState();

  const btnEvent = {
    mod() {
      navigate("/ChallengeEdit/" + id);
    },
  };

  const loadChallengeData = async () => {
    const res = await postData("challenge/show", { mb_no, ch_no: Number(id) });
    if (res.code === 200) {
      setChInfo(res.data.challengeInfo[0]);
    }
  };

  useEffect(() => {
    loadChallengeData();
  }, []);

  return (
    <>
      <Lnb lnbType="event" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="데일리 챌린지 상세보기"/> */}
      <CurrentBox
        btns={["mod" /* "down" */]}
        tit="데일리 챌린지 상세보기"
        {...btnEvent}
      />
      <div className="ch_list_detail detail_form box_ty01 table_type">
        <div className="table_wrap line">
          {chInfo && (
            <table className="table" id="table">
              <colgroup>
                <col width={"50px"} />
                <col width={"180px"} />
                <col width={"180px"} />
                <col width={"180px"} />
                <col width={"180px"} />
                <col width={"50px"} />
                <col width={"180px"} />
                <col width={"180px"} />
                <col width={"180px"} />
                <col width={"180px"} />
              </colgroup>
              <tbody>
                <tr>
                  <th colSpan={3}>챌린지명</th>
                  <td colSpan={2}>{chInfo.ch_title}</td>
                  <th colSpan={3}>진행 여부</th>
                  <td colSpan={2}>
                    <div className="radio_box d-flex flex-ac flex-jc">
                      <RadioBtn
                        for="ing"
                        id="ing"
                        name="active"
                        text="진행중"
                      />
                      <RadioBtn for="end" id="end" name="active" text="종료" />
                    </div>
                  </td>
                </tr>
                {/* <tr>
                <th colSpan={3}>프로모션 서브명</th>
                <td colSpan={2}>오늘부터 매일매일</td>
                <th colSpan={3}>프로모션 설명</th>
                <td colSpan={2}>
                  꾸준한 기록으로 환경보호 하는 습관을 만들어보세요.
                </td>
              </tr> */}
                <tr>
                  <th colSpan={3}>등록일</th>
                  <td colSpan={2}>{chInfo.created_at}</td>
                  <th colSpan={3}>프로모션 진행 기간</th>
                  <td colSpan={2}>
                    {chInfo.start_at} – {chInfo.end_at}
                  </td>
                </tr>
                <tr>
                  <th
                    colSpan={3}
                    /* className="member"
                  onClick={() => setModalOpen(true)} */
                  >
                    총 참여 회원 수{" "}
                    {/* <img
                    src={arrowRightGreen}
                    alt="오른쪽 화살표 아이콘"
                    className="arrow_right"
                  /> */}
                  </th>
                  <td colSpan={2}>{chInfo.sum_member}</td>
                  <th colSpan={3}>총 등록된 글 개수</th>
                  <td colSpan={2}>{chInfo.sum_board}</td>
                </tr>
                <tr>
                  <th colSpan={3}>총 적립된 도장 개수</th>
                  <td colSpan={2}>{chInfo.sum_stamp}</td>
                  <th colSpan={3}>총 지급된 포인트 금액</th>
                  <td colSpan={2}>
                    {Number(chInfo.sum_point).toLocaleString("Ko-KR")}
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>달성 기준 게시글 수(1일)</th>
                  <td>{chInfo.ch_stamp_board}</td>
                  <th>달성시 도장 적립 개수</th>
                  <td>{chInfo.ch_stamp_count}</td>

                  <th colSpan={2}>포인트명</th>
                  <td>{chInfo.ch_point_name}</td>
                  <th>지급 포인트 금액</th>
                  <td>
                    {Number(chInfo.ch_point_price).toLocaleString("Ko-KR")}
                  </td>
                </tr>
                <tr>
                  <th colSpan={2}>최대 도장 적립 개수</th>
                  <td>{chInfo.ch_max_stamp}</td>
                  <td colSpan={2}></td>
                  <th colSpan={2}>
                    포인트 <br />
                    지급 조건
                  </th>
                  <td>도장 {chInfo.stamp_to_point}개 적립 시</td>
                  <td colSpan={2}></td>
                </tr>
              </tbody>
            </table>
          )}

          {/* <table className="table banner_table">
            <colgroup>
              <col width={"80px"} />
              <col width={"700px"} />
              <col width={"700px"} />
            </colgroup>
            <tbody>
              <tr>
                <th></th>
                <th>배너 위치</th>
                <th>배너 이미지</th>
              </tr>
              <tr>
                <td>1</td>
                <td>메인 상단</td>
                <td>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>데일리 발자국 챌린지 리스트 상단</td>
                <td>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>데일리 발자국 챌린지 글쓰기 상단</td>
                <td>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>탄소중립랭킹 하단</td>
                <td>
                  <img src={banner} alt="" />
                </td>
              </tr>
              <tr>
                <th colSpan={2}>비고</th>
                <td>-</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
      {modalOpen ? (
        <>
          <ChallengeListDetailModal modalClose={() => setModalOpen(false)} />
          <div className="dim" onClick={() => setModalOpen(false)}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
