import { useState } from "react";
// import { useRecoilState } from "recoil";
// import { joinDataAtom, userDataAtom } from "../recoil/atoms";

export function useEssentialInfo(option) {
  // const [joinData, setJoinData] = useRecoilState(joinDataAtom);
  // const [userData, setUserData] = useRecoilState(userDataAtom);
  const [form, setForm] = useState({
    id: { val: "", isValid: false },
    id_dup: { isValid: false },
    pw: { val: "", isValid: false },
    // pw_cfm: { val: "", isValid: false },
    name: {
      val: "",
      isValid: false,
    },
    gender: {
      val: "남",
      isValid: true,
    },
    birth: {
      val: "",
      isValid: false,
    },
    family: {
      val: "",
      isValid: false,
    },
    email: {
      val: "",
      isValid: false,
    },
    ph: {
      val: "",
      isValid: false,
    },
  });

  const errorText = {
    id: "아이디 입력 형식이 잘못되었습니다.",
    id_dup: "아이디 중복확인이 되지 않았습니다.",
    pw: "비밀번호 입력 형식이 잘못되었습니다.",
    // pw_cfm: "입력하신 비밀번호와 일치하지 않습니다.",
    name: "이름 입력 형식이 잘못되었습니다.",
    birth: "생년월일 입력 형식이 잘못되었습니다",
    email: "이메일 입력 형식이 잘못되었습니다.",
    ph: "휴대폰번호 입력 형식이 잘못되었습니다.",
  };

  const valid = e => {
    let val = e.target.dataset.value || e.target.value;
    val = val.replace(/ /g, "");
    const type = e.target.dataset.type;
    const exp = {
      name: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/,
      // 한글 2~4자 또는 영문 성 2~10자, 띄어쓰기, 영문 이름 2~10자(한글, 영문 혼용X)
      id: /^[a-z]+[a-z0-9]{5,29}$/,
      //영문으로 시작하는 영문, 숫자 조합 6자 이상 30자 이하
      pw: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/,
      //영문, 숫자, 특수문자를 최소 한가지씩 조합 8자 이상 30자 이하
      family: /^[0-9]+$/,
      //숫자만 입력
      email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      //이메일 형식
      birth: /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/,
      //19 혹은 20 으로 시작하는 8자리 숫자
      // ph: /(^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g,
      ph: /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/,
      //01로 시작하는 10~11자리 숫자
    };
    switch (type) {
      case "id": {
        setForm({ ...form, [type]: { val, isValid: exp[type].test(val) }, id_dup: { isValid: false } });
        break;
      }
      // case "pw": {
      //   const pwCfmVal = form.pw_cfm.val;
      //   setForm({
      //     ...form,
      //     [type]: { val, isValid: exp[type].test(val) },
      //     pw_cfm: { val: pwCfmVal, isValid: val === pwCfmVal },
      //   });
      //   break;
      // }
      // case "pw_cfm": {
      //   setForm({ ...form, [type]: { val, isValid: val === form.pw.val } });
      //   break;
      // }
      case "email_f": {
        const emailB = form.email.val.split("@")[1];
        val = val + "@" + emailB;
        setForm({ ...form, email: { val, isValid: exp["email"].test(val) } });
        break;
      }
      case "email_b": {
        const emailF = form.email.val.split("@")[0];
        val = emailF + "@" + val;
        setForm({ ...form, email: { val, isValid: exp["email"].test(val) } });
        break;
      }
      case "email_a": {
        const emailF = form.email.val.split("@")[0];
        val = emailF + "@" + e.target.innerText;
        setForm({ ...form, email: { val, isValid: exp["email"].test(val) } });
        break;
      }
      case "family": {
        val = val.replace(/[^0-9]/, "");
        setForm({ ...form, [type]: { val, isValid: exp[type].test(val) } });
        break;
      }
      case "gender": {
        setForm({ ...form, [type]: { val, isValid: true } });
        break;
      }
      default: {
        setForm({ ...form, [type]: { val, isValid: exp[type].test(val) } });
      }
    }
  };

  const dupCheck = async e => {
    e.preventDefault();
    let result = await "중복체크api요청";
    // setForm({ ...form, id_dup: {isValid:result} });
    setForm({ ...form, id_dup: { isValid: true } });
  };

  const validPass = () => {
    if (option) {
      return option.every(el => form[el].isValid);
    } else return Object.values(form).every(el => el.isValid);
  };

  const errorCheck = type => {
    switch (type) {
      case "id_dup": {
        if (form["id"].val && !form["id"].isValid) {
          return { state: "error", alert: <p className="error_text">{errorText["id"]}</p> };
        } else if (form["id"].isValid && !form[type].isValid) {
          return { state: "error", alert: <p className="error_text">{errorText[type]}</p> };
        }
        break;
      }
      case "email": {
        if (form[type].val && !form[type].isValid) {
          return { state: "error", alert: <p className="error_text">{errorText[type]}</p> };
        }
        break;
      }
      default: {
        if (form[type].val && !form[type].isValid) {
          return { state: "error", alert: <p className="error_text">{errorText[type]}</p> };
        }
      }
    }
  };
  return { form, setForm, valid, dupCheck, validPass, errorCheck };
}
