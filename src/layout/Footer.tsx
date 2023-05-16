import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <p>연락처: 123-456-7890</p>
                <p>이메일: example@example.com</p>
            </div>
            <div className="footer-menu">
                <p>농수산물 가격 검색</p>
                <p>쇼핑</p>
                <p>자유게시판</p>
            </div>
        </footer>
    );
};

export default Footer;
