import React from "react";

export const Book = React.memo(
  ({ title, author, year }) => {
    return (
      <div className="book">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
      </div>
    );
  }
);
// React Pure Functional component, ensures that the component only re-renders when its props change
