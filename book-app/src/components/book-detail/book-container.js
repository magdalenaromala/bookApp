import React from "react"
import BookInfo from "./book-info";

let BookContainer = (props)=>{
    return(
        
          <div class="book-container">
            <div class="book-img">
              <img src="http://via.placeholder.com/250x200/" alt=""/>
            </div>
           <BookInfo/>
            
          </div>

    )
}

export default BookContainer