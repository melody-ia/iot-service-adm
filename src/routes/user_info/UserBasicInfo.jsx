import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Radio from "../../components/RadioBtn";
import img from "../../assets/img/img.png";
import { Lnb, CurrentBox } from "../../components/bundle_components";
import { useEssentialInfo, useSelectInfo, useSelectBox, useUploadFile } from "../../hooks/bundle_hooks";

export default function UserInfo() {
  const allowType = ["jpg", "jpeg", "png", "gif"];
  const { id } = useParams();
  const { pathname } = useLocation();
  const { form, setForm, valid, dupCheck, validPass, errorCheck } = useEssentialInfo();
  const { choiceForm, setChoiceForm, dataSel } = useSelectInfo();
  const { selectedValues, selecBoxHtml } = useSelectBox({
    transSel: ["자가용", "지하철", "버스", "기차", "오토바이", "자전거", "도보"],
    carSel: ["경형", "소형", "준중형", "중형", "준대형", "대형", "스포츠카"],
    oilSel: ["가솔린", "디젤", "하이브리드", "LPG", "전기", "수도"],
    methodSel: ["음식물처리기", "공동주택 세대별 카드", "공동주택 종량제 스티커", "음식물 전용 봉투 및 전용 용기"],
    jobSel: ["주부", "공무원", "회사원", "자영업", "학생", "무직"],
    abilitySel: ["대학원", "대학", "전문대", "고등학교", "중학교", "초등학교", "해당사항 없음"],
  });
  const { fileData, deleteFile, uploadFile } = useUploadFile(allowType, 1, 1);
  const [addrBox, setAddrBox] = useState("");
  const pageName = () => pathname.split("/").slice(0, -1).join("");

  const loadUserData = async () => {
    const res1 = await axios.get("api");
    const res2 = await axios.get("api");
    setForm(res1);
    setChoiceForm(res2);
  };

  useEffect(() => {
    // loadUserData()
  }, []);

  return (
    <>
      <Lnb lnbType="userInfo" />
      {/* <CurrentBox mod={true} del={true} down={true} tit="회원 정보" /> */}
      <CurrentBox btns={["mod", "del", "down"]} tit="회원 정보" />
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
                    <input type="text" placeholder="직접입력" value={form.id.val} data-type="id" onChange={valid} />
                    <button type="button" className="btn_ty01 btn_search" onClick={dupCheck}>
                      중복확인
                    </button>
                    {errorCheck("id_dup")?.alert}
                  </div>
                </div>

                <div className="input_ty02 flex_right">
                  <label htmlFor="">비밀번호</label>
                  <div className="d-flex ip_box">
                    <input type="password" placeholder="직접입력" value={form.pw.val} data-type="pw" onChange={valid} />
                    {errorCheck("pw")?.alert}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">이름</label>
                  <div className="d-flex ip_box">
                    <input type="text" placeholder="직접입력" value={form.name.val} data-type="name" onChange={valid} />
                    {errorCheck("name")?.alert}
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
                          dataType="gender"
                          dataValue={el[0]}
                          onClick={valid}
                          checked={form.gender.val === el[0] && true}
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
                    <input type="text" placeholder="직접입력" data-type="birth" value={form.birth.val} onChange={valid} />
                    {errorCheck("birth")?.alert}
                  </div>
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">거주인원 수</label>
                  <div className="d-flex ip_box">
                    <input type="text" placeholder="직접입력" data-type="family" value={form.family.val} onChange={valid} />
                    {errorCheck("family")?.alert}
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">이메일</label>
                  <div className="d-flex ip_box">
                    <input type="email" placeholder="직접입력" data-type="email" value={form.email.val} onChange={valid} />
                    {errorCheck("email")?.alert}
                  </div>
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">휴대폰 번호</label>
                  <div className="d-flex ip_box">
                    <input type="text" placeholder="직접입력" data-type="ph" value={form.ph.val} onChange={valid} />
                    {errorCheck("ph")?.alert}
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
                  <input type="text" placeholder="직접입력" data-type="how_cc" value={choiceForm.how_cc} onChange={dataSel} />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">상세주소</label>
                  <input type="text" placeholder="직접입력" data-type="addr_detail" value={choiceForm.addr_detail} onChange={dataSel} />
                </div>
                <div className="flex_right">
                  <span className="label">유종</span>
                  {selecBoxHtml[2]}
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">주택형태</label>
                  <input type="text" placeholder="아파트, 다세대, 단독" />
                </div>
                <div className="radio_group flex_right">
                  <span className="label">음식물 처리기 소유 여부</span>
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
                  <input type="text" placeholder="직접입력" defaultValue={"2023.05.30"} />
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
                      ["계정활성화", "active"],
                      ["계정비활성화", "noActive"],
                    ].map((el, idx) => {
                      return (
                        <Radio
                          key={idx}
                          for={el[1]}
                          id={el[1]}
                          name="active"
                          text={el[0]}
                          dataType="active"
                          dataValue={el[0]}
                          onClick={dataSel}
                          checked={el[0] === choiceForm["active"] ? true : false}
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
                        <Radio key={idx} for={el[1]} id={el[1]} name="marry" text={el[0]} dataType="is_married" dataValue={el[0]} onClick={dataSel} />
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="input_ty02 flex_box">
                <label htmlFor="">비고</label>
                <textarea placeholder="직접입력" data-type="comment" onChange={dataSel}></textarea>
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
              등록
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
