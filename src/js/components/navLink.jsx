import React, { useState } from "react";

/**
 * @description NavLink component
 * @param {Object} props - The props object
 * @param {string} props.text - The text to display
 * @param {string} props.icon - The icon to display
 * @param {boolean} props.isAside - Whether the link is used in the aside or not
 * @param {Function} props.onLogin - Callback function for login
 * @param {Function} props.onLogout - Callback function for logout
 * @returns {JSX.Element} NavLink component
 */
const NavLink = ({ text, icon, isAside, onLogin, onLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour la modal
  const [userId, setUserId] = useState(""); // État pour l'ID utilisateur
  const [firstName, setFirstName] = useState(""); // État pour le prénom utilisateur

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId && firstName) {
      onLogin({ userId, firstName }); // Passe l'ID et le prénom utilisateur au parent
      setIsModalOpen(false); // Ferme la modal après connexion
    } else {
      alert("Veuillez saisir votre prénom et votre ID utilisateur.");
    }
  };

  const handleLogout = () => {
    onLogout(); // Appelle la fonction de déconnexion
    setIsModalOpen(false); // Ferme la modal
  };

  return (
    <>
      {text === "Profil" && !isAside ? ( // Affiche le bouton uniquement si ce n'est pas dans l'aside
        <>
          <button
            className="navList__item--link"
            onClick={() => setIsModalOpen(true)}
          >
            <span>{text}</span> {/* Affiche uniquement le texte */}
          </button>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit} className="login-form">
                  <label htmlFor="firstName">Prénom :</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Entrez votre prénom"
                  />
                  <label htmlFor="userId">ID utilisateur :</label>
                  <input
                    type="text"
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Entrez votre ID utilisateur"
                  />
                  <button type="submit" className="submit-button">
                    Se connecter
                  </button>
                </form>
                <button
                  onClick={handleLogout}
                  className="logout-button"
                >
                  Déconnexion
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="close-button"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <a className="navList__item--link" href="#">
          {isAside ? (
            icon && <img src={icon} alt={text} className="navList__item--icon" />
          ) : (
            <span>{text}</span> /* Affiche uniquement le texte si ce n'est pas dans l'aside */
          )}
        </a>
      )}
    </>
  );
};

export default NavLink;