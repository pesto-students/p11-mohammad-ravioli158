import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">Price: ${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
