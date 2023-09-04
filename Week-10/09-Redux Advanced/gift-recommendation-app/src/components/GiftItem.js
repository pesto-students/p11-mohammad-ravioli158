import React from "react";
import {
  addedToWishlist,
  removedFromWishlist,
} from "../store/slices/wishlistSlice";
import { useDispatch } from "react-redux";
const GiftItem = ({ name, description, isWishlist = false }) => {
  const dispatch = useDispatch();
  const handleAddtoWishlist = () => {
    // handleAddtoWishlist(name, description);
    dispatch(addedToWishlist({ name, description }));
  };
  const handleRemoveFromWishlist = () => {
    dispatch(removedFromWishlist({ name }));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4 relative">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div>
        {isWishlist ? (
          <button className="text-xs" onClick={handleRemoveFromWishlist}>
            Remove from wishlist
          </button>
        ) : (
          <button className="text-xs" onClick={handleAddtoWishlist}>
            Add to wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export default GiftItem;
