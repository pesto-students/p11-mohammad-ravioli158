import React from "react";

const GiftItem = ({
  name,
  description,
  handleAddtoWishlist,
  isWishlist = false,
}) => {
  const onAddToWishlist = () => {
    handleAddtoWishlist(name, description);
  };
  
  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4 relative">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div>
        {isWishlist ? (
          <button className="text-xs" onClick={onAddToWishlist}>
            Remove from wishlist
          </button>
        ) : (
          <button className="text-xs" onClick={onAddToWishlist}>
            Add to wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export default GiftItem;
