import { Routes, Route } from "react-router-dom";
// css
import "react-datepicker/dist/react-datepicker.css";
import "./assets/scss/App.css";
// component
import Login from "./routes/login/Login";
import UserList from "./routes/user_mgmt/UserList";
import UserAdd from "./routes/user_mgmt/UserAdd";
import UserBasicInfo from "./routes/user_info/UserBasicInfo";
import Templeate from "./routes/layout/Template";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Templeate />}>
        <Route path="UserList" element={<UserList />} />
        <Route path="UserList/add" element={<UserAdd />} />
        <Route path="UserBasicInfo/:id" element={<UserBasicInfo />} />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Route>
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
