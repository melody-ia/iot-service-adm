import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useCheckToken } from "../../hooks/bundle_hooks";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useEffect } from "react";

export default function UserQnaHisDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pathname, state } = useLocation();
  const { mb_no, postData, resData } = useCheckToken();

  const loadPostData = async () => {
    postData("inquire/show", { mb_no, qa_id: state.qa_id });
  };

  const btnEvent = {
    mod() {
      navigate("/Qna/QnaDetail", { state: { qa_id: state.qa_id } });
    },
  };

  useEffect(() => {
    loadPostData();
  }, []);

  return (
    <>
      <Lnb lnbType={pathname.includes("Delete") ? "deleteUserInfo" : "userInfo"} />
      {/* <CurrentBox mod={true} del={true} down={true} tit="1:1문의 내역 상세보기" /> */}
      <CurrentBox btns={["mod",/*  "down" */]} tit="1:1문의 내역 상세보기" {...btnEvent} />
      <div className="user_history_qna_detail detail_form box_ty01 table_type table_comm">
        <div className="table_wrap line">
          <table className="table" id="table">
            <colgroup>
              <col width={"110px"} />
              <col width={"200px"} />
              <col width={"110px"} />
              <col width={"200px"} />
              <col width={"110px"} />
              <col width={"200px"} />
              <col width={"110px"} />
              <col width={"200px"} />
            </colgroup>
            <tbody>
              <tr>
                <th>NO</th>
                <td>100</td>
                <th>문의일</th>
                <td>{resData?.inquireInfo[0].inquire_date}</td>
                <th>답변일</th>
                <td>{resData?.inquireInfo[0].answer_date}</td>
                <th>답변여부</th>
                <td>
                  <div className="radio_box d-flex flex-ac flex-jc">
                    {[
                      ["답변완료", "yes", 1],
                      ["답변대기", "no", 0],
                    ].map((el, idx) => {
                      return (
                        <RadioBtn
                          key={idx}
                          for={el[1]}
                          id={el[1]}
                          name="state"
                          text={el[0]}
                          checked={resData?.inquireInfo[0].qa_status == el[2]}
                          disabled
                        />
                      );
                    })}
                    {/* <RadioBtn for="yes" id="yes" name="state" text="답변완료" />
                    <RadioBtn for="no" id="no" name="state" text="답변대기" /> */}
                  </div>
                </td>
              </tr>
              <tr>
                <th>구분</th>
                <td colSpan={3}>{resData?.inquireInfo[0].qa_category}</td>
                <th>첨부파일</th>
                <td colSpan={3} className="align_left">
                  {resData?.inquireInfo[0].file_original &&
                    resData.inquireInfo[0].file_original.map((el, idx) => {
                      return <p key={idx}>{el}</p>;
                    })}
                  {/* <p>aaaa_123.jpg</p>
                  <p>bbbbb.jpg</p>
                  <p>bbbbb.jpg</p>
                  <p>bbbbb.jpg</p>
                  <p>bbbbb.jpg</p> */}
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan={7} className="align_left">
                  {resData?.inquireInfo[0].qa_content}
                </td>
              </tr>
              <tr>
                <th>답변내용</th>
                <td colSpan={7}>
                  <div className="input_ty02 align_left">
                    <textarea placeholder="직접입력" defaultValue={resData?.inquireInfo[0].qa_answer_content} readOnly />
                  </div>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={7}>
                  <div className="input_ty02 align_left">
                    <input type="text" placeholder="직접입력" className="align_left" defaultValue={resData?.inquireInfo[0].qa_1} readOnly />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <CurrentBox btns={["mod", /* "down" */]} tit="1:1문의 내역 상세보기" hideTit={true} />
      </div>
    </>
  );
}
