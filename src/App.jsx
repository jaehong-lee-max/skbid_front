import { react, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import SideBar from "./components/sideBar";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import CreateCampaign from "./pages/createCampaign";
import CampaignList from "./pages/campaignList";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!sessionStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, [location.pathname]);

  return (
    <div className="wrap">
      <SideBar />
      <div className="profile">
        <div className="profile_pic"></div>
        <b>홍길동 관리자</b>
        최고관리자
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/campaign_list" element={<CampaignList />} />
        <Route path="/create_campaign" element={<CreateCampaign />} />
      </Routes>
    </div>
  );
}

export default App;
