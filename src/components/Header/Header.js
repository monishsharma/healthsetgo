import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__container__h1">HealthSetGo</h1>
        <div className="header__container__navlinks">
          <NavLink to = "/" exact activeClassName = "active">
            <p>Items</p>
          </NavLink>
          <NavLink to = "/categories" activeClassName = "active">
            <p>Categories</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
