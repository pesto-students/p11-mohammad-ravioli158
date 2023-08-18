import React, { Component } from "react";
import { Book } from "./Book";

// Functional Component implementation
// export const BookList = () => {
//   const books = [
//     { title: "Book 1", author: "Author 1", year: 2020 },
//     { title: "Book 2", author: "Author 2", year: 2018 },
//     { title: "Book 3", author: "Author 3", year: 2022 },
//     // Add more books if you'd like
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
export  class BookList extends Component {
  render() {
    const books = [
      { title: "Book 1", author: "Author 1", year: 2020 },
      { title: "Book 2", author: "Author 2", year: 2018 },
      { title: "Book 3", author: "Author 3", year: 2022 },
      // Add more books if you'd like
    ];
    return (
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index}>
            <Book {...book}/>
          </li>
        ))}
      </ul>
    );
  }
}
