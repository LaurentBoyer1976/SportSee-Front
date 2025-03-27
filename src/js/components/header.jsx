import NavBar from "./navbar.jsx";
import HomeLink from "./homeLink.jsx";
import "../../styles/css/header.css"; // Import du style du header

/**
 * @description Header component
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <HomeLink />
        <NavBar isAside={false} />
      </div>
    </header>
  );
};

export default Header;
