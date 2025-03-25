import React from "react";
import "./SubcriptionForm.css";

const SubscriptionForm = () => {
  return (
    <div className="subscription-container">
      {/* Left side image (optional) */}
      <div className="subscription-image">
        <img
          src="https://via.placeholder.com/400x300/eee/333?text=Your+Image+Here"
          alt="Subscribe"
        />
      </div>

      {/* Right side form */}
      <div className="subscription-form">
        <h2 className="subscription-title">ĐĂNG KÝ NHẬN TIN</h2>
        <input type="text" placeholder="Nhập họ và tên của bạn" />
        <input type="email" placeholder="Nhập email của bạn" />
        <input type="text" placeholder="Nhập số điện thoại của bạn" />
        <button className="subscription-button">Gửi</button>
      </div>
    </div>
  );
};

export default SubscriptionForm;
