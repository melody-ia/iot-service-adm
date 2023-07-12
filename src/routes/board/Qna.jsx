import { Lnb, CurrentBox, Pagination } from "../../components/bundle_components";
import { Link, useParams } from "react-router-dom";
import { useSelectBox, useDatePicker } from "../../hooks/bundle_hooks";

export default function Qna() {
  const { id } = useParams();
  const { date, startDate, endDate } = useDatePicker();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    inquiry_order: ["전체", "최근 문의일 순", "오래된 문의일 순"],
    inquiry_date: ["전체", "최근 문의일 순", "오래된 문의일 순"],
    answer_state: ["답변여부", "답변완료", "답변대기"],
    inquiry_sort: ["구분", "데일리 챌린지", "프로모션/이벤트", "탄소발자국 계산기", "기기관리", "랭킹", "포인트", "회원", "기타"],
  });

  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox mod={true} del={true} down={true} tit="1:1문의 리스트" />
      <div className="qna box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
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
              <col width={"auto"} />
              <col width={"120px"} />
              <col width={"120px"} />
              <col width={"120px"} />
              <col width={"150px"} />
              <col width={"160px"} />
              <col width={"400px"} />
              <col width={"200px"} />
            </colgroup>
            <thead>
              <tr>
                <th className="num">NO</th>
                <th>아이디</th>
                <th>문의일</th>
                <th>답변일</th>
                <th>답변여부</th>
                <th>구분</th>
                <th>내용</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="num">2</td>
                <td>wwwizz</td>
                <td>2023.05.01</td>
                <td>2023.05.01</td>
                <td>답변완료</td>
                <td>프로모션/이벤트</td>
                <td className="overflow">
                  <Link to={"/Qna/QnaDetail/" + id}>
                    데일리 발자국 챌린지에 글 쓰고 등록까지 했는데 포인트 적립이 안 됐어요. 저번에도 그렇고 이번에 또 이렇게 문의하게 됐는데요 왜..
                  </Link>
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="num">1</td>
                <td>kkdididi</td>
                <td>2023.05.01</td>
                <td>-</td>
                <td>답변대기</td>
                <td>데일리챌린지</td>
                <td className="overflow">
                  <Link to={"/Qna/QnaDetail/" + id}>안녕하세요 문의 드립니다.</Link>
                </td>
                <td>내부 담당자 확인 후 처리</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CurrentBox mod={true} del={true} down={true} hideTit={true} />
        <Pagination />
      </div>
    </>
  );
}
