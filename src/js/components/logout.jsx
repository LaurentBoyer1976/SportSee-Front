import { Link } from "react-router-dom";

/**
 * @description Logout component
 * @returns {JSX.Element} - Logout component
 */

const Logout = () => {
  return(
    <Link to="/loginPage" className="logout"/>
  );

};

export default Logout;