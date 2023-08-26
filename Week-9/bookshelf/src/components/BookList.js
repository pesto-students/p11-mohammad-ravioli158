import React, { useState, useCallback, useEffect } from "react";
import BookForm from "./BookForm";
import BookDetail from "./BookDetail";
import "./BookList.css";
import useBookFilter from "../hooks/useBookFilter";
import useBookSorter from "../hooks/useBookSorter";
import BookSortFilter from "./BookSortFilter";



// Assiggnment 4: Functional Component for displaying list of books
export const BookList = () => {
  const [books, setBooks] = useState([]);
  const { filteredBooks, setSearchTerm, searchTerm } = useBookFilter(books);
  const { sortedBooks, sortingCriteria, setSortingCriteria } =
    useBookSorter(filteredBooks);

  useEffect(() => {
    // Intial load of books
    setBooks([
      {
        id: 1,
        title: "The History of Ancient Civilizations",
        author: "Historian A",
        year: 2005,
        genre: "History",
        description:
          "Dive into the fascinating journey of human civilizations from their earliest beginnings, exploring the cultures, achievements, and challenges that shaped our world.",
      },
      {
        id: 2,
        title: "World War II: A Comprehensive Overview",
        author: "Historian B",
        year: 2012,
        genre: "History",
        description:
          "Uncover the intricate details of World War II, from its complex origins to its far-reaching consequences, through meticulous research and analysis.",
      },
      {
        id: 3,
        title: "The Rise and Fall of Empires",
        author: "Historian C",
        year: 2018,
        genre: "History",
        description:
          "Trace the grandeur and decline of empires throughout history, examining the political, economic, and cultural factors that led to their ascent and downfall.",
      },
      {
        id: 4,
        title: "Exploring Archaeological Discoveries",
        author: "Archaeologist X",
        year: 2020,
        genre: "Archaeology",
        description:
          "Embark on a journey through time as Archaeologist X uncovers ancient artifacts, lost cities, and forgotten civilizations, shedding light on the mysteries of the past.",
      },
      {
        id: 5,
        title: "Historical Figures that Shaped Our World",
        author: "Historian D",
        year: 2015,
        genre: "History",
        description:
          "Explore the lives and impact of historical figures who have left an indelible mark on our world, shaping the course of history.",
      },
    ]);
  }, []);

  // Function to handle adding a new book to the list.
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  // Function to handle deleting a book from the list.
  const handleDeleteBook = (title) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.title !== title));
  };
  const handleSortCriteriaChange = (critera) => {};
  // So props to BookSortFilter do not change on every render
  const cahedSetSearchTerm = useCallback(
    (value) => {
      setSearchTerm(value);
    },
    [setSearchTerm]
  );

  return (
    <div className="App">
      {/* Display the form to add new books. */}
      <BookForm onAddBook={handleAddBook} />

      <section>
        <ul className="book-list">
          {/* Conditional rendering based on whether books are present or not. */}
          {books.length === 0 ? (
            <h3>No Books added in the list.</h3>
          ) : (
            <h3>Books</h3>
          )}

          {/* Filter And Sort Books */}
          <BookSortFilter
            onSortCriteriaChange={handleSortCriteriaChange}
            searchTerm={searchTerm}
            setSearchTerm={cahedSetSearchTerm}
            sortingCriteria={sortingCriteria}
            setSortingCriteria={setSortingCriteria}
          />
          {/* Map through the list of books and render each book item. */}
          {sortedBooks.map((book, index) => (
            <li key={index} className="book-list-item">
              {/* Display book details using BookDetail component. */}
              <BookDetail {...book} handleDeleteBook={handleDeleteBook} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

// // Class Component for displaying a list of books.
// export class BookList extends Component {
//   constructor(props) {
//     super(props);

//     // Initialize the component's state with an empty array for books.
//     this.state = {
//       books: [
//         {
//           title: "The Great Gatsby",
//           author: "F. Scott Fitzgerald",
//           year: 1925,
//           genre: "Classic",
//           description:
//             "A story of decadence, idealism, and excess during the Jazz Age.",
//         },
//         {
//           title: "To Kill a Mockingbird",
//           author: "Harper Lee",
//           year: 1960,
//           genre: "Novel",
//           description:
//             "A powerful exploration of racial injustice and moral growth.",
//         },
//         {
//           title: "Harry Potter and the Sorcerer's Stone",
//           author: "J.K. Rowling",
//           year: 1997,
//           genre: "Fantasy",
//           description:
//             "The start of a magical journey at Hogwarts School of Witchcraft and Wizardry.",
//         },
//       ],
//     };
//   }

//   render() {
//     // Function to handle adding a new book to the list.
//     const handleAddBook = (newBook) => {
//       this.setState((prevState) => ({
//         books: [...prevState.books, newBook], // Add the new book to the existing list of books.
//       }));
//     };

//     // Function to handle deleting a book from the list.
//     const handleDeleteBook = (title) => {
//       this.setState((prevState) => ({
//         books: prevState.books.filter((b) => b.title !== title), // Remove the selected book from the list.
//       }));
//     };

//     return (
//       <div className="booklist-wrapper">
//         <div className="add-form">
//           {/* Display the form to add new books. */}
//           <AddBookForm handleAddBook={handleAddBook} />
//         </div>

//         <ul className="book-list">
//           {/* Conditional rendering based on whether books are present or not. */}
//           {this.state.books.length === 0 ? (
//             <h3>No Books added in the list.</h3>
//           ) : (
//             <h3>Books</h3>
//           )}

//           {/* Map through the list of books and render each book item. */}
//           {this.state.books.map((book, index) => (
//             <li key={index} className="book-list-item">
//               {/* Display book details using BookDetail component. */}
//               <BookDetail {...book} handleDeleteBook={handleDeleteBook} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
