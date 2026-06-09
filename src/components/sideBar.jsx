import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <aside className="side_bar">
        <div className="lnb_logo"></div>
        <div className="lnb_scroll_wrap">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "one_depth_anc active"
                : "one_depth_anc"
            }
          >
            <div className="lnb_icon_01"></div>
            대시보드
          </Link>
          <div
            className={`mother ${activeMenu === "campaign" ? "active" : ""}`}
            onClick={() => toggleMenu("campaign")}
          >
            <div className="lnb_icon_02"></div>
            캠페인 관리
          </div>
          <div className="mother_wrap">
            <Link
              to="/campaign_list"
              className={location.pathname === "/campaign_list" ? "active" : ""}
            >
              캠페인 목록
            </Link>
            <Link
              to="/create_campaign"
              className={
                location.pathname === "/create_campaign" ? "active" : ""
              }
            >
              캠페인 생성
            </Link>
          </div>
          <div
            className={`mother ${activeMenu === "call" ? "active" : ""}`}
            onClick={() => toggleMenu("call")}
          >
            <div className="lnb_icon_03"></div>
            통화 로그
          </div>
          <div className="mother_wrap">
            <Link to="/">통화 목록</Link>
            <Link to="/">통화 상세</Link>
          </div>
          <div
            className={`mother ${activeMenu === "client" ? "active" : ""}`}
            onClick={() => toggleMenu("client")}
          >
            <div className="lnb_icon_04"></div>관심고객 관리
          </div>
          <div className="mother_wrap">
            <Link to="/">관심고객 목록</Link>
            <Link to="/">리드 관리</Link>
          </div>
          <div
            className={`mother ${activeMenu === "admins" ? "active" : ""}`}
            onClick={() => toggleMenu("admins")}
          >
            <div className="lnb_icon_05"></div>관리자 관리
          </div>
          <div className="mother_wrap">
            <Link to="/">관리자 목록</Link>
            <Link to="/">권한 관리</Link>
          </div>
          <div
            className={`mother ${activeMenu === "settings" ? "active" : ""}`}
            onClick={() => toggleMenu("settings")}
          >
            <div className="lnb_icon_06"></div>설정
          </div>
          <div className="mother_wrap">
            <Link to="/">스크립트 템플릿</Link>
            <Link to="/">발신 번호 관리</Link>
            <Link to="/">시스템 설정</Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
