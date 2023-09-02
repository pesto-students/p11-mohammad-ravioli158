import React from "react";
import GiftItem from "./GiftItem";
const Wishlist = ({ wishlist, handleRemove }) => {
  return (
    <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-sm mx-auto px-4 sm:px-6 lg:px-8  bg-white p-4">
      <ul className="  list-unstyled">
        {wishlist.map(({ name, description }, index) => (
          <GiftItem
            key={name}
            name={name}
            description={description}
            isWishlist={true}
            handleAddtoWishlist={handleRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
