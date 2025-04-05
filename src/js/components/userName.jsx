import React from "react";
import PropTypes from "prop-types";

/**
 * @description User name component
 * @param {Object} data - User name data
 * @returns {JSX.Element} User name component
 */
const UserName = ({ data = "utilisateur" }) => {
  return (
    <h1 className="userProfile__header--content-title">
      Bonjour <span className="firstname">{data || "utilisateur"}</span>
    </h1>
  );
};

UserName.propTypes = {
  data: PropTypes.string,
};

export default UserName;
