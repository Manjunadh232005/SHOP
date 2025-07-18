// src/pages/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products`);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '20px' }}>
        All Products
      </h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} onAddToCart={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
