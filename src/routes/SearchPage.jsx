import { Link } from "react-router-dom";
import { Lnb } from "../components/bundle_components";

export default function SearchPage() {
  return(
    <>
      <Lnb lnbType="search" />
      <div id="search" className="box_ty01">        
        <ul className="search_list">
          <li className="sh_tit">메뉴 (2)</li>
          <li>
            <span className="match_text">포인트</span> 지급/사용 내역
            <span className="c_gray">회원 관리 &gt; 회원 리스트 &gt; 포인트 지급/사용 내역</span>
          </li>
          <li>
            <span className="match_text">포인트</span> 관리
            <span className="c_gray">도장/포인트 관리 &gt; 포인트 관리</span>
          </li>
        </ul>
        <ul className="search_list">
          <li className="sh_tit">이벤트/뉴스 관리(10)</li>
          <li>
            <Link>프로모션에 참여시 1,000<span className="match_text">포인트</span>를 지급해 드립니다.</Link>
            <span className="c_gray">게시판 관리 &gt; 이벤트/뉴스 관리 &gt; EVENT</span>
          </li>
          <li>
            <Link>데일리 발자국 챌린지 참여 후<span className="match_text">포인트</span>획득이 가능합니다. </Link>
            <span className="c_gray">게시판 관리 &gt; 이벤트/뉴스 관리 &gt; EVENT</span>
          </li>
          <li><button className="btn_more c_gray">검색 결과 전체보기</button></li>
        </ul>
      </div>
    </>
  )
}