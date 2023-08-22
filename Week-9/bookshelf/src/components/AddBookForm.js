import React from "react";

const AddBookForm = ({ handleAddBook }) => {
  const currentYear = new Date().getFullYear();
  const onFormSubmit = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const year = event.target.year.value;

    handleAddBook({
      title,
      author,
      year,
    });
    // Reset the form
    event.target.reset();
  };

  return (
    <div className="bookformwrapper">
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
          <input type="submit" value="Add Book" />
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
