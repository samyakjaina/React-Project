import React from "react";
import { NavLink } from "react-router-dom";
import UserProfile from "./../../user/UserProfile";
function Header() {
  return (
    <div className="header">
      <nav>

        <NavLink to="/healths" className="header-button">
          Careers
        </NavLink>

        <NavLink to="/about" className="header-button">
          Learn
        </NavLink>

        <UserProfile />
      </nav>
    </div>
  );
}

export default Header;