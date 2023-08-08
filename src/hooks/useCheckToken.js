import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginAtom } from "../recoil/atoms";
import { apiUrl, serverUrl } from "../variables/bundle_variables";
import axios from "axios";

export function useCheckToken() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [resData, setResData] = useState();
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);

  const postData = async (apiName, body, notChange) => {
    let apiURL = apiUrl + apiName;
    try {
      const res = await axios.post(apiURL, body, { headers: { loginsession: cookies.accessToken } });
      const data = res.data;
      // // console.log({
      //   API이름: apiName,
      //   보낸데이터: body,
      //   받은데이터: data,
      // });
      if (data.code === 200 && cookies.accessToken) {
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1);
        setCookie("accessToken", data.token, { path: "/", expires });
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      if (data.data && !notChange) setResData(res.data.data);
      return res.data;
    } catch (err) {
      alert("서버 혹은 DB 오류입니다.");
    }
  };

  // const errorHtml = !resData && <div>데이터 없음</div>;

  const login = async account => {
    const url = apiUrl + "auth/login";
    try {
      const res = await axios.post(url, { ...account });
      const data = res.data;
      // console.log(data.token);
      if (!data.data) return alert("아이디 혹은 비밀번호를 다시 확인해주세요.");
      const expires = new Date();
      expires.setDate(expires.getDate() + 3);
      setCookie("accessToken", data.token, {
        path: "/",
        expires,
      });
      setCookie("mb_no", data.data.mb_no, { path: "/", expires });
      setIsLogin(true);
      navigate("/");
    } catch (err) {
      alert("서버 혹은 DB 오류입니다.");
    }
  };

  const logout = () => {
    removeCookie("accessToken");
    removeCookie("mb_no");
    setResData(null);
    setIsLogin(false);
    alert("로그아웃 되었습니다.");
    navigate("/Login");
  };

  const updateUserInfo = (form, setForm, type) => {
    if (!resData) return;
    let copy = { ...form };
    if (type === "essential") {
      for (let prop in resData) {
        copy[prop].val = resData[prop];
        copy[prop].isValid = true;
      }
      copy.mb_sex.val = "남";
      copy.mb_sex.isValid = true;
    } else {
      for (let prop in resData) {
        copy[prop] = resData[prop];
      }
    }
    setForm(copy);
  };

  useEffect(() => {
    if (!isLogin) setResData(null);
  }, [isLogin]);

  return {
    login,
    logout,
    isLogin,
    resData,
    setResData,
    mb_no: Number(cookies.mb_no),
    postData,
    updateUserInfo,
  };
}
