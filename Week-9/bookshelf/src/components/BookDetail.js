import React, { Component } from "react";
import {
  MdOutlineExpandLess,
  MdDeleteForever,
  MdOutlineExpandMore,
} from "react-icons/md";
// Class component to display book details with optional show/hide functionality.
class BookDetail extends Component {
  constructor(props) {
    super(props);

    // Initialize the component's state to manage details visibility.
    this.state = {
      showDetails: false,
    };
  }

  // Toggle the visibility of additional details.
  toggleDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };
  handleDeleteBook = () => {
    this.props.handleDeleteBook(this.props.title);
  };
  render() {
    // Destructure props and state for easier access.
    const { title, author, year, description, genre } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="book">
        {/* Display basic book information */}
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>

        {/* Button to toggle details visibility */}
        <div className="book-details-action">
          <div className="show-more" onClick={this.toggleDetails}>
            {showDetails ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
          </div>
          <MdDeleteForever onClick={this.handleDeleteBook} />
        </div>

        {/* Display additional details if showDetails is true */}
        {showDetails && (
          <div className="details">
            <p>Genre: {genre}</p>
            <p>Description: {description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default BookDetail;
