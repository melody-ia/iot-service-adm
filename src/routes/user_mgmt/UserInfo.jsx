import Radio from "../../components/RadioBtn";
import img from "../../assets/img/img.png";
import { Lnb, CurrentBox } from "../../components/bundle_components";

export default function UserInfo() {
  return (
    <>
      <Lnb lnbType="userInfo" />
      <CurrentBox mod={true} del={true} down={true} tit="회원 정보" />
      {/* 계정이 비활성화계정일 시 noactive 클래스 추가 */}
      <div className="user_info box_ty01 noActive">
        <div className="write_type">
          <div className="essential_area">
            <h4 className="write_tit">필수정보</h4>
            <div className="wirte_area">
              <div className="flex_box">
                <div className="input_ty02 flex_left user_id">
                  <label htmlFor="">아이디</label>
                  <input type="text" placeholder="직접입력" defaultValue={"wizzz"} />
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">이메일</label>
                  <input type="email" placeholder="직접입력" defaultValue={"kimwiz@naver.com"} />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">이름</label>
                  <input type="text" placeholder="직접입력" defaultValue={"김위즈"} />
                </div>
                <div className="radio_group flex_right">
                  <span className="label">성별</span>
                  <div className="radio_wrap">
                    <Radio for="male" id="male" name="gender" text="남" />
                    <Radio for="female" id="female" name="gender" text="여" />
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">생년월일</label>
                  <input type="text" placeholder="직접입력" defaultValue={"1990.10.01"} />
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">거주인원 수</label>
                  <input type="text" placeholder="직접입력" defaultValue={"3"} />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">휴대폰 번호</label>
                  <input type="text" placeholder="직접입력" defaultValue={"010-1111-2222"} />
                </div>
                <div className="flex_right"></div>
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
                      <span className="plus">&times;</span>
                      <p>파일첨부</p>
                    </button>
                    <div className="profile_img">
                      <img src={img} alt="" />
                      <div className="hover">
                        <span className="file_name">adffhdjkd5465.jpg</span>
                        <button className="btn_del">파일 삭제</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="flex_right">
                    <span className="label">주요 이동수단</span>
                    <div className="select_input input_ty02">
                      <input type="text" defaultValue="자가용" readOnly />
                      <ul className="select_box">
                        <li>자가용</li>
                        <li>지하철</li>
                        <li>버스</li>
                        <li>기차</li>
                        <li>오토바이</li>
                        <li>자전거</li>
                        <li>도보</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex_right">
                    <span className="label">차종</span>
                    <div className="select_input input_ty02">
                      <input type="text" defaultValue="경형" readOnly />
                      <ul className="select_box">
                        <li>경형</li>
                        <li>소형</li>
                        <li>준중형</li>
                        <li>중형</li>
                        <li>준대형</li>
                        <li>대형</li>
                        <li>스포츠카</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">주소</label>
                  <div className="addr_wrap">
                    <input type="text" placeholder="직접입력" defaultValue={"서울시 강남구 대치동"} />
                    <button type="button" className="btn_ty01 btn_search">
                      검색
                    </button>
                  </div>
                </div>
                <div className="input_ty02 flex_right">
                  <label htmlFor="">차종 배기량(CC)</label>
                  <input type="text" placeholder="직접입력" />
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">상세주소</label>
                  <input type="text" placeholder="직접입력" defaultValue={"위즈INC 3층"} />
                </div>
                <div className="flex_right">
                  <span className="label">유종</span>
                  <div className="select_input input_ty02">
                    <input type="text" defaultValue="가솔린" readOnly />
                    <ul className="select_box">
                      <li>가솔린</li>
                      <li>디젤</li>
                      <li>하이브리드</li>
                      <li>LPG</li>
                      <li>전기</li>
                      <li>수도</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">주택형태</label>
                  <input type="text" placeholder="직접입력" />
                </div>
                <div className="radio_group flex_right">
                  <span className="label">음식물 처리기 소유 여부</span>
                  <div className="radio_wrap">
                    <Radio for="yes" id="yes" name="have" text="있음" />
                    <Radio for="no" id="no" name="have" text="없음" />
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="flex_left">
                  <span className="label">직업</span>
                  <div className="select_input input_ty02">
                    <input type="text" defaultValue="주부" readOnly />
                    <ul className="select_box">
                      <li>주부</li>
                      <li>공무원</li>
                      <li>회사원</li>
                      <li>자영업</li>
                      <li>학생</li>
                      <li>무직</li>
                    </ul>
                  </div>
                </div>
                <div className="flex_right">
                  <span className="label">음식물 쓰레기 처리 방식</span>
                  <div className="select_input input_ty02">
                    <input type="text" defaultValue="음식물처리기" readOnly />
                    <ul className="select_box">
                      <li>음식물처리기</li>
                      <li>공동주택 세대별 카드</li>
                      <li>공동주택 종량제 스티커</li>
                      <li>음식물 전용 봉투 및 전용 용기</li>
                      <li>기타</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="input_ty02 flex_left">
                  <label htmlFor="">가입일</label>
                  <input type="text" placeholder="직접입력" defaultValue={"2023.05.30"} />
                </div>
                <div className="flex_right">
                  <span className="label">최종학력</span>
                  <div className="select_input input_ty02">
                    <input type="text" defaultValue="대학원" readOnly />
                    <ul className="select_box">
                      <li>대학원</li>
                      <li>대학</li>
                      <li>전문대</li>
                      <li>고등학교</li>
                      <li>중학교</li>
                      <li>초등학교</li>
                      <li>해당사항없음</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex_box">
                <div className="radio_group flex_left">
                  <span className="label">계정활성화 여부</span>
                  <div className="radio_wrap">
                    <Radio for="active" id="active" name="active" text="계정활성화" />
                    <Radio for="noActive" id="noActive" name="active" text="계정비활성화" />
                  </div>
                </div>
                <div className="radio_group flex_right">
                  <span className="label">결혼여부</span>
                  <div className="radio_wrap">
                    <Radio for="married" id="married" name="marry" text="기혼" />
                    <Radio for="single" id="single" name="marry" text="미혼" />
                  </div>
                </div>
              </div>
              <div className="input_ty02 flex_box">
                <label htmlFor="">비고</label>
                <textarea placeholder="직접입력" defaultValue={"신고 누적으로 계정 정지"}></textarea>
              </div>
            </div>
          </div>
          <div className="bottom_btn_wrap">
            <button type="button" className="btn_ty01 cancel">
              취소
            </button>
            <button type="button" className="btn_ty01">
              등록
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
