import React from "react";
import { authenticateUser } from "../services/authentificationService";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      userId: "",
      error: ""
    };
  }

  componentDidMount() {
    // Vide le localStorage et réinitialise l'état
    localStorage.clear();
    this.setState({
      firstName: "",
      userId: "",
      error: ""
    }, () => {
    });
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Prénom:</p>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.myChangeHandler}
            required
          />
          <p>ID utilisateur:</p>
          <input
            type="number"
            name="userId"
            value={userId}
            onChange={this.myChangeHandler}
            required
          />
          <button type="submit">Se connecter</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    );
  }
}

function LoginWithNavigate(props) {
  const navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
}
Login.propTypes = {
  onLogin: PropTypes.func,
  navigate: PropTypes.func.isRequired,
};

export default LoginWithNavigate;
