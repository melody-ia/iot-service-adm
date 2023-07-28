import { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import Radio from "../../components/RadioBtn";
import img from "../../assets/img/img.png";
import { Lnb, CurrentBox, FindAddr } from "../../components/bundle_components";
import { useEssentialInfo, useSelectInfo, useSelectBox, useUploadFile, useCheckToken } from "../../hooks/bundle_hooks";
import { serverUrl } from "../../variables/bundle_variables";

export default function UserInfo() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const { mb_no, postData, resData } = useCheckToken();
  const { form, setForm, valid, validPass, errorCheck } = useEssentialInfo([
    "mb_id",
    "mb_name",
    "mb_sex",
    "mb_birth",
    "mb_certify",
    "mb_email",
    "mb_hp",
  ]);
  const { choiceForm, setChoiceForm, dataSel } = useSelectInfo();
  const { selectedValues, setSelectedValue, selecBoxHtml } = useSelectBox({
    transportation: ["자가용", "지하철", "버스", "기차", "오토바이", "자전거", "도보"],
    car_type: ["경형", "소형", "준중형", "중형", "준대형", "대형", "스포츠카"],
    oil_type: ["가솔린", "디젤", "하이브리드", "LPG", "전기", "수도"],
    job: ["주부", "공무원", "회사원", "자영업", "학생", "무직"],
    handling: ["음식물처리기", "공동주택 세대별 카드", "공동주택 종량제 스티커", "음식물 전용 봉투 및 전용 용기"],
    graduation: ["대학원", "대학", "전문대", "고등학교", "중학교", "초등학교", "해당사항 없음"],
  });
  const [addrBox, setAddrBox] = useState("");

  const loadUserData = async () => {
    const type = pathname.includes("Delete") ? "leave" : "all";
    const res = await postData("member/show", { mb_no, target_id: id, type });
    const essentialInfo = {};
    const choiceInfo = {};
    const selectBoxData = {};
    Object.keys(form)
      .filter(el => el !== "mb_id_dup")
      .forEach(el => {
        essentialInfo[el] = {
          val: res.data.memberInfo[0][el],
          isValid: true,
        };
      });
    Object.keys(choiceForm).forEach(el => {
      choiceInfo[el] = res.data.memberInfo[0][el];
      if (Object.keys(selectedValues).includes(el)) selectBoxData[el] = res.data.memberInfo[0][el];
    });
    setForm({ ...form, ...essentialInfo });
    setChoiceForm({ ...choiceInfo });
    setSelectedValue({ ...selectBoxData });
  };

  console.log(resData);

  const editUserData = async () => {
    const type = pathname.includes("Delete") ? "leave" : "all";
    const formCopy = { ...form };
    const chioceFormCopy = { ...choiceForm };
    const totalInfo = {};
    for (let prop in formCopy) {
      if (["mb_id", "mb_id_dup", "mb_name", "mb_birth", "mb_hp", "mb_email", "mb_sex", "mb_datetime"].includes(prop)) continue;
      totalInfo[prop] = formCopy[prop]["val"];
    }
    for (let prop in chioceFormCopy) {
      totalInfo[prop] = chioceFormCopy[prop];
    }
    if (!totalInfo.mb_password) delete totalInfo.mb_password;
    if (!totalInfo.mb_profile) delete totalInfo.mb_profile;
    const formData = new FormData();
    formData.append("mb_no", mb_no);
    formData.append("target_id", formCopy.mb_id.val);
    formData.append("type", type);
    for (let prop in totalInfo) {
      formData.append(prop, totalInfo[prop]);
    }
    await postData("member/update", formData);
    alert("수정되었습니다.");
  };

  const btnEvent = {
    mod() {
      editUserData();
    },
  };

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    if (Object.values(choiceForm).some(el => el)) setChoiceForm({ ...choiceForm, ...selectedValues });
  }, [selectedValues]);

  // console.log(choiceForm);

  return (
    <>
      <Lnb lnbType={pathname.includes("Delete") ? "deleteUserInfo" : "userInfo"} />
      {/* <CurrentBox mod={true} del={true} down={true} tit="회원 정보" /> */}
      <CurrentBox btns={["mod", "down"]} tit="회원 정보" {...btnEvent} />
      {/* 계정이 비활성화계정일 시 noactive 클래스 추가 */}
      <div className="user_info box_ty01 noActive">
        <div className="write_type">
          <div className="essential_area">
            <h4 className="write_tit">필수정보</h4>
            <div className="wirte_area">
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">아이디</label>
                  <div className="d-flex ip_box id_wrap">
                    <input type="text" placeholder="직접입력" value={form.mb_id.val} data-type="mb_id" onChange={valid} readOnly />
                    {/* <button type="button" className="btn_ty01 btn_search" onClick={dupCheck}>
                      중복확인
                    </button> */}
                    {/* {errorCheck("mb_id_dup")?.alert} */}
                  </div>
                </div>

                <div className="input_ty02 flex_right">
                  <label htmlFor="">비밀번호</label>
                  <div className="d-flex ip_box">
                    <input type="password" placeholder="직접입력" value={form.mb_password.val} data-type="mb_password" onChange={valid} />
                    {errorCheck("mb_password")?.alert}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">이름</label>
                  <div className="d-flex ip_box">
                    <input type="text" placeholder="직접입력" value={form.mb_name.val} data-type="mb_name" onChange={valid} readOnly />
                    {errorCheck("mb_name")?.alert}
                  </div>
                </div>
                <div className="radio_group flex_right">
                  <span className="label">성별</span>
                  <div className="radio_wrap">
                    {[
                      ["남", "male"],
                      ["여", "female"],
                    ].map((el, idx) => {
                      return (
                        <Radio
                          key={idx}
                          for={el[1]}
                          id={el[1]}
                          name="gender"
                          text={el[0]}
                          dataType="mb_sex"
                          dataValue={el[0]}
                          onClick={valid}
                          checked={form.mb_sex.val === el[0] && true}
                          disabled
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">생년월일</label>
                  <div className="d-flex ip_box">
                    <input type="text" placeholder="직접입력" data-type="mb_birth" value={form.mb_birth.val} onChange={valid} readOnly />
                    {errorCheck("mb_birth")?.alert}
                  </div>
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">거주인원 수</label>
                  <div className="d-flex ip_box">
                    <input type="text" placeholder="직접입력" data-type="mb_certify" value={form.mb_certify.val} onChange={valid} />
                    {errorCheck("mb_certify")?.alert}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">이메일</label>
                  <div className="d-flex ip_box">
                    <input type="mb_email" placeholder="직접입력" data-type="mb_email" value={form.mb_email.val} onChange={valid} readOnly />
                    {errorCheck("mb_email")?.alert}
                  </div>
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">휴대폰 번호</label>
                  <div className="d-flex ip_box">
                    <input type="text" placeholder="직접입력" data-type="mb_hp" value={form.mb_hp.val} onChange={valid} />
                    {errorCheck("mb_hp")?.alert}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="select_area">
            <h4 className="write_tit">선택정보</h4>
            <div className="wirte_area">
              <div className="flex_box">
                <div className="flex_left">
                  <span className="label">프로필 사진</span>
                  <FileItemProfile imgaeUrl={resData?.memberInfo[0].mb_profile} choiceForm={choiceForm} setChoiceForm={setChoiceForm} />
                </div>
                <div className="row">
                  <div className="flex_right">
                    <span className="label">주요 이동수단</span>
                    {selecBoxHtml[0]}
                  </div>
                  <div className="flex_right">
                    <span className="label">차종</span>
                    {selecBoxHtml[1]}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">주소</label>
                  <div className="addr_wrap">
                    <input type="text" placeholder="직접입력" value={choiceForm.addr} readOnly />
                    <button
                      type="button"
                      className="btn_ty01 btn_search"
                      onClick={() => {
                        setAddrBox("active");
                      }}
                    >
                      검색
                    </button>
                  </div>
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">차종 배기량(CC)</label>
                  <input type="text" placeholder="직접입력" data-type="cc" value={choiceForm.cc} onChange={dataSel} />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">상세주소</label>
                  <input type="text" placeholder="직접입력" data-type="detail_addr" value={choiceForm.detail_addr} onChange={dataSel} />
                </div>
                <div className="flex_right">
                  <span className="label">유종</span>
                  {selecBoxHtml[2]}
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">주택형태</label>
                  <input
                    type="text"
                    placeholder="아파트, 다세대, 단독"
                    data-type="residence_type"
                    value={choiceForm.residence_type}
                    onChange={dataSel}
                  />
                </div>
                <div className="radio_group flex_right">
                  <span className="label">음식물 처리기 소유 여부</span>
                  <div className="radio_wrap">
                    {[
                      ["있음", "yes"],
                      ["없음", "no"],
                    ].map((el, idx) => {
                      return (
                        <Radio
                          key={idx}
                          for={el[1]}
                          id={el[1]}
                          name="have"
                          text={el[0]}
                          dataType="ownership"
                          dataValue={el[0]}
                          onClick={dataSel}
                          checked={choiceForm["ownership"] === el[0] ? true : false}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="flex_left">
                  <span className="label">직업</span>
                  {selecBoxHtml[3]}
                </div>
                <div className="flex_right">
                  <span className="label">음식물 쓰레기 처리 방식</span>
                  {selecBoxHtml[4]}
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">가입일</label>
                  <input type="text" placeholder="직접입력" defaultValue={"2023.05.30"} readOnly />
                </div>
                <div className="flex_right">
                  <span className="label">최종학력</span>
                  {selecBoxHtml[5]}
                </div>
              </div>
              <div className="flex_box">
                <div className="radio_group flex_left">
                  <span className="label">계정활성화 여부</span>
                  <div className="radio_wrap">
                    {[
                      ["계정활성화", 0],
                      ["계정비활성화", 1],
                    ].map((el, idx) => {
                      return (
                        <Radio
                          key={idx}
                          for={el[1]}
                          id={el[1]}
                          name="active"
                          text={el[0]}
                          dataType="mb_open"
                          dataValue={el[1]}
                          onClick={dataSel}
                          checked={el[1] == choiceForm["mb_open"] ? true : false}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="radio_group flex_right">
                  <span className="label">결혼여부</span>
                  <div className="radio_wrap">
                    {[
                      ["기혼", "married"],
                      ["미혼", "single"],
                    ].map((el, idx) => {
                      return (
                        <Radio
                          key={idx}
                          for={el[1]}
                          id={el[1]}
                          name="marry"
                          text={el[0]}
                          dataType="marriage"
                          dataValue={el[0]}
                          onClick={dataSel}
                          checked={el[0] === choiceForm["marriage"] ? true : false}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="input_ty02 flex_box">
                <label htmlFor="">비고</label>
                <textarea placeholder="직접입력" data-type="mb_memo" value={choiceForm.mb_memo} onChange={dataSel}></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_btn_wrap">
          <button type="button" className="btn_ty01 cancel">
            취소
          </button>
          <button
            type="button"
            className="btn_ty01"
            disabled={!validPass()}
            onClick={() => {
              alert("완료");
            }}
          >
            수정
          </button>
        </div>
      </div>

      <FindAddr addrBox={addrBox} setAddrBox={setAddrBox} choiceForm={choiceForm} setChoiceForm={setChoiceForm} />
    </>
  );
}

function FileItemProfile({ imageUrl, choiceForm, setChoiceForm }) {
  const allowType = ["jpg", "jpeg", "png", "gif"];
  const { fileData, setFileData, deleteFile, uploadFile } = useUploadFile(allowType, 1, 1);
  const fileRef = useRef(null);

  const convertURLtoFile = async url => {
    url = serverUrl + "images" + url;
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], filename, metadata);
  };

  const loadFileData = async () => {
    const dataTranster = new DataTransfer();
    const urlArr = imageUrl;
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
    if (imageUrl) loadFileData();
  }, []);

  useEffect(() => {
    setChoiceForm({ ...choiceForm, mb_profile: fileData[0]?.file });
  }, [fileData]);

  return (
    <div className="file_wrap">
      <button className="btn_file_add">
        <label htmlFor="file">
          <span className="plus">&times;</span>
          <p>파일첨부</p>
          <input type="file" id="file" onChange={uploadFile} />
        </label>
      </button>
      {fileData[0] && (
        <div className="profile_img">
          <img src={fileData[0]?.url || img} alt="" />
          <div className="hover">
            <span className="file_name">{fileData[0]?.file.name}</span>
            <button className="btn_del" data-url={fileData[0]?.url} onClick={deleteFile}>
              파일 삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
