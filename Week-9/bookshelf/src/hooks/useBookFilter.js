import { useState, useMemo } from "react";

// Custom hook: useBookFilter
const useBookFilter = (books) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Memoized array of books that match the search term
  const filteredBooks = useMemo(() => {
    // Filter the books array based on the search term
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [books, searchTerm]);

  return {
    searchTerm,
    filteredBooks,
    setSearchTerm,
  };
};

export default useBookFilter;
