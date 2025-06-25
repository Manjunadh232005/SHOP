import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between border-b pb-2">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Qty: {item.qty}</p>
                <p>Price: ₹{item.price * item.qty}</p>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="text-xl font-bold mt-4">Total: ₹{total}</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
