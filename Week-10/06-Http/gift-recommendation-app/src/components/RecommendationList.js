import GiftItem from "./GiftItem";

const RecommendationList = ({
  isLoading,
  recommendations,
  handleAddtoWishlist,
}) => {
  return (
    <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-sm mx-auto px-4 sm:px-6 lg:px-8  bg-white p-4">
      <ul className="  list-unstyled">
        {recommendations.map(({ name, description }, index) => (
          <GiftItem
            key={name}
            name={name}
            description={description}
            handleAddtoWishlist={handleAddtoWishlist}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
