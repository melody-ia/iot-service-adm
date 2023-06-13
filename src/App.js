import { Routes, Route } from "react-router-dom";
// css
import "react-datepicker/dist/react-datepicker.css";
import "./assets/scss/App.css";
// component
import Login from "./routes/login/Login";
import UserList from "./routes/user_mgmt/UserList";
import UserAdd from "./routes/user_mgmt/UserAdd";
import UserBasicInfo from "./routes/user_info/UserBasicInfo";
import UserInfo from "./routes/user_mgmt/UserInfo";
import UserPromoHis from "./routes/user_mgmt/UserPromoHis";
import UserPromoHisDetail from "./routes/user_mgmt/UserPromoHisDetail";
import UserCalcHis from "./routes/user_info/UserCalcHis";
import Templeate from "./routes/layout/Template";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Templeate />}>
        <Route path="UserList" element={<UserList />} />
        <Route path="UserList/add" element={<UserAdd />} />
        <Route path="UserBasicInfo/:id" element={<UserBasicInfo />} />
        <Route path="UserInfo/:id" element={<UserInfo />} />
        <Route path="UserPromoHis/:id" element={<UserPromoHis />} />
        <Route path="UserPromoHisDetail" element={<UserPromoHisDetail />} />
        <Route path="UserCalcHis/:id" element={<UserCalcHis />} />
      </Route>
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
