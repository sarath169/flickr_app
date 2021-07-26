import React from "react";
import { Link, useHistory } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="blue">
        <div className="nav-wrapper container">
          <Link to="#" className="brand-logo">
            Logo
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/searchlocation">LocationSearch</Link>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
            <li>
              <Link to="/addlocation">AddLocation</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/searchlocation">LocationSearch</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
        <li>
          <Link to="/addlocation">AddLocation</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
