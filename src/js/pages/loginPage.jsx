import LoginWithNavigate from "../components/login";
import PropTypes from "prop-types";

/**
 * @description Login page
 * @returns {JSX.Element} Login page
 */
const LoginPage = ({ onLogin }) => {
  return (
    <div className="loginPage">
      <h1>Connexion</h1>
      <LoginWithNavigate onLogin={onLogin} />
    </div>
  );
};
LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;