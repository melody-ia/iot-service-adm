import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useCheckToken, useSelectBox } from "../../hooks/bundle_hooks";
import { serverUrl } from "../../variables/bundle_variables";

export default function QnaDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mb_no, postData, resData } = useCheckToken();
  const [answerData, setAnswerData] = useState({
    qa_answer_content: "",
    qa_memo: "",
  });

  const loadPostData = async () => {
    const res = await postData("inquire/show", { mb_no, qa_id: state.qa_id });
    setAnswerData({ qa_answer_content: res.data.inquireInfo[0].qa_answer_content, qa_memo: res.data.inquireInfo[0].qa_1 });
  };

  const dataSubmit = async () => {
    const qa_status = answerData.qa_answer_content ? 1 : 0;
    const res = await postData("inquire/answer", { mb_no, qa_id: state.qa_id, ...answerData, qa_status });
    if (res.code !== 200) return alert("잘못된 요청입니다.");
    alert("수정되었습니다.");
    navigate(-1);
  };

  useEffect(() => {
    loadPostData();
  }, []);

  const btnEvent = {
    mod() {
      dataSubmit();
    },
  };

  return (
    <>
      <Lnb lnbType="board" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="1:1문의 상세보기" /> */}
      <CurrentBox btns={["mod", "down"]} tit="1:1문의 상세보기" {...btnEvent} />
      <div className="qna_detail box_ty01 view_form">
        <div className="write_type">
          <div className="wirte_area">
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">아이디</label>
                <input type="text" defaultValue={resData?.inquireInfo[0].mb_id} readOnly />
              </div>
              <div className="flex_right">
                <label htmlFor="">답변여부</label>
                <div className="radio_group d-flex w100">
                  {[
                    ["답변완료", "yes", 1],
                    ["답변대기", "no", 0],
                  ].map((el, idx) => {
                    return (
                      <RadioBtn key={idx} for={el[1]} id={el[1]} name="state" text={el[0]} checked={resData?.inquireInfo[0].qa_status == el[2]} />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">문의일</label>
                <input type="text" defaultValue={resData?.inquireInfo[0].inquire_date} readOnly />
              </div>
              <div className="input_ty02 flex_right">
                <label htmlFor="">답변일</label>
                <input type="text" defaultValue={resData?.inquireInfo[0].answer_date} readOnly />
              </div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">구분</label>
                {/* {selecBoxHtml} */}
                <input type="text" defaultValue={resData?.inquireInfo[0].qa_category} readOnly />
              </div>
              <div className="flex_right"></div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">내용</label>
                <textarea className="textarea" defaultValue={resData?.inquireInfo[0].qa_content} readOnly></textarea>
              </div>
            </div>
            <div className="flex_box">
              <div className="flex_left w100">
                <label htmlFor="">첨부파일</label>
                <div className="file_box input_ty02">
                  {resData?.inquireInfo[0].file_original ? (
                    resData.inquireInfo[0].file_original.map((el, idx) => {
                      return (
                        <div key={idx} className="row">
                          <a href={serverUrl + "download" + resData.inquireInfo[0].file[idx] + "?originalname=" + el} download={true}>
                            {el}
                          </a>
                        </div>
                      );
                    })
                  ) : (
                    <div className="row">
                      <input type="text" defaultValue={"첨부파일 없음"} readOnly />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">답변내용</label>
                <textarea
                  className="textarea"
                  placeholder="직접입력"
                  value={answerData.qa_answer_content}
                  onChange={e => {
                    setAnswerData({ ...answerData, qa_answer_content: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">비고</label>
                <textarea
                  className="textarea"
                  value={answerData.qa_memo}
                  placeholder="직접입력"
                  onChange={e => {
                    setAnswerData({ ...answerData, qa_memo: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
