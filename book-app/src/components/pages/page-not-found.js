import React from "react";
import Header from "../header/header"
import Footer from "../footer/footer"

let NotFound = (props) =>{
return(
<div className="has-fixed-footer">
  <Header/>
<section id="page-not-found">
      <div class="container">
      <h1>
        Page not found
      </h1>
      </div>
    </section>
    <Footer/>
</div>
)
}

export default NotFound