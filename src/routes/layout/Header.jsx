import { useState } from "react";

export default function Header(props) {
  const { sideOpen } = props;
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="header container_item d-flex flex-ac flex-js">
      <button type="button" className="ham_btn" onClick={sideOpen}>
        <span></span>
      </button>
      <div className={showSearch ? "search_wrap show" : "search_wrap"}>
        <input type="text" placeholder="Search" />
      </div>
      <div className="menu_wrap d-flex flex-ac">
        <button type="button" className="menu_btn menu_btn_search" onClick={() => setShowSearch(!showSearch)} title="검색"></button>
        <button type="button" className="menu_btn menu_btn_logout" title="로그아웃"></button>
        {/* 알림 있을시 active 클래스 추가 */}
        <button type="button" className="menu_btn menu_btn_alarm" title="알림"></button>
        <p className="info_text">
          GREEN TALK <br /> <span>Admin</span>
        </p>
      </div>
    </header>
  );
}