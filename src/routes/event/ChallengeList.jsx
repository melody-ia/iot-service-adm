import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Lnb, CurrentBox, CheckBox, Pagination, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useDatePicker, useCheckToken } from "../../hooks/bundle_hooks";
import { serverUrl } from "../../variables/bundle_variables";
import copy from "../../assets/img/icon/copy.png";

export default function ChallengeList() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { mb_no, postData, resData } = useCheckToken();
  const { date, start_at, end_at } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    sort_date: ["최근 등록일 순", "오래된 등록일 순"],
    search_state: ["전체", "진행중", "종료"],
  });

  const loadChallengeData = async () => {
    const order = selectedValues.signUp_date === "최근 등록일 순" ? "desc" : "asc";
    const ch_status = { 전체: "all", 진행중: 0, 종료: 1 }[selectedValues.search_state];
    postData("challenge/index", { mb_no, ch_status, order, start_at, end_at });
  };

  const btnEvent = {
    add() {
      navigate("/ChallengeList/add");
    },
  };

  useEffect(() => {
    loadChallengeData();
  }, []);

  return (
    <>
      <Lnb lnbType="event" />
      {/* <CurrentBox add={true} mod={true} del={true} down={true} tit="데일리 챌린지 리스트" /> */}
      <CurrentBox btns={["add", "down"]} tit="데일리 챌린지 리스트" {...btnEvent} />
      <div className="ch_list box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search" onClick={loadChallengeData}>
            검색
          </button>
        </div>
        <div className="table_wrap">
          <table className="table">
            <colgroup>
              {/* <col width={"80px"} /> */}
              <col width={"80px"} />
              <col width={"200px"} />
              <col width={"100px"} />
              <col width={"180px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"130px"} />
              <col width={"180px"} />
            </colgroup>
            <thead>
              <tr>
                {/* <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th> */}
                <th className="num">NO</th>
                <th>프로모션 명</th>
                <th className="date">등록일</th>
                <th>
                  프로모션
                  <br />
                  진행 기간
                </th>
                <th>
                  총<br />
                  참여 회원 수
                </th>
                <th>
                  총<br />
                  등록된 글 개수
                </th>
                <th>
                  총 적립된
                  <br />
                  도장 개수
                </th>
                <th>
                  총 지급된
                  <br />
                  포인트 금액
                </th>
                <th>진행 여부</th>
              </tr>
            </thead>
            <tbody>
              {resData?.challengeInfo.map((el, idx) => {
                return <ChallengeItem key={idx} data={el} />;
              })}
            </tbody>
          </table>
        </div>
        {/* <CurrentBox add={true} mod={true} del={true} down={true} hideTit={true} /> */}
        <CurrentBox btns={["add", "down"]} hideTit={true} {...btnEvent} />
        <Pagination />
      </div>
    </>
  );
}

function ChallengeItem({ data }) {
  const copyUrl = () => {
    navigator.clipboard.writeText(serverUrl + "ChallengeWrite/" + data.ch_no);
  };

  return (
    <tr>
      <td className="num">2</td>
      <td className="copy_wrap">
        <Link to={"/ChallengeList/ChallengeListDetail/" + data.ch_no}>{data.ch_title}</Link>
        <img src={copy} onClick={copyUrl} title={serverUrl + "ChallengeWrite/" + data.ch_no} />
      </td>
      <td>{data.created_at.replace(/-/g, ".")}</td>
      <td>
        {data.start_at.replace(/-/g, ".")} – <br />
        {data.end_at.replace(/-/g, ".")}
      </td>
      <td>{Number(data.sum_member).toLocaleString("ko-KR")}</td>
      <td>{Number(data.sum_board).toLocaleString("ko-KR")}</td>
      <td>{Number(data.sum_stamp).toLocaleString("ko-KR")}</td>
      <td>{Number(data.sum_point).toLocaleString("ko-KR")}</td>
      <td>
        <div className="radio_group d-flex w100">
          {[
            ["진행중", "show", 0],
            ["종료", "hide", 1],
          ].map((el, idx) => {
            return (
              <RadioBtn
                key={idx}
                for={el[1] + data.ch_no}
                id={el[1] + data.ch_no}
                name={"isShow" + data.ch_no}
                checked={data.ch_status == el[2]}
                text={el[0]}
                dataType={"ch_status"}
                dataValue={el[2]}
                // onClick={handlePostContents}
              />
            );
          })}
        </div>
      </td>
    </tr>
  );
}
