import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-blue-600 text-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-white">
          🛍️ ShopEZ
        </Link>
        <input
          type="text"
          placeholder="Search products..."
          className="w-1/3 px-4 py-1 rounded focus:outline-none text-black"
        />
        <div className="space-x-4 text-lg">
          <Link to="/products" className="hover:text-yellow-300">Products</Link>
          <Link to="/cart" className="hover:text-yellow-300">
            Cart <span className="bg-yellow-400 text-black px-2 py-0.5 rounded-full text-sm">{cartItems.length}</span>
          </Link>
          <Link to="/login" className="hover:text-yellow-300">Login</Link>
          <Link to="/register" className="hover:text-yellow-300">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
