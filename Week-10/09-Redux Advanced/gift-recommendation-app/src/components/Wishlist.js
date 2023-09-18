import React from "react";
import GiftItem from "./GiftItem";
import { useSelector } from "react-redux";
const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-sm mx-auto px-4 sm:px-6 lg:px-8  bg-white p-4">
      <ul className="  list-unstyled">
        {wishlist.map(({ name, description }, index) => (
          <GiftItem
            key={name}
            name={name}
            description={description}
            isWishlist={true}
          />
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
