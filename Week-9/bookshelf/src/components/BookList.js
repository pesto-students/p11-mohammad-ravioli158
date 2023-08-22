import React, { Component } from "react";
import { Book } from "./Book";
import AddBookForm from "./AddBookForm";

// Functional Component implementation
// export const BookList = () => {
//   const books = [
//     { title: "Book 1", author: "Author 1", year: 2020 },
//     { title: "Book 2", author: "Author 2", year: 2018 },
//     { title: "Book 3", author: "Author 3", year: 2022 },
//   ];
//   return (
//     <ul className="book-list">
//       {books.map((book, index) => (
//         <li key={index}>
//           <Book title={book.title} author={book.author} year={book.year} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// Implemented BookList as Class Component
export class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "1984", author: "George Orwell", year: 1949 },
      ],
    };
  }
  render() {
    const handleAddBook = (newBook) => {
      this.setState((prevState) => ({
        books: [...prevState.books, newBook],
      }));
    };
    return (
      <div className="booklist-wrapper">
        <div className="add-form">
          <AddBookForm handleAddBook={handleAddBook} />
        </div>

        <ul className="book-list">
          <h3>Books</h3>
          {this.state.books.map((book, index) => (
            <li key={index}>
              <Book {...book} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
