import React from "react";
import UserName from "./userName";
import useFetchUserInfo from "../../hooks/useFetchUserInfo";
import PropTypes from "prop-types";
import "src/styles/components/mainHeader.scss";

/**
 * @description MainHeader component
 * @param {string} userId - User ID
 * @returns {JSX.Element} - MainHeader component
 */

const MainHeader = ({ userId }) => {
  const userInfo = useFetchUserInfo(userId);

  if (!userInfo) {
    return <div className="loader">Chargement des informations utilisateur...</div>;
  }

  return (
    <header className="userProfile__header">
      <div className="userProfile__header--content">
        <UserName data={userInfo.userInfo.firstName} />
        <h2 className="userProfile__header--content-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    </header>
  );
};
MainHeader.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default MainHeader;
