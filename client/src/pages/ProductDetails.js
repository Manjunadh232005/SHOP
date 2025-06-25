import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
    navigate('/cart');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full max-w-sm mx-auto mb-4" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-green-600 font-semibold text-lg">₹{product.price}</p>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <button onClick={addToCart} className="bg-blue-600 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
