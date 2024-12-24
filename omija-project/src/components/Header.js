// src/components/Header.js
import React from 'react';
import '../css/Header.css'; // 스타일 시트 (필요하면 추가)

function Header() {
  // 햄버거 메뉴 열림/닫힘 제어는 useState 등을 활용
  const handleMenuClick = () => {
    alert('메뉴 클릭! 추후 사이드바나 드롭다운 구현');
  };

  const handleProfileClick = () => {
    alert('마이페이지 / 로그인 페이지로 이동');
  };

  return (
    <header className="header">
      <div className="header-left">
        <button onClick={handleMenuClick} className="hamburger-btn">☰</button>
        <span className="logo">omija</span>
      </div>
      <div className="header-right">
        <button onClick={handleProfileClick} className="profile-btn">My Page</button>
      </div>
    </header>
  );
}

export default Header;
