import React from "react";
import NavBar from "./navbar.jsx";
import HomeLink from "./homeLink.jsx";

/**
 * @description Header component
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <HomeLink />
        <NavBar type="text" />
      </div>
    </header>
  );
};

export default Header;