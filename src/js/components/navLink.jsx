import React from "react";

/**
 * @description NavLink component
 * @param {Object} props - The props object
 * @param {string} props.text - The text to display
 * @param {string} props.icon - The icon to display
 * @returns {JSX.Element} NavLink component
 */

const NavLink = ({ text, icon }) => {
  return (
    <a className="navList__item--link" href="#">
      {icon ? <img src={icon} alt={text} /> : text}
    </a>
  );
};

export default NavLink;