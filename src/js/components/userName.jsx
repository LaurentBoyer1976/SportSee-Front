import React from "react";


/**
 * @description User name component
 * @param {Object} data - User name data
 * @returns {JSX.Element} User name component
 */
const UserName = ({data})=> { 
  return <h1>Bonjour, {data}!</h1>;
};

export default UserName;