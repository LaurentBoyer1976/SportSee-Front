import React from "react";
import NavLink from "./navLink.jsx";
import biking from "./../../assets/icons/biking.svg";
import dumbbell from "./../../assets/icons/dumbell.svg";
import lotus from "./../../assets/icons/lotusposition.svg";
import swim from "./../../assets/icons/swim.svg";

const navLabels = ["Accueil", "Profil", "Réglage", "Communauté"];
const navIcons = [biking, dumbbell, lotus, swim];

/**
 * @description NavBar component
 * @param {Object} props - Props du composant
 * @param {"text"|"icon"} props.type - Type d'affichage : "text" pour les textes, "icon" pour les icônes
 * @returns {JSX.Element} NavBar component
 */
const NavBar = ({ type }) => {
  return (
    <nav className="navBar">
      <ul className="navList">
        {type === "text" &&
          navLabels.map((label, index) => (
            <li className="navList__item" key={index}>
              <NavLink text={label} />
            </li>
          ))}
        {type === "icon" &&
          navIcons.map((icon, index) => (
            <li className="navList__item" key={index}>
              <NavLink icon={icon} />
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavBar;