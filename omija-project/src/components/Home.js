// src/pages/Home.js
import React from 'react';
import 'css/Home.css';

function Home() {
  const handleSearch = () => {
    alert('도시 검색 로직 (추후 구현)');
  };

  return (
    <div className="home-container">
      {/* 큰 배너/지도 영역 */}
      <section className="banner">
        <div className="banner-overlay">
          <h1>오미자 - 지방 소도시를 여행해보세요!</h1>
          <div className="search-bar">
            <input type="text" placeholder="도시/지역명 검색" />
            <button onClick={handleSearch}>검색</button>
            <button onClick={() => alert('날짜/인원 옵션')}>+ 옵션</button>
          </div>
        </div>
      </section>

      {/* 추천 카테고리 */}
      <section className="categories">
        <h2>추천 카테고리</h2>
        <div className="category-grid">
          <div className="category-card">전통시장</div>
          <div className="category-card">숨은 맛집</div>
          <div className="category-card">지역 축제</div>
          <div className="category-card">핫플레이스</div>
          {/* 필요에 따라 반복 */}
        </div>
      </section>

      {/* 후기 섹션 (샘플) */}
      <section className="reviews">
        <h2>최근 여행 후기</h2>
        <div className="review-card">
          <p><strong>닉네임:</strong> 여행자1</p>
          <p>“맛집이 정말 많아요! 강추!”</p>
        </div>
        <div className="review-card">
          <p><strong>닉네임:</strong> 유저123</p>
          <p>“축제 분위기가 너무 좋았습니다.”</p>
        </div>
        {/* ... */}
      </section>
    </div>
  );
}

export default Home;
