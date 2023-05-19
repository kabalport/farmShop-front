import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', p: 2, color: 'white', mt: 3 }}>
            <Typography variant="body1" align="center">
                연락처: 123-456-7890
            </Typography>
            <Typography variant="body1" align="center">
                이메일: example@example.com
            </Typography>
            <Box display="flex" justifyContent="center" mt={2}>
                <Link href="#" color="inherit" sx={{ mr: 2 }}>
                    농산물가격검색
                </Link>
                <Link href="#" color="inherit" sx={{ mr: 2 }}>
                    쇼핑
                </Link>
                <Link href="#" color="inherit">
                    자유게시판
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
