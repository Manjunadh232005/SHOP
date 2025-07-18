import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    localStorage.removeItem('cart');
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <p>This is a fake checkout page for ShopEZ demo.</p>
      <button
        onClick={handleCheckout}
        className="mt-4 w-full bg-purple-600 text-white py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
