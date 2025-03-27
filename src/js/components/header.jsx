import React, { useState } from "react";
import NavBar from "./navbar.jsx";
import HomeLink from "./homeLink.jsx";

/**
 * @description Header component
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  const [user, setUser] = useState(null); // État pour l'utilisateur connecté

  const handleLogin = ({ userId, firstName }) => {
    setUser({ userId, firstName }); // Met à jour l'utilisateur connecté
    console.log(`Utilisateur connecté : ${firstName} (ID: ${userId})`);
  };

  const handleLogout = () => {
    setUser(null); // Réinitialise l'utilisateur connecté
    console.log("Utilisateur déconnecté");
  };

  return (
    <header className="header">
      <div className="header__container">
        <HomeLink />
        <NavBar
          isAside={false}
          onLogin={handleLogin}
          onLogout={handleLogout} // Passe la fonction de déconnexion
        />
      </div>
    </header>
  );
};

export default Header;