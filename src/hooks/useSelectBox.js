import { useState } from "react";

export function useSelectBox(item) {
  const [selectList, setSelectList] = useState(item);

  const handleSelectBox = target => {
    let copy = { ...selectList };
    for (let prop in copy) {
      copy[prop] = false;
    }
    copy[target] = !selectList[target];
    setSelectList(copy);
  };

  return { selectList, handleSelectBox };
}
