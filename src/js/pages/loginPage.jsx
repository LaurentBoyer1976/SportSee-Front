import LoginWithNavigate from "../components/login";
import PropTypes from "prop-types";

/**
 * @description Login page
 * @param {object} props - Component props
 * @param {function} props.onLogin - Login function
 * @returns {JSX.Element} Login page
 */
const LoginPage = ({ onLogin }) => {
  return (
    <div className="loginPage">
      <LoginWithNavigate onLogin={onLogin} />
    </div>
  );
};
LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
