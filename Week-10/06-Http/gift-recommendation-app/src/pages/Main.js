import React, { useState } from "react";
import RecommendationForm from "../components/RecommendationForm";
import RecommendationList from "../components/RecommendationList";
import useApi from "../hooks/useApi";
import GiftWishlistToggle from "../components/GiftWishlistToggle";
import Wishlist from "../components/Wishlist";

function Main() {
  const [showWishlist, setShowWishlist] = useState(true);
  const {
    recommendations,
    wishlisted,
    loading,
    fetchRecommendations,
    addToWishlist,
    removeFromWishlist,
  } = useApi();

  const handleRecommendations = (age, gender, interests) => {
    // Fetch recommendations here
    fetchRecommendations(age, gender, interests);
  };
  const handleAddtoWishlist = (name, description) => {
    addToWishlist(name, description);
  };
  const handleWishlistShow = () => {
    setShowWishlist((prev) => !prev);
  };

  const handleRemoveFromWishlist = (name) => {
    removeFromWishlist(name);
  };

  return (
    <div className="main">
      <RecommendationForm
        isLoading={loading}
        onRecommendationSubmit={handleRecommendations}
      />

      <GiftWishlistToggle
        showWishlist={showWishlist}
        onToggleShowWishlist={handleWishlistShow}
      />
      <RecommendationList
        isLoading={loading}
        recommendations={recommendations}
      />
      {/* {showWishlist ? (
        <Wishlist
          wishlist={wishlisted}
          handleRemove={handleRemoveFromWishlist}
        />
      ) : (
        <RecommendationList
          isLoading={loading}
          recommendations={recommendations}
          handleAddtoWishlist={handleAddtoWishlist}
        />
      )} */}
    </div>
  );
}

export default Main;
