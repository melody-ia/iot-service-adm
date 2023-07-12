import { useState } from "react";

export function useSelectBox(item, state) {
  // const [selectList, setSelectList] = useState(item);
  const createSelectBox = (target, type) => {
    let selectBox = {};
    for (let prop in target) {
      if (type === "select") {
        selectBox[prop] = false;
      } else {
        selectBox[prop] = target[prop][0];
      }
    }
    return selectBox;
  };
  const [selectList, setSelectList] = useState(createSelectBox(item, "select"));
  const [selectedValues, setSelectedValue] = useState(createSelectBox(item));

  const handleSelectBox = target => {
    let copy = { ...selectList };
    for (let prop in copy) {
      copy[prop] = false;
    }
    copy[target] = !selectList[target];
    setSelectList(copy);
  };

  const handleValue = e => {
    let copy = { ...selectedValues };
    copy[e.target.dataset.type] = e.target.dataset.value;
    setSelectedValue(copy);
  };

  const selecBoxHtml = Object.keys(item).map((el, idx) => {
    return (
      <div
        key={idx}
        className="select_input input_ty02"
        onClick={() => {
          handleSelectBox(el);
        }}
      >
        <input
          type="text"
          placeholder={selectedValues[el]?.placeholder ? selectedValues[el]?.placeholder : ""}
          value={selectedValues[el]?.placeholder ? "" : selectedValues[el]}
          readOnly
        />
        {selectList[el] && (
          <ul className="select_box">
            {item[el].map((el02, idx) => {
              if (!el02.placeholder)
                return (
                  <li key={idx} data-type={el} data-value={el02} onClick={handleValue}>
                    {el02}
                  </li>
                );
            })}
          </ul>
        )}
      </div>
    );
  });

  return { selectList, handleSelectBox, selectedValues, setSelectedValue, handleValue, selecBoxHtml };
}
