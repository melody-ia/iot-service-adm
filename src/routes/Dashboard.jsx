import ChartArea from "../components/ChartArea";
import ChartAreaStacked from "../components/ChartAreaStacked";
import ChartCircle from "../components/ChartCircle";
import ChartColumn from "../components/ChartColumn";
import { useEffect, useState } from "react";
import { useCheckToken } from "../hooks/bundle_hooks";

export default function Dashboard() {
  const { mb_no, postData, resData } = useCheckToken();
  const [pageData, setPageData] = useState();

  const loadDashboard = async () => {
    const res = await postData("dashboard/index", {
      mb_no,
    });

    if (!res || res?.code !== 200) return;
    setPageData(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <div className="dashboard">
      <div className="row row1">
        <div className="box_ty01">
          <span className="circle_icon people"></span>
          <div className="text_wrap">
            <h4 className="tit sm">총 회원수</h4>
            <strong className="text">
              {Number(pageData?.memberCount.member_count).toLocaleString(
                "ko-KR"
              )}
              명
            </strong>
          </div>
        </div>
        <div className="box_ty01">
          <span className="circle_icon dollar"></span>
          <div className="text_wrap">
            <h4 className="tit">총 지급된 포인트</h4>
            <strong className="text">
              {Number(pageData?.pointCount.sum_point).toLocaleString("ko-KR")}P
            </strong>
          </div>
        </div>
        <div className="box_ty01">
          <span className="circle_icon graph"></span>
          <div className="text_wrap">
            <h4 className="tit">탄소 발자국 계산기 사용 수</h4>
            <strong className="text">
              {Number(pageData?.carbonCount.carbon_count).toLocaleString(
                "ko-KR"
              )}
              회
            </strong>
          </div>
        </div>
        <div className="box_ty01">
          <span className="circle_icon document"></span>
          <div className="text_wrap">
            <h4 className="tit">챌린지 참여 게시글</h4>
            <strong className="text">
              {Number(pageData?.challengeCount.challenge_count).toLocaleString(
                "ko-KR"
              )}
              개
            </strong>
          </div>
        </div>
        <div className="box_ty01">
          <span className="circle_icon card"></span>
          <div className="text_wrap">
            <h4 className="tit">IoT 기기 등록 수 </h4>
            <strong className="text">0건</strong>
          </div>
        </div>
      </div>
      <div className="row row2">
        <div className="box_ty01 graph_ty01">
          <div className="box_head d-flex flex-js">
            <h4 className="tit">신규 가입자 수</h4>
          </div>
          <div className="box_body d-flex flex-js">
            <div className="box_body_left">
              <p className="text"></p>
              <span className="date c_gray">Last 7 days</span>
              <strong>
                {Number(
                  pageData?.memberCount.recent_member_count
                ).toLocaleString("ko-KR")}
                명
              </strong>
              {/* <div className="figure_wrap">
                <span className="up">6%</span>
                <span className="c_gray">vs last 7 days</span>
              </div> */}
            </div>
            <div className="box_body_right">
              <ChartArea />
            </div>
          </div>
        </div>
        <div className="box_ty01 graph_ty02">
          <div className="box_head d-flex flex-js">
            <h4 className="tit">디바이스 별 접속률</h4>
          </div>
          <div className="box_body">
            <ChartCircle />
          </div>
        </div>
        <div className="box_ty01 graph_ty03">
          <div className="box_head d-flex flex-js">
            <h4 className="tit">챌린지(프로모션) 참여율</h4>
          </div>
          <div className="box_body">
            {pageData?.weekChallenge && (
              <ChartAreaStacked chartData={pageData?.weekChallenge} />
            )}
          </div>
        </div>
      </div>
      <div className="row row3">
        <div className="table_wrap box_ty01">
          <div className="table_type">
            <div className="box_head d-flex flex-js">
              <h4 className="tit">신규 가입 회원</h4>
              {/* <button className="dot_menu"></button> */}
            </div>
            <table className="table" id="table">
              <thead>
                <tr>
                  <th className="id">아이디</th>
                  <th className="name">이름</th>
                  <th className="gender">성별</th>
                  <th>생년월일</th>
                  <th>이메일</th>
                  <th>휴대폰 번호</th>
                  <th>가입일</th>
                </tr>
              </thead>
              <tbody>
                {pageData?.recentMember.map((el, idx) => {
                  return (
                    <>
                      <tr key={idx}>
                        <td className="id">{el.mb_id}</td>
                        <td className="name">{el.mb_name}</td>
                        <td className="gender">{el.mb_sex}</td>
                        <td>{el.mb_birth}</td>
                        <td>{el.mb_email}</td>
                        <td>{el.mb_hp}</td>
                        <td>{el.mb_datetime}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bar_graph box_ty01">
          <h4 className="tit">주간 방문자 수</h4>
          <ChartColumn />
        </div>
      </div>
    </div>
  );
}
