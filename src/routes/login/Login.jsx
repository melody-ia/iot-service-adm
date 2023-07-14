import { useEffect, useState } from "react";
import { useCheckToken } from "../../hooks/bundle_hooks";
import logoImg from "../../assets/img/textLogo.svg";

export default function Login() {
  const { login } = useCheckToken();
  const [account, setAccout] = useState({ mb_id: "", mb_password: "" });

  const handleAccount = e => {
    setAccout({ ...account, [e.target.dataset.type]: e.target.value });
  };

  const dataSubmit = async () => {
    login(account);
  };

  return (
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
              <input type="text" placeholder="아이디를 입력하세요." data-type="mb_id" value={account.mb_id} onChange={handleAccount} />
            </label>
          </div>
          <div className="input_wrap input_ty01">
            <label htmlFor="">
              비밀번호
              <input
                type="password"
                placeholder="비밀번호를 입력하세요."
                data-type="mb_password"
                value={account.mb_password}
                onChange={handleAccount}
              />
            </label>
          </div>
          {/* <div className="input_wrap check_type">
            <label htmlFor="saveId">
              <input type="checkbox" id="saveId" />
              <span>아이디 저장</span>
            </label>
          </div> */}
          <button type="button" className="btn_ty01 bBtn w100" onClick={dataSubmit}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
