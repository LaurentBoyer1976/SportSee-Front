import NavLink from "./navLink.jsx";
import biking from "./../../assets/icons/biking.svg";
import PropTypes from "prop-types";
import dumbbell from "./../../assets/icons/dumbell.svg";
import lotus from "./../../assets/icons/lotusposition.svg";
import swim from "./../../assets/icons/swim.svg";
import "src/styles/components/navBar.scss";

// Réorganisez les icônes pour correspondre à l'ordre souhaité
const navLabels = ["Accueil", "Profil", "Réglage", "Communauté"];
const navIcons = [lotus, swim, biking, dumbbell]; // Ordre : lotus, swim, biking, dumbbell

/**
 * @description NavBar component
 * @param {boolean} isAside - Indique si le NavBar est utilisé dans l'aside
 * @returns {JSX.Element} NavBar component
 */
const NavBar = ({ isAside }) => {
  return (
    <nav className="navBar asideBar">
      <ul className="navList asideList">
        {navLabels.map((label, index) => (
          <li className="navList__item asideList__item" key={index}>
            <NavLink
              text={label}
              icon={navIcons[index]}
              isAside={isAside} // Passe la prop isAside
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
NavBar.propTypes = {
  isAside: PropTypes.bool,
};

export default NavBar;
