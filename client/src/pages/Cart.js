// src/pages/CartPage.jsx
import React from "react";

const CartPage = ({ cartItems, onQuantityChange, onRemove }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <div className="cart-item" key={item._id || item.id}>
          <img src={item.imageUrl || item.image} alt={item.name} />
          <div className="cart-item-details">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
          </div>
          <div className="cart-item-quantity">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => onQuantityChange(item, e.target.value)}
            />
          </div>
          <div className="cart-item-price">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
          <button onClick={() => onRemove(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
