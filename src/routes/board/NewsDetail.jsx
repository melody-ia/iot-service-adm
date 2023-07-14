import { useEffect } from "react";
import { useSelectBox, useCheckToken, useUploadFile } from "../../hooks/bundle_hooks";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import banner from "../../assets/img/banner.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function NewsDetail() {
  const history = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();
  const { mb_no, postData } = useCheckToken();
  const [postContents, setPostContents] = useState();
  const [topImage, setTopImage] = useState([]);
  const [communityfile, setCommunityfile] = useState([]);

  const loadPostData = async () => {
    const res = await postData("community/show", { mb_no, wr_id: state.wr_id, wr_subject: state.wr_subject });
    setPostContents(res.data.boardInfo[0]);
  };

  const handlePostContents = e => {
    const type = e.target.dataset.type;
    const value = e.target.dataset.value || e.target.value;
    let copy = { ...postContents };
    copy[type] = value;
    setPostContents(copy);
  };

  useEffect(() => {
    loadPostData();
  }, []);

  if (postContents)
    return (
      <>
        <Lnb lnbType="board" />
        <CurrentBox mod={true} del={true} down={true} tit="이벤트/뉴스 상세보기" />
        <div className="news_detail box_ty01 view_form">
          <div className="write_type">
            <div className="wirte_area">
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">구분</label>
                  <input type="text" value={{ event: "이벤트", news: "뉴스" }[postContents.wr_subject]} readOnly />
                </div>
                {postContents.wr_subject === "event" ? (
                  <div className="flex_right">
                    <label htmlFor="">진행여부</label>
                    <div className="radio_group d-flex w100">
                      {[
                        ["진행중", "show", 0],
                        ["종료", "hide", 3],
                      ].map((el, idx) => {
                        return (
                          <RadioBtn
                            key={idx}
                            for={el[1]}
                            id={el[1]}
                            name="isShow"
                            text={el[0]}
                            checked={postContents.status === el[2]}
                            dataType="wr_status"
                            dataValue={el[2]}
                            onClick={handlePostContents}
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : (
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
                            checked={postContents.status === el[2]}
                            dataType="wr_status"
                            dataValue={el[2]}
                            onClick={handlePostContents}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
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
              <div className="flex_box img_area">
                <label htmlFor="">상단 이미지</label>
                <img src={banner} alt="" />
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left w100">
                  <label htmlFor="">첨부파일</label>
                  <div className="file_box input_ty02">
                    <div className="row">
                      <input type="text" defaultValue={"신규 가입 안내1.jpg"} readOnly />
                    </div>
                    <div className="row">
                      <input type="text" defaultValue={"신규 가입 안내1.jpg"} readOnly />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left w100">
                  <label htmlFor="">비고</label>
                  <textarea className="textarea" readOnly></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
