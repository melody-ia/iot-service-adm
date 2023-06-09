import arrowLeft from "../assets/img/icon/angle_down.svg";
import arrowRight from "../assets/img/icon/angle_down.svg";

export default function Pagination() {
  return(
    <div id="pagination" className="d-flex flex-jc">
      <button type="button" className="btn arrow_left"><img src={arrowLeft} alt="왼쪽 화살표 아이콘" /></button>
      <button type="button" className="btn num active">1</button>
      <button type="button" className="btn num">2</button>
      <button type="button" className="btn num">3</button>
      <button type="button" className="btn num">4</button>
      <button type="button" className="btn num">5</button>
      <button type="button" className="btn arrow_right"><img src={arrowRight} alt="오른쪽 화살표 아이콘" /></button>
    </div>
  )
}