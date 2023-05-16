import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>

            <div>
                <Link to="/login">로그인</Link>
                <Link to="/signup">회원가입</Link>
                <Link to="/find">ID/PW 찾기</Link>
            </div>
            <h1>My App</h1>
        </header>
    );
};

export default Header;
