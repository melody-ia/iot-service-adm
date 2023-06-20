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
import ChallengeList from "./routes/event/ChallengeList";
import ChallengeListDetail from "./routes/event/ChallengeListDetail";
import ChallengeAdd from "./routes/event/ChallengeAdd";
import RankingSetting from "./routes/event/RankingSetting";
import BannerRanking from "./routes/event/BannerRanking";
import BannerSetting from "./routes/event/BannerSetting";
import BannerAdd from "./routes/event/BannerAdd";
import PopupSetting from "./routes/event/PopupSetting";
import PopupAdd from "./routes/event/PopupAdd";
import CalculatorList from "./routes/calculator/CalculatorList";
import Stamp from "./routes/accumulated/Stamp";
import Point from "./routes/accumulated/Point";

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
        <Route path="ChallengeList" element={<ChallengeList />} />
        <Route path="ChallengeList/:id/:id" element={<ChallengeListDetail />} />
        <Route path="ChallengeList/add" element={<ChallengeAdd />} />
        <Route path="RankingSetting" element={<RankingSetting />} />
        <Route path="BannerRanking" element={<BannerRanking />} />
        <Route path="BannerSetting" element={<BannerSetting />} />
        <Route path="BannerSetting/add" element={<BannerAdd />} />
        <Route path="PopupSetting" element={<PopupSetting />} />
        <Route path="PopupSetting/add" element={<PopupAdd />} />
        <Route path="CalculatorList" element={<CalculatorList />} />
        <Route path="Stamp" element={<Stamp />} />
        <Route path="Point" element={<Point />} />
      </Route>
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
