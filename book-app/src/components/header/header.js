import React from "react";
import { NavLink, Link} from "react-router-dom";


let Header = props => {
  return (
    <header id="header">
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <i className="fas fa-book-open" />
          </Link>
          <ul className="categories">
            <li>
              <li>
                <NavLink  to="/book/category/HTML">HTML</NavLink>
              </li>
              <li>
                <NavLink to="/book/category/ CSS">CSS</NavLink>
              </li>
              <li>
                <NavLink to="/book/category/JS">Java Script</NavLink>
              </li>
              <li>
                <NavLink to="/book/category/React">React</NavLink>
              </li>
              <li>
                <NavLink to="/book/category/NodeJS">Node JS</NavLink>
              </li>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
