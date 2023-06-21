import { Outlet } from "react-router-dom";
// component
import SideMenu from "../../routes/layout/SideMenu";
import Header from "../../routes/layout/Header";
import Dashboard from "../../routes/Dashboard";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Templeate() {
  const [showSide, setShowSide] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <SideMenu sideState={showSide} sideOpen={() => setShowSide(true)} sideClose={() => setShowSide(false)} />
      <div className={pathname === "/"? "container home" : "container"} >
        <Header sideOpen={() => setShowSide(true)} />
        {pathname === "/"? <Dashboard /> : ""} 
        <div className="content_container">
          <Outlet />
        </div>
      </div>
      {showSide ? <div className="dim" onClick={() => setShowSide(false)}></div> : ""}
    </>
  );
}
