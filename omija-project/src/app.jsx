// src/App.js
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
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
