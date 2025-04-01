import React from "react";
import PropTypes from "prop-types";

/**
 * @description User name component
 * @param {Object} data - User name data
 * @returns {JSX.Element} User name component
 */
const UserName = ({ data }) => {
  return <h1 className="userProfile__header--content-title">Bonjour <span className="firstname">{data}</span></h1>;
};

UserName.propTypes = {
  data: PropTypes.string.isRequired,
};

export default UserName;
