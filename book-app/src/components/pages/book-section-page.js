import React from "react";
import Header from "../header/header"
import Footer from "../footer/footer"
import BookSection from "../books-section/book-section"



let BookSectionPage = props => {
  let books=[1,2,3,4,5]
  return (
    <div  className="has-fixed-footer">
      <Header/>
  <BookSection title={props.categoryName} books={books}/>
    <Footer/>
    </div>
  );
};

BookSectionPage.defaultProps={
  categoryName:"All"
}

export default BookSectionPage;
