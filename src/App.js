import { Routes, Route } from "react-router-dom";
// css
import "react-datepicker/dist/react-datepicker.css";
import "./assets/scss/App.css";
// component
import Login from "./routes/login/Login";
import UserList from "./routes/user/UserList";
import Templeate from "./routes/layout/Template";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Templeate />}>
        <Route path="UserList" element={<UserList />} />
        <Route />
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
