import React from "react";

const Navbar = () => {
  return (
    <nav className="home-nav">
      <ul>
        <li>
          <a href="/">
            <span className="home-icon">
              <i className="fa-solid fa-house-user"></i>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
