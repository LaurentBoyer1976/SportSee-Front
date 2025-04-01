import React from "react";
import { authenticateUser } from "../services/authentificationService";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import "../../styles/scss/components/login.scss"; // Import du fichier SCSS
import logo from "../../assets/logos/SportSeeLogo.svg"; // Import du logo

/**
 * @description Login component
 * @param {Object} props - The props object
 * @param {Function} props.onLogin - The onLogin function
 * @param {Function} props.navigate - The navigate function
 * @returns {JSX.Element} - Login component
 */
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      userId: "",
      error: "",
    };
  }

  componentDidMount() {
    // Vide le localStorage et réinitialise l'état
    localStorage.clear();
    this.setState(
      {
        firstName: "",
        userId: "",
        error: "",
      },
      () => {},
    );
  }

  myChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, userId } = this.state;

    try {
      const isAuthenticated = await authenticateUser(firstName, Number(userId));
      if (isAuthenticated) {
        localStorage.setItem("user", JSON.stringify({ firstName, userId })); // Stocke l'utilisateur connecté

        // Appeler onLogin pour synchroniser l'état dans AppRouter
        if (this.props.onLogin) {
          this.props.onLogin();
        }

        this.props.navigate("/"); // Redirige vers la page principale
      } else {
        this.setState({ error: "Prénom ou ID incorrect." });
      }
    } catch {
      this.setState({ error: "Une erreur est survenue. Veuillez réessayer." });
    }
  };

  render() {
    const { firstName, userId, error } = this.state;

    return (
      <div className="login">
        <img src={logo} alt="SportSee Logo" className="login__logo" />
        <form onSubmit={this.handleSubmit} className="login__form">
          <label htmlFor="firstName" className="login__label">Prénom:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={this.myChangeHandler}
            className="login__input"
            required
          />
          <label htmlFor="userId" className="login__label">ID utilisateur:</label>
          <input
            type="number"
            id="userId"
            name="userId"
            value={userId}
            onChange={this.myChangeHandler}
            className="login__input"
            required
          />
          <button type="submit" className="login__button">Se connecter</button>
          {error && <p className="login__error">{error}</p>}
        </form>
      </div>
    );
  }
}

/**
 * @description Login component with navigate
 * @param {Object} props - The props object
 * @param {Function} props.onLogin - The onLogin function
 * @returns {JSX.Element} - Login component with navigate
 */

function LoginWithNavigate(props) {
  const navigate = useNavigate();

  useEffect(() => {
    // Ajoute la classe "login-page" à l'élément #root
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.classList.add("login-page");
    }

    // Nettoie la classe lorsque le composant est démonté
    return () => {
      if (rootElement) {
        rootElement.classList.remove("login-page");
      }
    };
  }, []);

  return <Login {...props} navigate={navigate} />;
}
Login.propTypes = {
  onLogin: PropTypes.func,
  navigate: PropTypes.func.isRequired,
};

export default LoginWithNavigate;
