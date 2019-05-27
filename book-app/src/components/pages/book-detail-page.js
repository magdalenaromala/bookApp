import React from "react"
import Header from "../header/header"
import Footer from '../footer/footer';

let BookDetailPage = (props) =>{
return(
  < div className="has-fixed-footer">
  <Header/>
 
    <section id="book-detail">
    <div class="container">
      <div class="book-container">
        <div class="book-img">
          <img src="http://via.placeholder.com/250x200/" alt=""/>
        </div>
        <div class="book-info">
          <div class="book-title">
            <h1>
              Book title
            </h1>
          </div>
          <div class="book-author">
            <h3>Book Author</h3>
          </div>
          <div class="book-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptatibus atque architecto. Eum, perferendis vel atque nam et dolorem ipsam autem ab illum quae vero deserunt assumenda voluptate eaque reiciendis!</p>
          </div>
        </div>
        <div class="book-review-container">
          <div class="book-stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>

          </div>
          <div class="book-review"><p>(11)</p></div>
        </div>
      </div>

    </div>
  </section>
  <Footer/>
</div>
)
}

export default BookDetailPage