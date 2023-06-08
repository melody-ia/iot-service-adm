import logoImg from "../assets/img/textLogo.svg"

export default function Login() {
  return(
    <div id="login" className="login">
      <div className="wrap">
        <div className="login_top">
          <div className="logo_img">
            <img src={logoImg} alt="그린톡 로고 이미지" />
          </div>
          <h2 className="login_tit">관리자 로그인</h2>
        </div>
        <div className="login_input">         
          <div className="input_wrap input_ty01">
            <label htmlFor="">
              아이디
              <input type="text" placeholder="아이디를 입력하세요." />
            </label>
          </div>
          <div className="input_wrap input_ty01">
            <label htmlFor="">
              비밀번호
              <input type="password" placeholder="비밀번호를 입력하세요."/>
            </label>
          </div>
          <div className="input_wrap check_type">
            <label htmlFor="saveId">
              <input type="checkbox" id="saveId" />
              <span>아이디 저장</span>
            </label>
          </div>
          <button type="button" className="btn_ty01 bBtn w100">로그인</button>
        </div>
      </div>
    </div>
  )
}