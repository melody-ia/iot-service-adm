import arrowLeft from "../assets/img/icon/angle_down.svg";
import arrowRight from "../assets/img/icon/angle_down.svg";

export default function Pagination({ pageData, curPage, setCurPage }) {
  if (!pageData) return;
  return (
    <div id="pagination" className="d-flex flex-jc">
      {pageData.prev && (
        <button
          type="button"
          className="btn arrow_left"
          onClick={() => {
            setCurPage(curPage - 1);
          }}
        >
          <img src={arrowLeft} alt="왼쪽 화살표 아이콘" />
        </button>
      )}
      {[...new Array(pageData.end_block - pageData.start_block + 1)].map((el, idx) => {
        const pageNum = pageData.start_block + idx;
        return (
          <button
            type="button"
            className={"btn num " + (pageNum === curPage ? "active" : "")}
            onClick={() => {
              setCurPage(pageNum);
            }}
          >
            {pageNum}
          </button>
        );
      })}
      {pageData.next && (
        <button
          type="button"
          className="btn arrow_right"
          onClick={() => {
            setCurPage(curPage + 1);
          }}
        >
          <img src={arrowRight} alt="오른쪽 화살표 아이콘" />
        </button>
      )}
    </div>
  );
}
