import React from "react";

// Functional component for adding a new book.
const AddBookForm = ({ handleAddBook }) => {
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
    handleAddBook({
      title,
      author,
      year,
      genre,
      description
    });

    // Reset the form after submission.
    event.target.reset();
  };

  return (
    <div className="bookformwrapper">
      {/* Book addition form */}
      <form className="bookform" onSubmit={onFormSubmit}>
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
        <div className="form-group">
          <input type="submit" value="Add Book" />
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
