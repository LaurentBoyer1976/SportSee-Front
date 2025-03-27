import React from "react";
import { Link } from "react-router-dom";

/**
 * @description NavLink component
 * @param {Object} props - The props object
 * @param {string} props.text - The text to display
 * @param {string} props.icon - The icon to display
 * @param {boolean} props.isAside - Whether the link is used in the aside or not
 * @returns {JSX.Element} NavLink component
 */
const NavLink = ({ text, icon, isAside }) => {
  return (
    <a className="navList__item--link" href="#">
      {isAside ? (
        icon && <img src={icon} alt={text} className="navList__item--icon" />
      ) : (
        <span>{text}</span>
      )}
    </a>
  );
};

export default NavLink;