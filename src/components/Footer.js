import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1: Logo & Giới thiệu */}
        <div className="footer-column">
          <h3>MomUni</h3>
          <p>Nền tảng chia sẻ kiến thức và kinh nghiệm dành cho mẹ và bé.</p>
        </div>

        {/* Cột 2: Liên kết nhanh */}
        <div className="footer-column">
          <h4>Liên kết nhanh</h4>
          <ul>
            <li><a href="/about">Giới thiệu</a></li>
            <li><a href="/">Chính sách bảo mật</a></li>
            <li><a href="/">Điều khoản sử dụng</a></li>
            <li><a href="/">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 3: Theo dõi chúng tôi */}
        <div className="footer-column">
          <h4>Theo dõi chúng tôi</h4>
          <div className="footer-social">
            <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Dòng bản quyền */}
      <p className="footer-bottom">© 2025 MomUni - All rights reserved.</p>
    </footer>
  );
};

export default Footer;
