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
 * @param {void}
 * @returns {JSX.Element} NavBar component
 */

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navList">
        {navLabels.map((label, index) => (
          <li className="navList__item" key={index}>
            <NavLink text={label} icon={navIcons[index]} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;