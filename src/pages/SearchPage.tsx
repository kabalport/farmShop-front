// pages/SearchPage.tsx
import React, { useState } from 'react';

interface Product {
    name: string;
    price: number;
    category: string;
}

const SearchPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('과일');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    // TODO: Implement search logic and update the products state

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="검색..." />
            <select value={category} onChange={handleCategoryChange}>
                <option value="과일">과일</option>
                <option value="채소">채소</option>
                <option value="가공식품">가공식품</option>
            </select>
            <table>
                <thead>
                <tr>
                    <th>상품 이름</th>
                    <th>가격</th>
                    <th>카테고리</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.price} 원</td>
                        <td>{product.category}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchPage;
