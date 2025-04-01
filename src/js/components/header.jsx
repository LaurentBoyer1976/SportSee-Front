import NavBar from "./navbar.jsx";
import HomeLink from "./homeLink.jsx";
import "../../styles/scss/components/header.scss";

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
