import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    {/* 여기에 로고를 넣을 수 있습니다. */}
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/">로고</Link>
                </Typography>
                <Button color="inherit" component={Link} to="/login">
                    로그인
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                    회원가입
                </Button>
                <Button color="inherit" component={Link} to="/find">
                    ID/PW 찾기
                </Button>
            </Toolbar>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/prices">농산물가격검색</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/shopping">쇼핑</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/freeboard">자유게시판</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
