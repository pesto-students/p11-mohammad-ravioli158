import React from "react";

const BookDetail = ({ title, author, year }) => (
  <div className="book-detail">
    <h3>{title}</h3>
    <p>Author: {author}</p>
    <p>Year: {year}</p>
  </div>
);

export default BookDetail;
