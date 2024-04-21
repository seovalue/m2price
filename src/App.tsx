import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 form 제출 동작 방지
    if (searchTerm.trim() !== '') {
      // 검색어가 비어있지 않을 경우에만 검색 수행
        alert(`검색어: ${searchTerm}`);
      // 여기에 실제 검색 동작을 추가할 수 있습니다 (예: API 호출 등)
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>아파트 평당 시세</h1>
          <form onSubmit={handleSearchSubmit}>
            <input
                type="text"
                placeholder="아파트 이름을 입력하세요"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button type="submit">검색</button>
          </form>
        </header>
      </div>
  );
};

export default App;
