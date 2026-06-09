import { useState } from "react";

function Dashboard() {
  return (
    <div className="content_wrap">
      <h1>대시보드</h1>
      <h5>AI 아웃바운드 상담 시스템 운영 현황을 한눈에 확인하세요.</h5>
      <div
        className="grid"
        style={{ width: "calc( 25% - 14px )", height: "160px" }}
      ></div>
      <div
        className="grid"
        style={{ width: "calc( 25% - 14px )", height: "160px" }}
      ></div>
      <div
        className="grid"
        style={{ width: "calc( 25% - 14px )", height: "160px" }}
      ></div>
      <div
        className="grid"
        style={{ width: "calc( 25% - 14px )", height: "160px" }}
      ></div>

      <div
        className="grid"
        style={{ width: "calc( 34% - 14px )", height: "350px" }}
      ></div>
      <div
        className="grid"
        style={{ width: "calc( 32% - 14px )", height: "350px" }}
      ></div>
      <div
        className="grid"
        style={{ width: "calc( 34% - 14px )", height: "350px" }}
      ></div>

      <div
        className="grid"
        style={{ width: "calc( 50% - 14px )", height: "265px" }}
      ></div>
      <div
        className="grid"
        style={{ width: "calc( 50% - 14px )", height: "265px" }}
      ></div>
    </div>
  );
}

export default Dashboard;
