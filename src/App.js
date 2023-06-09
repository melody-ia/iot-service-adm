import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// css
import "react-datepicker/dist/react-datepicker.css";
import "./assets/scss/App.css";
// component
import Login from "./routes/Login";
import SideMenu from "./routes/layout/SideMenu";
import Header from "./routes/layout/Header";
import Lnb from "./routes/layout/Lnb";
import CurrentBox from "./components/CurrentBox";
import UserList from "./routes/user/UserList";

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
