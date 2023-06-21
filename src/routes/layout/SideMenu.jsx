import { Link, useLocation } from "react-router-dom";
import logoImg from "../../assets/img/logo.svg";

export default function SideMenu(props) {
  const { sideOpen, sideClose, sideState } = props;
  const { pathname } = useLocation();

  const toggleClass = el => {
    const listBtn = document.querySelectorAll(".list_btn");

    listBtn.forEach(el => el.classList.remove("active"));
    el.target.classList.toggle("active");
  }

  return (
    <div
      className={sideState ? "side_menu wide" : "side_menu"}
      onMouseOver={sideOpen}
      onMouseLeave={sideClose}
    >
      <div className="inner">
        <Link to="/" className="logo" onClick={sideClose}>
          <img src={logoImg} alt="" />
        </Link>
        <div className="side_menu_list">
          <div className="btn_wrap user">
            <button type="button" className="list_btn" onClick={toggleClass}>회원관리</button>
            <ul className="sub_menu_list">
              <li className={pathname==="/UserList"? "list active" : "list"} onClick={sideClose}>
                <Link to="UserList">회원 리스트</Link>
              </li>
              <li className={pathname==="/DeletedUserList"? "list active" : "list"} onClick={sideClose}>
                <Link to="DeletedUserList">탈퇴/삭제 회원</Link>
              </li>
            </ul>
          </div>
          <div className="btn_wrap event">
            <button type="button" className="list_btn" onClick={toggleClass}>프로모션/배너/팝업관리</button>
            <ul className="sub_menu_list">
              <li className={pathname==="/ChallengeList"? "list active" : "list"} onClick={sideClose}>
                <Link to="ChallengeList">데일리 챌린지 관리</Link>
              </li>
              <li className={pathname==="/RankingSetting"? "list active" : "list"} onClick={sideClose}>
                <Link to="RankingSetting">탄소 중립 랭킹 관리</Link>
              </li>
              <li className={pathname==="/BannerRanking"? "list active" : "list"} onClick={sideClose}>
                <Link to="BannerRanking">공개 배너 순위 관리</Link>
              </li>
              <li className={pathname==="/BannerSetting"? "list active" : "list"} onClick={sideClose}>
                <Link to="BannerSetting">배너 관리</Link>
              </li>
              <li className={pathname==="/PopupSetting"? "list active" : "list"} onClick={sideClose}>
                <Link to="PopupSetting">팝업 관리</Link>
              </li>
            </ul>
          </div>
          <div className="btn_wrap calc" onClick={sideClose}>
            <Link to="CalculatorList" className="list_btn" onClick={toggleClass}>탄소발자국 계산내역 관리</Link>
          </div>
          <div className="btn_wrap point">
            <button type="button" className="list_btn" onClick={toggleClass}>도장/포인트 관리</button>
            <ul className="sub_menu_list">
              <li className={pathname==="/Stamp"? "list active" : "list"} onClick={sideClose}>
                <Link to="/Stamp">도장 관리</Link>
              </li>
              <li className={pathname==="/Point"? "list active" : "list"} onClick={sideClose}>
                <Link to="/Point">포인트 관리</Link>
              </li>
            </ul>
          </div>
          <div className="btn_wrap board">
            <button type="button" className="list_btn" onClick={toggleClass}>게시판 관리</button>
            <ul className="sub_menu_list">
              <li className={pathname==="/News"? "list active" : "list"} onClick={sideClose}>
                <Link to="/News">이벤트/뉴스관리</Link>
              </li>
              <li className={pathname==="/Tip"? "list active" : "list"} onClick={sideClose}>
                <Link to="/Tip">탄소중립TIP 자료실 관리</Link>
              </li>
              <li className={pathname==="/Faq"? "list active" : "list"} onClick={sideClose}>
                <Link to="/Faq">FAQ 관리</Link>
              </li>
              <li className={pathname==="/Qna"? "list active" : "list"} onClick={sideClose}>
                <Link to="/Qna">1:1문의 관리</Link>
              </li>
            </ul>
          </div>
          <div className="btn_wrap device">
            <button type="button" className="list_btn" onClick={toggleClass}>기기 관리</button>
            <ul className="sub_menu_list">
              <li className="list" onClick={sideClose}>
                <Link to="">기기 목록 관리</Link>
              </li>
              <li className={pathname==="/Product"? "list active" : "list"} onClick={sideClose}>
                <Link to="/Product">GL 추천제품 관리</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
