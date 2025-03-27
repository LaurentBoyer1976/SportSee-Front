import React from 'react';
import { authenticateUser } from '../services/authentificationService'; // Assurez-vous que ce fichier existe
import { useNavigate } from 'react-router-dom'; // Si vous utilisez React Router v5

/**
 * @description Login component
 * @returns {JSX.Element} Login component
 */
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            userId: '',
            error: ''
        };
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
                localStorage.setItem('user', JSON.stringify({ firstName, userId }));
                this.props.navigate('/'); // Redirige vers la page principale
            } else {
                this.setState({ error: 'Prénom ou ID incorrect.' });
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            this.setState({ error: 'Une erreur est survenue. Veuillez réessayer.' });
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

export default LoginWithNavigate;