import React, { useState } from "react";

function GiftWishlistToggle({ showWishlist, onToggleShowWishlist }) {
  const toggleContent = () => {
    onToggleShowWishlist();
  };

  return (
    <div className="p-4">
      <div className="mb-4 text-center">
        <button
          className={`mr-2 px-4 py-2 ${
            showWishlist
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => toggleContent()}
        >
          Gift Ideas
        </button>
        <button
          className={`px-4 py-2 ${
            !showWishlist
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
          onClick={() => toggleContent()}
        >
          Wishlist
        </button>
      </div>
    </div>
  );
}

export default GiftWishlistToggle;
