import { useState, useEffect } from "react";
import { useCheckToken } from "../../hooks/bundle_hooks";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useLocation, useNavigate } from "react-router-dom";

export default function FaqDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mb_no, postData } = useCheckToken();
  const [postContents, setPostContents] = useState();

  const loadPostData = async () => {
    if (!state) return;
    const res = await postData("community/show", { mb_no, wr_id: state.wr_id, category: "faq" });
    if (!res || res?.code !== 200) return;
    setPostContents(res.data.boardInfo[0]);
  };

  const btnEvent = {
    mod() {
      navigate("/Faq/edit", { state: { wr_id: postContents.wr_id, wr_subject: postContents.wr_subject } });
    },
  };

  useEffect(() => {
    loadPostData();
  }, []);

  if (postContents)
    return (
      <>
        <Lnb lnbType="board" />
        <CurrentBox btns={["mod", "del", /* "down" */]} tit="FAQ 상세보기" {...btnEvent} />
        <div className="faq_detail box_ty01 view_form">
          <div className="write_type">
            <div className="wirte_area">
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">구분</label>
                  <input type="text" defaultValue={"탄소발자국"} readOnly />
                </div>
                <div className="flex_right">
                  <label htmlFor="">공개여부</label>
                  <div className="radio_group d-flex w100">
                    {[
                      ["공개", "show", 0],
                      ["비공개", "hide", 1],
                    ].map((el, idx) => {
                      return (
                        <RadioBtn
                          key={idx}
                          for={el[1]}
                          id={el[1]}
                          name="isShow"
                          text={el[0]}
                          checked={postContents.wr_status === el[2]}
                          dataType="wr_status"
                          dataValue={el[2]}
                          disabled={true}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">제목</label>
                  <input type="text" value={postContents.wr_seo_title} readOnly />
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">등록일</label>
                  <input type="text" placeholder="직접입력" value={postContents.wr_datetime.replace(/-/g, " .") + "."} readOnly />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left w100">
                  <label htmlFor="">내용</label>
                  <textarea className="textarea" value={postContents.wr_content} readOnly></textarea>
                </div>
              </div>
              <div className="flex_box">
                <div className="flex_left w100">
                  <label htmlFor="">첨부파일</label>
                  <div className="file_box input_ty02">
                    {postContents.community_origin ? (
                      postContents.community_origin.map((el, idx) => {
                        return (
                          <div key={idx} className="row">
                            <input type="text" defaultValue={el} readOnly />
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
                  <label htmlFor="">비고</label>
                  <textarea className="textarea" value={postContents.wr_1} readOnly></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
