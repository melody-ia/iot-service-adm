import { useState } from "react";
// import { useRecoilState } from "recoil";
// import { userDataAtom } from "../recoil/atoms";

export function useSelectInfo() {
  // const [userData, setUserData] = useRecoilState(userDataAtom);
  const [choiceForm, setChoiceForm] = useState({
    addr: "",
    detail_addr: "",
    residence_type: "",
    transportation: "",
    car_type: "",
    cc: "",
    oil_type: "",
    ownership: "",
    handling: "",
    job: "",
    graduation: "",
    marriage: "",
    mb_open: "0",
    mb_memo: "",
    mb_profile: "",
  });

  const dataSel = e => {
    let val = e.target.dataset.value || e.target.value;
    const type = e.target.dataset.type;
    if (type === "cc") val = val.replace(/[^0-9]/, "");
    setChoiceForm({ ...choiceForm, [type]: val });
  };

  return { choiceForm, setChoiceForm, dataSel };
}
