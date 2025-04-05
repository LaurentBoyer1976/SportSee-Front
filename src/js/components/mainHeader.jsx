import React from "react";
import useFetchUserInfo from "../../hooks/useFetchUserInfo";
import PropTypes from "prop-types";
import "../../styles/scss/components/mainHeader.scss"; 

/**
 * @description MainHeader component
 * @param {string} userId - User ID
 * @returns {JSX.Element} - MainHeader component
 */

const MainHeader = ({ userId }) => {
  try {
    const userInfo = useFetchUserInfo(userId);

    if (!userInfo) {
      return <div className="loader">Chargement des informations utilisateur...</div>;
    }

    return (
      <header className="userProfile__header">
        <div className="userProfile__header--content">
          <h1 className="userProfile__header--content-title">
            Bonjour <span className="firstname">{userInfo.userInfo.firstName}</span>
          </h1>
          <h2 className="userProfile__header--content-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
      </header>
    );
  } catch (error) {
    if (process.env.NODE_ENV !== "test") {
      console.error("Erreur lors de la récupération des données utilisateur :", error.message);
    }
    return <div className="error">Une erreur est survenue lors du chargement des données.</div>;
  }
};

MainHeader.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default MainHeader;
