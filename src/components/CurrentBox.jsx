import ReactHTMLTableToExcel from "react-html-table-to-excel";
export default function CurrentBox(props) {
  const btnList = [
    ["복원", "res"],
    ["취소", "can"],
    ["등록", "add"],
    ["지급", "give"],
    ["적립", "accu"],
    ["수정", "mod"],
    ["삭제", "del"],
    ["엑셀 다운로드", "down"],
  ];
  return (
    <div className="current_box d-flex flex-ac flex-js box_ty01">
      {!props.hideTit && <h3 className="current_tit">{props.tit}</h3>}
      <div className="setting_btn_wrap d-flex flex-ac">
        {btnList.map((el, idx) => {
          if (props.btns.includes(el[1]))
            return (
              <button type="button" key={idx} className={"btn_ty01 btn_bg " + el[1]} data-btn={el[1]} onClick={props[el[1]]}>
                {el[0]}
                {el[1] === "down" && (
                  <ReactHTMLTableToExcel
                    id="tableToExcelBtn"
                    // className : button의 className
                    className="download-table-xls-button"
                    // table : Mapping할 table Element의 id
                    table="table"
                    // filename : 엑셀 파일 명칭
                    filename="tableName"
                    // sheet : 엑셀 sheet의 명칭
                    sheet="tableSheet"
                    // buttonText : 버튼 이름
                    buttonText="엑셀 다운로드"
                  />
                )}
              </button>
            );
        })}
      </div>
    </div>
  );
}
