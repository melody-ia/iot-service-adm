import { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useCheckToken, useDatePicker, useSelectBox } from "../../hooks/bundle_hooks";
import Pagination from "../../components/Pagination";

export default function UserQnaHis() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname } = useLocation();
  const { date, before3m, start_at, end_at } = useDatePicker();
  const { mb_no, postData, resData } = useCheckToken();
  const [categoryList, setCategoryList] = useState();
  const { selectedValues, setSelectedValue, selecBoxHtml } = useSelectBox({
    inquiry_date_history: ["최근 문의일 순", "오래된 문의일 순", "최근 답변일 순", "오래된 답변일 순"],
    inquiry_state: ["전체", "답변완료", "답변대기"],
    inquiry_sort: categoryList || ["전체"],
  });

  const loadPostData = async defaultDate => {
    // const order = selectedValues.inquiry_date_history === "최근 문의일 순" ? "desc" : "asc";
    const order = { "최근 문의일 순": "desc", "오래된 문의일 순": "asc", "최근 답변일 순": "desc", "오래된 답변일 순": "asc" }[
      selectedValues.inquiry_date_history
    ];
    const qa_type = {
      "최근 문의일 순": "inquire_date",
      "오래된 문의일 순": "inquire_date",
      "최근 답변일 순": "answer_date",
      "오래된 답변일 순": "answer_date",
    }[selectedValues.inquiry_date_history];
    const qa_status = { 전체: "all", 답변완료: 1, 답변대기: 0 }[selectedValues.inquiry_state];
    const qa_category = selectedValues.inquiry_sort === "전체" ? "all" : categoryList.indexOf(selectedValues.inquiry_sort);
    const res = await postData("inquire/index", {
      mb_no,
      start_at: defaultDate ? defaultDate : start_at,
      end_at,
      qa_type,
      order,
      qa_status,
      qa_category,
      target_id: id,
    });
    if (!categoryList) setCategoryList(res.data.category);
  };

  useEffect(() => {
    loadPostData(before3m);
  }, []);

  return (
    <>
      <Lnb lnbType={pathname.includes("Delete") ? "deleteUserInfo" : "userInfo"} />
      {/* <CurrentBox mod={true} del={true} down={true} tit="1:1문의 내역" /> */}
      <CurrentBox btns={["down"]} tit="1:1문의 내역" />
      <div className="user_history_qna box_ty01 table_type table_comm">
        <div className="filter_wrap d-flex">
          <div className="select_input_wrap d-flex">
            {selecBoxHtml}
            {/* <div className="select_input input_ty02">{selecBoxHtml[0]}</div>
            <div className="select_input input_ty02">{selecBoxHtml[1]} </div>
            <div className="select_input input_ty02">{selecBoxHtml[2]}</div>
            <div className="select_input input_ty02">{selecBoxHtml[3]}</div> */}
          </div>
          <div className="date_input_wrap d-flex">
            <div className="date_input input_ty02">{date.start}</div>
            <div className="date_input input_ty02">{date.end}</div>
          </div>
          <button
            type="button"
            className="btn_ty01 btn_search"
            onClick={() => {
              loadPostData();
            }}
          >
            검색
          </button>
        </div>
        <div className="table_wrap line part">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"150px"} />
              <col width={"200px"} />
              <col width={"auto"} />
              <col width={"auto"} />
            </colgroup>
            <thead>
              <tr>
                <th className="num">NO</th>
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
                    <td>{el.inquire_date}</td>
                    <td>{el.answer_date}</td>
                    <td>{["답변대기", "답변완료"][el.qa_status]}</td>
                    <td>{el.qa_category}</td>
                    <td
                      className="overflow"
                      onClick={() => {
                        navigate("/UserQnaHis/UserQnaHisDetail/" + id, { state: { qa_id: el.qa_id } });
                      }}
                    >
                      {el.qa_content}
                    </td>
                    <td>{el.qa_1}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <CurrentBox btns={["down"]} tit="1:1문의 내역" hideTit={true} />
      </div>
    </>
  );
}
