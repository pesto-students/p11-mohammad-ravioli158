import React, { useState } from "react";
import RecommendationForm from "../components/RecommendationForm";
import RecommendationList from "../components/RecommendationList";
import GiftWishlistToggle from "../components/GiftWishlistToggle";
import Wishlist from "../components/Wishlist";

function Main() {
  const [showWishlist, setShowWishlist] = useState(true);

  const handleWishlistShow = () => {
    setShowWishlist((prev) => !prev);
  };

  return (
    <div className="main">
      <RecommendationForm />

      <GiftWishlistToggle
        showWishlist={showWishlist}
        onToggleShowWishlist={handleWishlistShow}
      />

      {showWishlist ? <RecommendationList /> : <Wishlist />}
    </div>
  );
}

export default Main;
