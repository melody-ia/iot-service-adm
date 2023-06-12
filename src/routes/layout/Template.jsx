import { Outlet } from "react-router-dom";
// component
import SideMenu from "../../routes/layout/SideMenu";
import Header from "../../routes/layout/Header";
import { useState } from "react";

export default function Templeate() {
  const [showSide, setShowSide] = useState(false);

  return (
    <>
      <SideMenu sideShow={showSide} sideClose={() => setShowSide(false)} />
      <div className="container">
        <Header sideOpen={() => setShowSide(true)} />
        <div className="content_container">
          <Outlet />
        </div>
      </div>
      {showSide ? <div className="dim" onClick={() => setShowSide(false)}></div> : ""}
    </>
  );
}
