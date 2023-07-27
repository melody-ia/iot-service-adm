import { useState } from "react";
import Radio from "../../components/RadioBtn";
import img from "../../assets/img/img.png";
import { Lnb, CurrentBox, FindAddr } from "../../components/bundle_components";
import { useEssentialInfo, useSelectInfo, useSelectBox, useUploadFile } from "../../hooks/bundle_hooks";
import { useNavigate } from "react-router-dom";

export default function UserAdd() {
  const allowType = ["jpg", "jpeg", "png", "gif"];
  const { form, setForm, valid, dupCheck, validPass, errorCheck } = useEssentialInfo();
  const { choiceForm, setChoiceForm, dataSel } = useSelectInfo();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    transportation: [{ placeholder: "선택하세요" }, "자가용", "지하철", "버스", "기차", "오토바이", "자전거", "도보"],
    car_type: [{ placeholder: "선택하세요" }, "경형", "소형", "준중형", "중형", "준대형", "대형", "스포츠카"],
    oil_type: [{ placeholder: "선택하세요" }, "가솔린", "디젤", "하이브리드", "LPG", "전기", "수도"],
    job: [{ placeholder: "선택하세요" }, "주부", "공무원", "회사원", "자영업", "학생", "무직"],
    handling: [{ placeholder: "선택하세요" }, "음식물처리기", "공동주택 세대별 카드", "공동주택 종량제 스티커", "음식물 전용 봉투 및 전용 용기"],
    graduation: [{ placeholder: "선택하세요" }, "대학원", "대학", "전문대", "고등학교", "중학교", "초등학교", "해당사항 없음"],
  });
  const { fileData, deleteFile, uploadFile } = useUploadFile(allowType, 1, 1);
  const [addrBox, setAddrBox] = useState("");
  const todayY = new Date().getFullYear();
  const todayM = new Date().getMonth() > 9 ? new Date().getMonth() + 1 : "0" + (new Date().getMonth() + 1);
  const todayD = new Date().getDate() > 10 ? new Date().getDate() : "0" + new Date().getDate();

  const dataSubmit = () => {
    const formData = new FormData();
    fileData.forEach(el => {
      formData.append("file", el.file);
    });
    let joinData = {};
    for (let prop in form) {
      joinData[prop] = form[prop].val;
    }
    joinData = { ...joinData, ...choiceForm, profile_picture: formData };
    console.log(joinData);
  };

  const navigate = useNavigate();

  return (
    <>
      <Lnb lnbType="user" />
      {/* <CurrentBox can={true} add={true} tit="신규 회원 등록" /> */}
      <CurrentBox btns={["can", "add"]} tit="신규 회원 등록" />
      <div className="user_add box_ty01">
        <div className="write_type">
          <div className="essential_area">
            <h4 className="write_tit">필수정보</h4>
            <div className="wirte_area">
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">아이디</label>
                  <div className="d-flex ip_box id_wrap">
                    <input type="text" placeholder="직접입력" value={form.mb_id.val} data-type="mb_id" onChange={valid} />
                    <button type="button" className="btn_ty01 btn_search" onClick={dupCheck}>
                      중복확인
                    </button>
                    {errorCheck("mb_id_dup")?.alert}
                  </div>
                </div>

                <div className="input_ty02 flex_right">
                  <label htmlFor="">비밀번호</label>
                  <div className="d-flex ip_box">
                    <input type="password" placeholder="직접입력" value={form.mb_pw.val} data-type="mb_pw" onChange={valid} />
                    {errorCheck("mb_pw")?.alert}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">이름</label>
                  <div className="d-flex ip_box">
                    <input type="text" placeholder="직접입력" value={form.mb_name.val} data-type="mb_name" onChange={valid} />
                    {errorCheck("mb_name")?.alert}
                  </div>
                </div>
                <div className="radio_group flex_right gender">
                  {/* <span className="label">성별</span> */}
                  <label htmlFor="">성별</label>
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
                    <input type="text" placeholder="직접입력" data-type="mb_birth" value={form.mb_birth.val} onChange={valid} />
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
                    <input type="email" placeholder="직접입력" data-type="mb_email" value={form.mb_email.val} onChange={valid} />
                    {errorCheck("mb_email")?.alert}
                  </div>
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">휴대폰 번호</label>
                  <div className="d-flex ip_box ">
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
                <div className="input_ty02 flex_left">
                  {/* <span className="label">프로필 사진</span> */}
                  <label htmlFor="">프로필 사진</label>
                  <div className="file_wrap">
                    <button className="btn_file_add">
                      <label htmlFor="file">
                        {/* <span className="plus">&times;</span> */}
                        <span className="file-plus"></span>
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
                </div>
                <div className="row">
                  <div className="input_ty02 flex_right">
                    {/* <span className="label">주요 이동수단</span> */}
                    <label htmlFor="">주요 이동수단</label>
                    {selecBoxHtml[0]}
                  </div>
                  <div className="input_ty02 flex_right">
                    {/* <span className="label">차종</span> */}
                    <label htmlFor="">차종</label>
                    {selecBoxHtml[1]}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">주소</label>
                  <div className="addr_wrap">
                    <input type="text" placeholder="직접입력" value={choiceForm.addr} />
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
                <div className="input_ty02 flex_right">
                  {/* <span className="label">유종</span> */}
                  <label htmlFor="">유종</label>
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
                <div className="radio_group flex_right hands">
                  {/* <span className="label">음식물 처리기 소유 여부</span> */}
                  <label htmlFor="">음식물 처리기 소유 여부</label>
                  <div className="radio_wrap">
                    {[
                      ["있음", "yes"],
                      ["없음", "no"],
                    ].map((el, idx) => {
                      return (
                        <Radio key={idx} for={el[1]} id={el[1]} name="have" text={el[0]} dataType="is_have" dataValue={el[0]} onClick={dataSel} />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">직업</label>
                  {/* <span className="label">직업</span> */}
                  {selecBoxHtml[3]}
                </div>
                <div className="input_ty02 flex_right">
                  {/* <span className="label">음식물 쓰레기 처리 방식</span> */}
                  <label htmlFor="">음식물 쓰레기 처리 방식</label>
                  {selecBoxHtml[4]}
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">가입일</label>
                  <input type="text" placeholder="직접입력" defaultValue={todayY + "." + todayM + "." + todayD} readOnly />
                </div>
                <div className="input_ty02 flex_right">
                  {/* <span className="label">최종학력</span> */}
                  <label htmlFor="">최종학력</label>
                  {selecBoxHtml[5]}
                </div>
              </div>
              <div className="flex_box">
                <div className="radio_group flex_left account">
                  <span className="label">계정활성화 여부</span>
                  <div className="radio_wrap account">
                    {[
                      ["계정활성화", 1],
                      ["계정비활성화", 0],
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
                <div className="radio_group flex_right marry">
                  {/* <span className="label">결혼여부</span> */}
                  <label htmlFor="">결혼여부</label>
                  <div className="radio_wrap hands">
                    {[
                      ["기혼", "married"],
                      ["미혼", "single"],
                    ].map((el, idx) => {
                      return (
                        <Radio key={idx} for={el[1]} id={el[1]} name="marry" text={el[0]} dataType="is_married" dataValue={el[0]} onClick={dataSel} />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="input_ty02 flex_box">
                <label htmlFor="">비고</label>
                <textarea placeholder="직접입력" data-type="comment" value={choiceForm["comment"]} onChange={dataSel}></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_btn_wrap">
          <button type="button" className="btn_ty01 cancel" onClick={() => navigate(-1)}>
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
            등록
          </button>
        </div>
      </div>
      <FindAddr addrBox={addrBox} setAddrBox={setAddrBox} choiceForm={choiceForm} setChoiceForm={setChoiceForm} />
    </>
  );
}
