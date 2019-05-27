import React from "react";
 
import BookContainer from "./book-container";



let BookSection = props => {
  return (
  
    <section id="book-section">
      <div className="container">
        <div className="section-title">
          <h1>{props.title + " Books"}</h1>
        </div>
    <BookContainer books={props.books}/>
      </div>
    </section>
   
  );
};

export default BookSection;