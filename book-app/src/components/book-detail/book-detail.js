import React from "react"
import BookContainer from "./book-container";
import BookRewiev from "./book-review";

let BookDetail = (props)=>{
    return(
        <section id="book-detail">
        <div class="container">
          <BookContainer/>
    <BookRewiev/>
        </div>
      </section>
    )
}

export default BookDetail