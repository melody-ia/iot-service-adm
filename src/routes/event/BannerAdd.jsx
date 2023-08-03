import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lnb, CurrentBox, RadioBtn } from "../../components/bundle_components";
import { useSelectBox, useDatePicker, useUploadFile, useCheckToken } from "../../hooks/bundle_hooks";
import banner from "../../assets/img/banner.png";
import plus from "../../assets/img/icon/border_plus.svg";
import zoom from "../../assets/img/icon/zoomIn.svg";

export default function BannerAdd() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const allowType = ["jpg", "jpeg", "png", "gif"];
  const { fileData, setFileData, letter, uploadFile, deleteFile, writing } = useUploadFile(allowType, 8, 1);
  const { date, start_at, end_at } = useDatePicker();
  const { mb_no, postData } = useCheckToken();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    banner_location: state.categoryList.filter(el => el !== "전체"),
  });
  const [postContents, setPostContents] = useState({
    bn_url: "",
    bn_memo: "",
    bn_priority: 0,
  });
  const fileRef = useRef(null);

  const handlePostContents = e => {
    const type = e.target.dataset.type;
    const value = e.target.dataset.value || e.target.value;
    let copy = { ...postContents };
    copy[type] = value;
    setPostContents(copy);
  };

  const dataSubmit = async () => {
    if (!fileData[0]) return alert("이미지를 등록해주세요.");
    const formData = new FormData();
    formData.append("mb_no", mb_no);
    formData.append("bn_alt", state.categoryList.indexOf(selectedValues.banner_location));
    formData.append("bn_url", postContents.bn_url);
    formData.append("bn_begin_time", start_at);
    formData.append("bn_end_time", end_at);
    formData.append("bn_memo", postContents.bn_memo);
    formData.append("bn_priority", postContents.bn_priority);
    formData.append("bannerimage", fileData[0].file);
    const res = await postData("banner/create", formData);
    if (res.code === 200) {
      alert("등록되었습니다.");
      navigate("/BannerSetting");
    }
  };

  const btnEvent = {
    add() {
      dataSubmit();
    },
  };

  return (
    <>
      <Lnb lnbType="event" />
      {/* <CurrentBox mod={true} del={true} tit="배너 등록/수정" /> */}
      <CurrentBox btns={["add"]} tit="배너 등록" {...btnEvent} />
      <div className="banner_add box_ty01 table_type add_type">
        <div className="size_info">
          <h5 className="size_tit">배너 위치별 사이즈 안내</h5>
          <ul>
            <li>1. 메인 상단: 가로 1080px 세로 480px</li>
            <li>2. 메인 중간: 가로 1080px 세로 365px</li>
            <li>3. 카테고리: 가로 1080px 세로 210px</li>
            <li>4. 데일리 발자국 챌린지 리스트 상단: 가로 1080px 세로 610px</li>
            <li>5. 데일리 발자국 챌린지 글쓰기 상단: 가로 1080px 세로 480px</li>
            <li>6. 탄소중립랭킹 중간: 가로 1080px 세로 610px</li>
            <li>7. 탄소중립랭킹 하단: 가로 1080px 세로 210px</li>
            <li>8. 이벤트/뉴스 상단: 가로 1080px 세로 1020px</li>
            <li>9. GL 추천제품: 가로 1080px 세로 1020px</li>
          </ul>
        </div>
        <div className="table_wrap line">
          <table className="table">
            <colgroup>
              <col width={"80px"} />
              <col width={"50%"} />
              <col width={"150px"} />
              <col width={"300px"} />
            </colgroup>
            <tbody>
              <tr>
                <th rowSpan={3}>
                  배너이미지
                  <div className="btn_wrap">
                    <button type="button">
                      <label htmlFor="file">
                        <img src={plus} alt="" />
                        <input ref={fileRef} type="file" id="file" onChange={uploadFile}></input>
                      </label>
                    </button>
                    {/* 새창으로 미리보기 */}
                    <button type="button" className="btn_view">
                      <img src={zoom} alt="" />
                    </button>
                  </div>
                </th>
                <td rowSpan={3}>
                  <img src={fileData[0]?.url} alt="" />
                </td>
                <th>배너 위치</th>
                <td>{selecBoxHtml}</td>
              </tr>
              <tr>
                <th>공개 기한</th>
                <td>
                  <div className="date_input_wrap d-flex flex-jc">
                    <div className="date_input">{date.start}</div>
                    <span>~</span>
                    <div className="date_input">{date.end}</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>공개 여부</th>
                <td>
                  <div className="radio_group flex_right">
                    <div className="radio_wrap">
                      {[
                        ["공개", "show", 0],
                        ["비공개", "hide", 1],
                      ].map((el, idx) => {
                        return (
                          <RadioBtn
                            key={idx}
                            for={el[1]}
                            id={el[1]}
                            name={"isShow"}
                            checked={postContents.bn_priority == el[2]}
                            text={el[0]}
                            dataType={"bn_priority"}
                            dataValue={el[2]}
                            onClick={handlePostContents}
                          />
                        );
                      })}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>링크연결</th>
                <td colSpan={3}>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" value={postContents.bn_url} data-type="bn_url" onChange={handlePostContents} />
                  </div>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td colSpan={3}>
                  <div className="input_ty02">
                    <input type="text" placeholder="직접입력" value={postContents.bn_memo} data-type="bn_memo" onChange={handlePostContents} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
