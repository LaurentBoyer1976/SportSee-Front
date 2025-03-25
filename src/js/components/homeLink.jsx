import React from "react";
import { Link } from "react-router-dom";
import home from "./../../assets/logos/SportSeeLogo.svg";

/**
 * @description HomeLink component
 * @param {void}
 * @returns {JSX.Element} HomeLink component
 */

const HomeLink = () => {
  return (
    <Link className="homeLinkLogo" to="/">
      {home}
    </Link>
  );
};

export default HomeLink;