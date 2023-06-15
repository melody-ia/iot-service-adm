import { Routes, Route } from "react-router-dom";
// css
import "react-datepicker/dist/react-datepicker.css";
import "./assets/scss/App.css";
// component
import Login from "./routes/login/Login";
import Templeate from "./routes/layout/Template";
import UserList from "./routes/user_mgmt/UserList";
import UserAdd from "./routes/user_mgmt/UserAdd";
import UserBasicInfo from "./routes/user_info/UserBasicInfo";
import UserPromoHis from "./routes/user_info/UserPromoHis";
import UserPromoHisDetail from "./routes/user_info/UserPromoHisDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Templeate />}>
        <Route path="UserList" element={<UserList />} />
        <Route path="UserList/add" element={<UserAdd />} />
        <Route path="UserBasicInfo/:id" element={<UserBasicInfo />} />
        <Route path="UserPromoHis/:id" element={<UserPromoHis />} />
        <Route path="UserPromoHis/:id/:id" element={<UserPromoHisDetail />} />
      </Route>
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
