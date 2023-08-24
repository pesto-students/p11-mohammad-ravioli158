import React from "react";
import Card from "./UI/Card";
import "./BookForm.css";
// Functional component for adding a new book.
const BookForm = ({ onAddBook }) => {
  const currentYear = new Date().getFullYear();

  // Handle form submission.
  const onFormSubmit = (event) => {
    event.preventDefault();

    // Extract form field values.
    const title = event.target.title.value;
    const author = event.target.author.value;
    const year = event.target.year.value;
    const genre = event.target.genre.value;
    const description = event.target.description.value;

    // Call the provided handleAddBook function to add the new book.
    onAddBook({
      title,
      author,
      year,
      genre,
      description,
    });

    // Reset the form after submission.
    event.target.reset();
  };

  return (
    <section className="book-form">
      <Card>
        {/* Book addition form */}
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input name="title" type="text" required={true} />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input name="author" type="text" required={true} />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              name="year"
              type="number"
              min="1000"
              max={currentYear}
              step="1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input name="genre" type="text" required={true} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" type="text" required={true} />
          </div>
          <div className="book-form__actions">
            <input type="submit" value="Add Book" />
          </div>
        </form>
      </Card>
    </section>
  );
};

export default BookForm;
