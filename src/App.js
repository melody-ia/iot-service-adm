import { Routes, Route } from "react-router-dom";
// css
import "react-datepicker/dist/react-datepicker.css";
import "./assets/scss/App.css";
// component
import Login from "./routes/login/Login";
import Templeate from "./routes/layout/Template";
import UserList from "./routes/user_mgmt/UserList";
import UserAdd from "./routes/user_mgmt/UserAdd";
import DeletedUserList from "./routes/user_mgmt/DeletedUserList";
import UserBasicInfo from "./routes/user_info/UserBasicInfo";
import UserPromoHis from "./routes/user_info/UserPromoHis";
import UserPromoHisDetail from "./routes/user_info/UserPromoHisDetail";
import UserCalcHis from "./routes/user_info/UserCalcHis";
import UserRankHis from "./routes/user_info/UserRankHis";
import UserStempHis from "./routes/user_info/UserStempHis";
import UserPointHis from "./routes/user_info/UserPointHis";
import UserQnaHis from "./routes/user_info/UserQnaHis";
import UserQnaHisDetail from "./routes/user_info/UserQnaHisDetail";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Templeate />}>
        <Route path="UserList" element={<UserList />} />
        <Route path="UserList/add" element={<UserAdd />} />
        <Route path="DeletedUserList" element={<DeletedUserList />} />
        <Route path="UserBasicInfo/:id" element={<UserBasicInfo />} />
        <Route path="UserPromoHis/:id" element={<UserPromoHis />} />
        <Route path="UserPromoHis/:id/:id" element={<UserPromoHisDetail />} />
        {/* <Route path="UserPromoHisDetail" element={<UserPromoHisDetail />} /> */}
        <Route path="UserCalcHis/:id" element={<UserCalcHis />} />
        <Route path="UserRankHis/:id" element={<UserRankHis />} />
        <Route path="UserStempHis/:id" element={<UserStempHis />} />
        <Route path="UserPointHis/:id" element={<UserPointHis />} />
        <Route path="UserQnaHis/:id" element={<UserQnaHis />} />
        <Route path="UserQnaHis/:id/:id" element={<UserQnaHisDetail />} />
      </Route>
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
