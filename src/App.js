import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./assets/scss/App.css";
import Login from "./routes/Login";
import SideMenu from "./components/layout/SideMenu";
import Header from "./components/layout/Header";
import Lnb from "./components/layout/Lnb";
import CurrentBox from "./components/CurrentBox";
import UserList from "./routes/UserList";

function App() {
  const [showSide, setShowSide] = useState(false);

  return (
    <>
      <SideMenu sideShow={showSide} sideClose={()=>setShowSide(false)} />
      <div className="container">
        <Header sideOpen={()=>setShowSide(true)}/>
        <Lnb />
        <CurrentBox />
        <div className="content_container">  
          <Routes>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/UserList" element={<UserList />}></Route>
          </Routes>
        </div>
      </div>
      {showSide? <div className="dim" onClick={()=>setShowSide(false)}></div> : ""}
    </>
  );
}

export default App;
