import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logoImg from "../../assets/img/logo.svg";
import iconPoint from "../../assets/img/icon/menu_point.svg";
import iconUser from "../../assets/img/icon/menu_user.svg";
import iconEvent from "../../assets/img/icon/menu_event.svg";
import iconDevice from "../../assets/img/icon/menu_device.svg";
import iconCalc from "../../assets/img/icon/menu_calc.svg";
import iconBoard from "../../assets/img/icon/menu_board.svg";

export default function SideMenu(props) {
  const { sideShow, sideClose } = props;
  const [sideWide, setSideWide] = useState(false);
  const { pathname } = useLocation();

  return (
    <div
      className={sideWide || sideShow ? "side_menu wide" : "side_menu"}
      onMouseOver={() => setSideWide(true)}
      onMouseLeave={() => setSideWide(false)}
    >
      <div className="inner">
        <Link to="/" className="logo" onClick={sideClose}>
          <img src={logoImg} alt="" />
        </Link>
        <div className="side_menu_list">
          <div className="btn_wrap user">
            <button type="button" className="list_btn">
              <img src={iconUser} alt="" className="list_btn_icon" />
              <span className="list_btn_text">회원관리</span>
            </button>
            <ul className="sub_menu_list">
              <li className={pathname==="/UserList"? "list active" : "list"} onClick={sideClose}>
                <Link to="UserList">회원 리스트</Link>
              </li>
              <li className={pathname==="/DeletedUserList"? "list active" : "list"}>
                <Link to="DeletedUserList">탈퇴/삭제 회원</Link>
              </li>
            </ul>
          </div>
          <div className="btn_wrap event">
            <button type="button" className="list_btn">
              <img src={iconEvent} alt="" className="list_btn_icon" />
              <span className="list_btn_text">프로모션/배너/팝업관리</span>
            </button>
            <ul className="sub_menu_list">
              <li className="list">
                <Link to="">데일리 챌린지 관리</Link>
              </li>
              <li className="list">
                <Link to="">탄소 중립 랭킹 관리</Link>
              </li>
              <li className="list">
                <Link to="">공개 배너 순위 관리</Link>
              </li>
              <li className="list">
                <Link to="">배너 관리</Link>
              </li>
              <li className="list">
                <Link to="">팝업 관리</Link>
              </li>
            </ul>
          </div>
          <div className="btn_wrap calc">
            <Link to="" className="list_btn">
              <img src={iconCalc} alt="" className="list_btn_icon" />
              <span className="list_btn_text">탄소발자국 계산내역 관리</span>
            </Link>
          </div>
          <div className="btn_wrap point">
            <button type="button" className="list_btn">
              <img src={iconPoint} alt="" className="list_btn_icon" />
              <span className="list_btn_text">도장/포인트 관리</span>
            </button>
            <ul className="sub_menu_list">
              <li className="list">
                <Link to="">도장 관리</Link>
              </li>
              <li className="list">
                <Link to="">포인트 관리</Link>
              </li>
            </ul>
          </div>
          <div className="btn_wrap board">
            <button type="button" className="list_btn">
              <img src={iconBoard} alt="" className="list_btn_icon" />
              <span className="list_btn_text">게시판 관리</span>
            </button>
            <ul className="sub_menu_list">
              <li className="list">
                <Link to="">이벤트/뉴스관리</Link>
              </li>
              <li className="list">
                <Link to="">탄소중립TIP 자료실 관리</Link>
              </li>
              <li className="list">
                <Link to="">FAQ 관리</Link>
              </li>
              <li className="list">
                <Link to="">1:1문의 관리</Link>
              </li>
            </ul>
          </div>
          <div className="btn_wrap device">
            <button type="button" className="list_btn">
              <img src={iconDevice} alt="" className="list_btn_icon" />
              <span className="list_btn_text">기기관리</span>
            </button>
            <ul className="sub_menu_list">
              <li className="list">
                <Link to="">기기 목록 관리</Link>
              </li>
              <li className="list">
                <Link to="">GL 추천제품 관리</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
