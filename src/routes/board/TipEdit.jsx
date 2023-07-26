import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useCheckToken, useUploadFile } from "../../hooks/bundle_hooks";

export default function TipEdit() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { mb_no, postData } = useCheckToken();
  const [postContents, setPostContents] = useState();
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
    const res = await postData("community/show", { mb_no, wr_id: state.wr_id, category: state.wr_subject });
    setPostContents(res.data.boardInfo[0]);
  };

  const dataSubmit = async () => {
    if (!postContents.wr_seo_title || !postContents.wr_content) return alert("제목과 내용을 입력하세요.");
    const formData = new FormData();
    formData.append("mb_no", mb_no);
    formData.append("wr_id", state.wr_id);
    formData.append("wr_subject", "tip");
    formData.append("wr_seo_title", postContents.wr_seo_title);
    formData.append("wr_content", postContents.wr_content);
    formData.append("wr_status", postContents.wr_status);
    if (postContents.wr_1) formData.append("wr_memo", postContents.wr_1);
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
    const res = await postData("community/update", formData);
    if (res.code === 200) {
      alert("수정되었습니다.");
      navigate("/Tip");
    }
  };

  const btnEvent = {
    add() {
      dataSubmit();
    },
  };

  useEffect(() => {
    if (state.wr_id) loadPostData();
  }, []);

  if (postContents)
    return (
      <>
        <Lnb lnbType="board" />
        <CurrentBox btns={["add", "del", "down"]} tit="탄소중립 TIP 자료실 등록/수정" {...btnEvent} />
        <div className="tip_add box_ty01 view_form add">
          <div className="write_type">
            <div className="wirte_area">
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">등록일</label>
                  <input type="text" placeholder="직접입력" defaultValue={postContents.wr_datetime.replace(/-/g, ".")} readOnly />
                </div>
                <div className="flex_right">
                  <label htmlFor="">공개여부</label>
                  <div className="radio_group d-flex w100">
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
                            onClick={handlePostContents}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left w100">
                  <label htmlFor="">제목</label>
                  <input
                    type="text"
                    placeholder="직접입력"
                    value={postContents.wr_seo_title}
                    data-type="wr_seo_title"
                    onChange={handlePostContents}
                  />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left w100">
                  <label htmlFor="">내용</label>
                  <textarea
                    className="textarea"
                    placeholder="직접입력"
                    value={postContents.wr_content}
                    data-type="wr_content"
                    onChange={handlePostContents}
                  ></textarea>
                </div>
              </div>
              <div className="flex_box find_file">
                <div className="flex_left w100 flex_box_mr">
                  <label htmlFor="">상단 이미지</label>
                  <FileItemTop setTopImage={setTopImage} postContents={postContents} />
                </div>
              </div>
              <div className="flex_box find_file">
                <div className="flex_left w100 flex_box_mr">
                  <label htmlFor="">첨부파일</label>
                  <FileItemEtc setCommunityfile={setCommunityfile} postContents={postContents} />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left w100">
                  <label htmlFor="">비고</label>
                  <textarea
                    className="textarea"
                    placeholder="직접입력"
                    value={postContents.wr_1}
                    data-type="wr_1"
                    onChange={handlePostContents}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_btn_wrap">
            <button type="button" className="btn_ty01 cancel" onClick={() => navigate(-1)}>
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

function FileItemTop({ setTopImage, postContents }) {
  const allowType = ["jpg", "jpeg", "png", "gif"];
  const { fileData, setFileData, uploadFile, deleteFile } = useUploadFile(allowType, 8, 1);
  const fileRef = useRef(null);

  const convertURLtoFile = async url => {
    url = process.env.REACT_APP_SERVER_URL + "images" + url;
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], filename, metadata);
  };

  const loadFileData = async () => {
    const dataTranster = new DataTransfer();
    const urlArr = postContents.top_image;
    for (let el of urlArr) {
      const convData = await convertURLtoFile(el);
      dataTranster.items.add(convData);
    }
    fileRef.current.files = dataTranster.files;
    const fileArr = Array.from(dataTranster.files);
    const newFileData = fileArr.map(el => {
      return { file: el, url: URL.createObjectURL(el) };
    });
    setFileData(newFileData);
  };

  useEffect(() => {
    if (postContents.top_image) loadFileData();
  }, []);

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
      <input ref={fileRef} type="file" className="file" onChange={uploadFile} />
    </div>
  );
}

function FileItemEtc({ setCommunityfile, postContents }) {
  const { fileData, setFileData, uploadFile, deleteFile } = useUploadFile(null, 8, 3);
  const fileRef = useRef(null);

  const convertURLtoFile = async (url, filename) => {
    url = process.env.REACT_APP_SERVER_URL + "images" + url;
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split(".").pop();
    // const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], filename, metadata);
  };

  const loadFileData = async () => {
    const dataTranster = new DataTransfer();
    const urlArr = postContents.community_file;
    let idx = 0;
    for (let el of urlArr) {
      const convData = await convertURLtoFile(el, postContents.community_origin[idx]);
      dataTranster.items.add(convData);
      idx++;
    }
    fileRef.current.files = dataTranster.files;
    const fileArr = Array.from(dataTranster.files);
    const newFileData = fileArr.map(el => {
      return { file: el, url: URL.createObjectURL(el) };
    });
    setFileData(newFileData);
  };

  useEffect(() => {
    if (postContents.community_file) loadFileData();
  }, []);

  useEffect(() => {
    setCommunityfile(fileData);
  }, [fileData]);

  if (postContents)
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
        <input ref={fileRef} type="file" className="file" onChange={uploadFile} multiple />
      </div>
    );
}
