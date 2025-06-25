import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img
        src={product.imageUrl || product.image}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <div className="price">${product.price}</div>
      <div className="description">{product.description}</div>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
