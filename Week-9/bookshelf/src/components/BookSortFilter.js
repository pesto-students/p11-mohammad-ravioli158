import React from "react";

const BookSortFilter = ({
  searchTerm,
  setSearchTerm,
  sortingCriteria,
  setSortingCriteria,
}) => {
  const handleSortingChange = (event) => {
    setSortingCriteria(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search-term">Filter</label>
      <input
        name="search-term"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <label>Sort By</label>
      <select onChange={handleSortingChange}>
        <option value="Title">Title</option>
        <option value="Year">Year</option>
        <option value="Author">Author</option>
      </select>
    </div>
  );
};

export default BookSortFilter;
