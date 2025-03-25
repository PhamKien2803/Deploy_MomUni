import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-container">
        <div className="nav-logo">
          <Link to="/" className="logo-text">MomUni</Link>
        </div>

        <ul className="nav-links">
          <li className="dropdown">
            <Link to="/mang-thai">Mang Thai</Link>
            <ul className="dropdown-menu">
              <li><Link to="/mang-thai/dinh-duong">Dinh Dưỡng</Link></li>
              <li><Link to="/mang-thai/chuan-bi">Chuẩn Bị Sinh</Link></li>
              <li><Link to="/mang-thai/meo-hay">Mẹo Hay</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/sau-sinh">Sau Sinh</Link>
            <ul className="dropdown-menu">
              <li><Link to="/sau-sinh/cham-me">Chăm Sóc Mẹ</Link></li>
              <li><Link to="/sau-sinh/cham-be">Chăm Sóc Bé</Link></li>
              <li><Link to="/sau-sinh/giam-can">Giảm Cân</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/dinh-duong">Dinh Dưỡng</Link>
            <ul className="dropdown-menu">
              <li><Link to="/dinh-duong/cho-me">Dinh Dưỡng Mẹ</Link></li>
              <li><Link to="/dinh-duong/cho-be">Dinh Dưỡng Bé</Link></li>
              <li><Link to="/dinh-duong/thuc-don">Thực Đơn</Link></li>
            </ul>
          </li>

          <li className="dropdown">
            <Link to="/cham-con">Chăm Con</Link>
            <ul className="dropdown-menu">
              <li><Link to="/cham-con/giac-ngu">Giấc Ngủ</Link></li>
              <li><Link to="/cham-con/vui-choi">Vui Chơi</Link></li>
              <li><Link to="/cham-con/suc-khoe">Sức Khỏe</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/me-va-be">Mẹ và Bé</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/me-be/ba-bau">Bà bầu</Link>
              </li>
              <li>
                <Link to="/me-be/cham-con">Chăm con</Link>
              </li>
              <li>
                <Link to="/me-be/dinh-duong-cho-be">Dinh dưỡng cho bé</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="nav-search">
          <input type="text" placeholder="Tìm kiếm..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
