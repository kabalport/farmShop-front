import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // CSS 파일을 import 합니다.

const Header: React.FC = () => {
    return (
        <div>
            <header className="header">
                <h1></h1>
                <div className="header-links">
                    <Link to="/login">로그인</Link>
                    <Link to="/signup">회원가입</Link>
                    <Link to="/find">ID/PW 찾기</Link>
                </div>
            </header>
            <nav className="navbar">
                <Link to="/">로고</Link>
                <Link to="/prices">농수산물 가격 검색</Link>
                <Link to="/shopping">쇼핑</Link>
                <Link to="/forum">자유게시판</Link>
            </nav>
        </div>
    );
};

export default Header;
