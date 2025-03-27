import React from "react";
import UserName from "./userName";
import useFetchUserInfo from "../../hooks/useFetchUserInfo";
import PropTypes from "prop-types";

const MainHeader = ({ userId }) => {
  const userInfo = useFetchUserInfo(userId);

  if (!userInfo) {
    return <div>Chargement des informations utilisateur...</div>;
  }

  return (
    <header>
      <div>
        <UserName data={userInfo.userInfo.firstName} />
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    </header>
  );
};
MainHeader.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default MainHeader;
