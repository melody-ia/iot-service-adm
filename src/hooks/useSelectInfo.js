import { useState } from "react";
// import { useRecoilState } from "recoil";
// import { userDataAtom } from "../recoil/atoms";

export function useSelectInfo() {
  // const [userData, setUserData] = useRecoilState(userDataAtom);
  const [choiceForm, setChoiceForm] = useState({
    addr: "",
    addr_detail: "",
    housing_type: "",
    how_move: "",
    car_type: "",
    how_cc: "",
    oil_type: "",
    is_have: "",
    disposal: "",
    job: "",
    ability: "",
    is_married: "",
    active: "계정활성화",
    comment: "",
  });

  const dataSel = e => {
    let val = e.target.dataset.value || e.target.value;
    const type = e.target.dataset.type;
    if (type === "how_cc") val = val.replace(/[^0-9]/, "");
    setChoiceForm({ ...choiceForm, [type]: val });
  };

  return { choiceForm, setChoiceForm, dataSel };
}
