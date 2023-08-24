import React, { useState, useEffect } from "react";
import BookForm from "./BookForm";
import BookDetail from "./BookDetail";
import './BookList.css'
// Assiggnment 4: Functional Component for displaying list of books
export const BookList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // fetchdata()

    return () => {
      // Cleanup
    };
  }, []);

  // Function to handle adding a new book to the list.
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  // Function to handle deleting a book from the list.
  const handleDeleteBook = (title) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.title !== title));
  };
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

          {/* Map through the list of books and render each book item. */}
          {books.map((book, index) => (
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
