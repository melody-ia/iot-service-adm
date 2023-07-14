import { useLocation, useNavigate } from "react-router-dom";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useCheckToken, useUploadFile } from "../../hooks/bundle_hooks";
import { useState } from "react";
import { useEffect } from "react";

export default function NewsAdd() {
  const history = useNavigate();
  const { state } = useLocation();
  const { mb_no, postData } = useCheckToken();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    subject: ["이벤트", "뉴스"],
  });
  const [postContents, setPostContents] = useState({
    wr_status: 0,
    wr_seo_title: "",
    wr_content: "",
    wr_memo: "",
  });
  const [topImage, setTopImage] = useState([]);
  const [communityfile, setCommunityfile] = useState([]);

  const handlePostContents = e => {
    const type = e.target.dataset.type;
    const value = e.target.dataset.value || e.target.value;
    let copy = { ...postContents };
    copy[type] = value;
    setPostContents(copy);
  };

  const loadPostData = async () => {
    const res = await postData("community/show", { wr_id: state.wr_id });
    setPostContents(res.data.boardInfo[0]);
  };

  console.log(postContents);

  const dataSubmit = async () => {
    if (!postContents.wr_seo_title || !postContents.wr_content) return alert("제목과 내용을 입력하세요.");
    const formData = new FormData();
    formData.append("mb_no", mb_no);
    formData.append("wr_subject", { 이벤트: "event", 뉴스: "news" }[selectedValues.subject]);
    formData.append("wr_seo_title", postContents.wr_seo_title);
    formData.append("wr_content", postContents.wr_content);
    formData.append("wr_status", postContents.wr_status);
    formData.append("wr_memo", postContents.wr_memo);
    if (topImage[0]) {
      topImage.forEach(el => {
        formData.append("topimage", el.file);
      });
    }
    if (communityfile[0]) {
      communityfile.forEach(el => {
        formData.append("communityfile", el.file);
      });
    }
    const res = await postData("community/create", formData);
    if (res.code === 200) {
      alert("등록되었습니다.");
      history("/News");
    }
  };

  useEffect(() => {
    if (state?.wr_id) loadPostData();
  }, []);

  return (
    <>
      <Lnb lnbType="board" />
      <CurrentBox add={true} del={true} down={true} tit="이벤트/뉴스 등록/수정" />
      <div className="news_add box_ty01 view_form add">
        <div className="write_type">
          <div className="wirte_area">
            <div className="flex_box">
              <div className="input_ty02 flex_left">
                <label htmlFor="">구분</label>
                {selecBoxHtml}
              </div>
              {selectedValues.post_sort === "이벤트" ? (
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
                <input type="text" placeholder="직접입력" value={postContents.wr_seo_title} data-type="wr_seo_title" onChange={handlePostContents} />
              </div>
              <div className="input_ty02 flex_right">
                <label htmlFor="">등록일</label>
                <input type="text" placeholder="직접입력" defaultValue={new Date().toLocaleDateString()} readOnly />
              </div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">내용</label>
                <textarea
                  className="textarea"
                  placeholder="직접입력"
                  value={postContents.content}
                  data-type="wr_content"
                  onChange={handlePostContents}
                ></textarea>
              </div>
            </div>
            <div className="flex_box find_file">
              <div className="flex_left w100 flex_box_mr">
                <label htmlFor="">상단 이미지</label>
                <FileItemTop setTopImage={setTopImage} />
              </div>
            </div>
            <div className="flex_box find_file">
              <div className="flex_left w100 flex_box_mr">
                <label htmlFor="">첨부파일</label>
                <FileItemEtc setCommunityfile={setCommunityfile} />
              </div>
            </div>
            <div className="flex_box">
              <div className="input_ty02 flex_left w100">
                <label htmlFor="">비고</label>
                <textarea
                  className="textarea"
                  placeholder="직접입력"
                  value={postContents.memo}
                  data-type="wr_memo"
                  onChange={handlePostContents}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_btn_wrap">
          <button type="button" className="btn_ty01 cancel" onClick={() => history(-1)}>
            취소
          </button>
          <button type="button" className="btn_ty01" onClick={dataSubmit}>
            등록
          </button>
        </div>
      </div>
    </>
  );
}

function FileItemTop({ setTopImage }) {
  const allowType = ["jpg", "jpeg", "png", "gif"];
  const { fileData, uploadFile, deleteFile } = useUploadFile(allowType, 8, 1);

  useEffect(() => {
    setTopImage(fileData);
  }, [fileData]);

  return (
    <div className="find_file_wrap">
      <label htmlFor="file" className="file_label">
        <span></span>파일첨부
        {fileData[0] &&
          fileData.map((el, idx) => {
            return (
              <>
                <p key={idx} style={{ paddingLeft: "20px" }}>
                  {el.file.name}
                </p>
                <button data-url={el.url} onClick={deleteFile}>
                  &times;
                </button>
              </>
            );
          })}
      </label>
      <input type="file" className="file" onChange={uploadFile} />
    </div>
  );
}

function FileItemEtc({ setCommunityfile }) {
  const { fileData, uploadFile, deleteFile } = useUploadFile(null, 8, 3);

  useEffect(() => {
    setCommunityfile(fileData);
  }, [fileData]);

  return (
    <div className="find_file_wrap">
      <label htmlFor="file" className="file_label">
        <span></span>파일첨부
        {fileData[0] &&
          fileData.map((el, idx) => {
            return (
              <>
                <p key={idx}>{el.file.name}</p>
                <button data-url={el.url} onClick={deleteFile}>
                  &times;
                </button>
              </>
            );
          })}
      </label>
      <input type="file" className="file" onChange={uploadFile} multiple />
    </div>
  );
}
