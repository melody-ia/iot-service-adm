export default function CurrentBox() {
  return(
    <div className="current_box d-flex flex-ac flex-js box_ty01">
      <h3 className="current_tit">
        회원리스트
      </h3>
      <div className="setting_btn_wrap d-flex flex-ac">
        <button type="button" className="btn_ty01 btn_bg add">등록</button>
        <button type="button" className="btn_ty01 btn_bg modify">수정</button>
        <button type="button" className="btn_ty01 btn_bg del">삭제</button>
        <button type="button" className="btn_ty01 btn_bg down">엑셀 다운로드</button>
      </div>
    </div>
  )
}