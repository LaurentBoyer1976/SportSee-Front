import React from "react";
import NavLink from "./navLink.jsx";
import biking from "./../../assets/icons/biking.svg";
import dumbbell from "./../../assets/icons/dumbell.svg";
import lotus from "./../../assets/icons/lotusposition.svg";
import swim from "./../../assets/icons/swim.svg";

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
    <nav className="navBar">
      <ul className="navList">
        {navLabels.map((label, index) => (
          <li className="navList__item" key={index}>
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

export default NavBar;