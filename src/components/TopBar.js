import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <a href="#!" className="top-bar-link">
          Eva Deals
        </a>
        <a href="#!" className="top-bar-link">
          Quản lý bán hàng
        </a>
        <a href="#!" className="top-bar-link">
          Cộng đồng Eva
        </a>
      </div>
      <div className="top-bar-right">
        <span className="top-bar-link">Hộp thư</span>
        <span className="top-bar-link">Đăng xuất</span>
        <span className="top-bar-weather">Hà Nội: 26°C</span>
      </div>
    </div>
  );
};

export default TopBar;
