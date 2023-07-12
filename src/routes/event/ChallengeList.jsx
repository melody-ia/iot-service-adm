import { Link, useParams } from "react-router-dom";
import { Lnb, CurrentBox, CheckBox, Pagination } from "../../components/bundle_components";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";

export default function ChallengeList() {
  const { id } = useParams();
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    sort_date: ["최근 등록일 순", "오래된 등록일 순"],
    search_type: ["등록일", "진행기간"],
    search_state: ["전체", "진행중", "진행중지", "진행완료"],
  });

  const dataSubmit = async () => {
    // const res = await axios.post("api", {
    //   data: { ...searchOption },
    // });
  };

  return (
    <>
      <Lnb lnbType="event" />
      <CurrentBox add={true} mod={true} del={true} down={true} tit="데일리 챌린지 리스트" />
      <div className="ch_list box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search" onClick={dataSubmit}>
            검색
          </button>
        </div>
        <div className="table_wrap">
          <table className="table">
            <colgroup>
              <col width={"auto"} />
              <col width={"auto"} />
              <col width={"300px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"180px"} />
              <col width={"150px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="check">
                  <CheckBox for="wr_all" id="wr_all" name="wr_all" />
                </th>
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
              <ChallengeItem />
              <ChallengeItem />
            </tbody>
          </table>
        </div>
        <CurrentBox add={true} mod={true} del={true} down={true} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}

function ChallengeItem() {
  const { selectedValues, selecBoxHtml } = useSelectBox({
    progress_state: ["전체", "진행중", "진행중지", "진행완료"],
  });

  return (
    <tr>
      <td className="check">
        <CheckBox for="wr_1" id="wr_1" name="wr_1" />
      </td>
      <td className="num">2</td>
      <td>
        <Link to={"/ChallengeList/ChallengeListDetail/1"}>대중교통 이용하기 프로젝트</Link>
      </td>
      <td>2023.05.08</td>
      <td>
        2023.05.08 – <br />
        2023.07.08
      </td>
      <td>123,456</td>
      <td>200,000</td>
      <td>1,000,000</td>
      <td>1,000,000</td>
      <td
      // onClick={() => {
      //   handleSelectBox("progress_state");
      // }}
      >
        {/* <div className="select_input input_ty02">
        <input type="text" defaultValue="진행중" readOnly />
        {selectList.progress_state && (
          <ul className="select_box">
            {["전체", "진행중", "진행중지", "진행완료"].map((el, idx) => {
              return (
                <li key={idx} data-type="progress_state" data-value={el} onClick={searchOptionSel}>
                  {el}
                </li>
              );
            })}
          </ul>
        )}
      </div> */}
        {selecBoxHtml}
      </td>
    </tr>
  );
}
