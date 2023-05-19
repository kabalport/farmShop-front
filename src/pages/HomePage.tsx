// pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


interface Product {
    name: string;
    price: number;
    category: string;
}

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

            // API 응답을 상품 데이터 형식으로 변환
            const convertedProducts = response.data.map((post: any) => ({
                name: post.title,
                price: post.userId,
                category: post.body,
            }));

            setProducts(convertedProducts);
        };

        fetchPosts();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>상품</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>가격</TableCell>
                        <TableCell>카테고리</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.name}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.category}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};


export default HomePage;
