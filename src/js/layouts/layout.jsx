import { Outlet, Navigate } from "react-router-dom";
import Header from "../../js/components/header.jsx";
import Aside from "../../js/components/aside.jsx";

/**
 * @description Vérifie si l'utilisateur est connecté
 * @returns {boolean} - Retourne `true` si l'utilisateur est connecté.
 */
const isAuthenticated = () => {
  return !!localStorage.getItem("user");
};

/**
 * @description Layout component
 * @returns {JSX.Element} Layout component
 */
const Layout = () => {
  // Redirige vers /login si l'utilisateur n'est pas authentifié
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <main className="mainContainer">
        <Aside />
        <Outlet />
      </main>      
    </>
  );
};

export default Layout;
