import { Link, useLocation } from "react-router-dom";
export default function CurrentBox(props) {
  const btnList = [
    ["취소", "can"],
    ["등록", "add"],
    ["수정", "mod"],
    ["삭제", "del"],
    ["액셀 다운로드", "down"],
  ];

  return (
    <div className="current_box d-flex flex-ac flex-js box_ty01">
      <h3 className="current_tit">{props.tit}</h3>
      <div className="setting_btn_wrap d-flex flex-ac">
        {btnList.map((el, idx) => {
          if (props[el[1]])
            return (
              <Link to={el[1]} key={idx} className={"btn_ty01 btn_bg " + el[1]}>
                {el[0]}
              </Link>
            );
        })}
      </div>
    </div>
  );
}
