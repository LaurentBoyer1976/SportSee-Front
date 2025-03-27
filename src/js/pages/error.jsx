import Error from "../components/error";

/**
 * @description Page d'erreur
 * @returns {JSX.Element} Page d'erreur
 */
const ErrorPage = () => {
  return (
    <div className="errorPage">
      <Error message="La page que vous recherchez est introuvable." />
    </div>
  );
};

export default ErrorPage;
