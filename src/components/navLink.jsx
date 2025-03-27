import React from "react";
import { Link } from "react-router-dom";
import Error from "../components/error";

/**
 * @description Page d'erreur
 * @returns {JSX.Element} Page d'erreur
 */
const ErrorPage = () => {
  return (
    <div className="errorPage">
      <Error message="La page que vous recherchez est introuvable." />
    </div>
  );
};

const NavLink = ({ text, icon, isAside }) => {
  const handleLogout = () => localStorage.removeItem("user");

  const linkProps = {
    className: "navList__item--link",
    ...(text === "Déconnexion" && { onClick: handleLogout, to: "/login" }),
    ...(text === "Profil" && { to: "/" }),
  };

  return isAside ? (
    <a {...linkProps}>
      {icon && <img src={icon} alt={text} className="navList__item--icon" />}
    </a>
  ) : (
    <Link {...linkProps}>
      <span>{text}</span>
    </Link>
  );
};

export default ErrorPage;