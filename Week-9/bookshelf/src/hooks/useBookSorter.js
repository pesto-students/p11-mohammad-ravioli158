import { useMemo, useState } from "react";

// Define a function that determines the sorting logic based on the selected criteria.
const sortLogic = (criteria) => {
  switch (criteria) {
    case "Title":
      return (a, b) => a.title.localeCompare(b.title); // Sort titles alphabetically
    case "Year":
      return (a, b) => a.year - b.year; // Sort years numerically
    case "Author":
      return (a, b) => a.author.localeCompare(b.author); // Sort authors alphabetically
    default:
      return (a, b) => 0; // Default comparison function
  }
};

// Custom hook to sort an array of books based on a selected criteria.
const useBookSorter = (books) => {
  // State to keep track of the currently selected sorting criteria.
  const [sortingCriteria, setSortingCriteria] = useState("");

  // Use the useMemo hook to compute the sortedBooks array only when dependencies change.
  const sortedBooks = useMemo(
    () => books.sort(sortLogic(sortingCriteria)), // Apply sorting logic to the books array
    [books, sortingCriteria] // Re-run when the books array or sorting criteria change
  );

  // Return the sorted books, the selected sorting criteria, and a function to update the criteria.
  return {
    sortedBooks,
    sortingCriteria,
    setSortingCriteria,
  };
};

export default useBookSorter;
