import React from "react";

let Header = props => {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <i className="fas fa-book-open" />
          </a>
          <ul class="categories">
            <li>
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">Java Script</a>
              </li>
              <li>
                <a href="#">React</a>
              </li>
              <li>
                <a href="#">Node JS</a>
              </li>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
