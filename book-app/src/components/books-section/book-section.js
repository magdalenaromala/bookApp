import React from "react";

import BookContainer from "./book-container";

let BookSection = props => {
  if (props.books.lenght === 0) {
    return (
      <section id="book-section">
        <div className="container">
          <div className="section-title">
            <h1>{"No books"}</h1>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="book-section">
        <div className="container">
          <div className="section-title">
            <h1>{props.title + " Books"}</h1>
          </div>
          <BookContainer books={props.books} />
        </div>
      </section>
    );
  }
};

export default BookSection;
