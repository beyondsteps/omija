// src/pages/Board.js
import React from 'react';

function Board() {
  const handleWritePost = () => {
    alert('게시물 작성 페이지 이동 (추후 구현)');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>여행 일정 공유/게시판</h2>
      <button onClick={handleWritePost}>글쓰기</button>

      <div style={{ marginTop: '20px' }}>
        <div>
          <h4>[제목] 함께 여행 가실 분 구해요</h4>
          <p>작성자: 닉네임 | 2024-01-01</p>
          <hr />
        </div>
        <div>
          <h4>[제목] 이번 축제 가보신 분~?</h4>
          <p>작성자: user123 | 2024-01-02</p>
          <hr />
        </div>
        {/* ... */}
      </div>
    </div>
  );
}

export default Board;
