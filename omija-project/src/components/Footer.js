// src/components/Footer.js
import React from 'react';
import 'css/Footer.css'; // 스타일 추가 가능

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#company">회사소개</a> | 
        <a href="#terms">이용약관</a> | 
        <a href="#privacy">개인정보처리방침</a> | 
        <a href="#contact">문의하기</a>
      </div>
      <small>© 2024 omija All Rights Reserved.</small>
    </footer>
  );
}

export default Footer;
