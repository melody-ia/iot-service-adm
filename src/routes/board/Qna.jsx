import { Lnb, CurrentBox, Pagination } from "../../components/bundle_components";
import { useNavigate } from "react-router-dom";
import { useSelectBox, useDatePicker, useCheckToken } from "../../hooks/bundle_hooks";
import { useEffect, useState } from "react";

export default function Qna() {
  const navigate = useNavigate();
  const { date, start_at, end_at } = useDatePicker();
  const { mb_no, resData, postData, setResData } = useCheckToken();
  const [pageData, setPageData] = useState();
  const [curPage, setCurPage] = useState(1);
  const [beforeFilter, setBeforeFilter] = useState();
  const [categoryList, setCategoryList] = useState();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    inquiry_date: ["최근 문의일 순", "오래된 문의일 순"],
    answer_state: ["전체", "답변완료", "답변대기"],
    inquiry_sort: categoryList || ["전체"],
  });

  const loadPostData = async () => {
    const order = selectedValues.inquiry_date === "최근 문의일 순" ? "desc" : "asc";
    const qa_status = { 전체: "all", 답변완료: 1, 답변대기: 0 }[selectedValues.answer_state];
    const qa_category = selectedValues.inquiry_sort === "전체" ? "all" : categoryList.indexOf(selectedValues.inquiry_sort);
    const data = { mb_no, start_at, end_at, qa_status, qa_category, order };
    const res = await postData("inquire/index", { ...data });
    if (!res || res?.code !== 200) return;
    setBeforeFilter({ ...data });
    setPageData(res.page);
    setCurPage(1);
    if (!res.data) setResData([]);
    if (!categoryList) setCategoryList(res.data.category);
  };

  const loadPageData = async page => {
    const res = await postData("community/index", { ...beforeFilter, cur_page: page });
    setPageData(res.page);
  };

  useEffect(() => {
    loadPostData();
  }, []);

  return (
    <>
      <Lnb lnbType="board" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="1:1문의 리스트" /> */}
      <CurrentBox btns={["down"]} tit="1:1문의 리스트" />
      <div className="qna box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">{selecBoxHtml}</div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button type="button" className="btn_ty01 btn_search" onClick={loadPostData}>
            검색
          </button>
        </div>
        <div className="table_wrap line">
          <table className="table" id="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"120px"} />
              <col width={"120px"} />
              <col width={"120px"} />
              <col width={"120px"} />
              <col width={"150px"} />
              <col width={"300px"} />
              <col width={"300px"} />
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
              {resData?.inquireInfo.map((el, idx) => {
                return (
                  <tr key={idx}>
                    <td className="num">{idx + 1}</td>
                    <td>{el.mb_id}</td>
                    <td>{el.inquire_date}</td>
                    <td>{el.answer_date}</td>
                    <td>{["답변대기", "답변완료"][el.qa_status]}</td>
                    <td>{el.qa_category}</td>
                    <td
                      style={{ cursor: "pointer" }}
                      className="overflow"
                      onClick={() => {
                        navigate("/Qna/QnaDetail", { state: { qa_id: el.qa_id } });
                      }}
                    >
                      {el.qa_content}
                    </td>
                    <td>{el.qa_1}</td>
                  </tr>
                );
              })}
              {/* <tr>
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
              </tr> */}
            </tbody>
          </table>
          {!resData?.inquireInfo[0] && <div className="no_data_wrap">데이터 없음</div>}
        </div>
        <CurrentBox btns={["down"]} hideTit={true} />
        {pageData && <Pagination pageData={pageData} curPage={curPage} setCurPage={setCurPage} onClick={loadPageData} />}
      </div>
    </>
  );
}
