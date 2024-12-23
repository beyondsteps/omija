// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 공통 UI 컴포넌트
import Header from './components/Header';
import Footer from './components/Footer';

// 페이지 컴포넌트
import Home from './pages/Home';
import Board from './pages/Board';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        {/* 추후 다른 페이지도 추가 가능 (예: /login, /profile 등) */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
