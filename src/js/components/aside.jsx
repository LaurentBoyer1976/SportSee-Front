import NavBar from "./navbar.jsx";

/**
 * @description Aside component
 * @returns {JSX.Element} Aside component
 */
const Aside = () => {
  return (
    <aside className="aside">
      <NavBar isAside={true} /> {/* Affiche uniquement les icônes */}
    </aside>
  );
};

export default Aside;
