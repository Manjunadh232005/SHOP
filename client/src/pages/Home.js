// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>🛍️ ShopEZ</h1>
        <p>Your one-stop online shopping destination 🛒</p>
        <Link to="/products">
          <button className="explore-btn">Explore Products</button>
        </Link>
      </section>

      {/* Search */}
      <section className="search-area">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
        />
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 ShopEZ. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
