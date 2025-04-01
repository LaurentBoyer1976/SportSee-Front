import NavBar from "./navbar.jsx";
import LegalMention from "./legalMention.jsx";
import "../../styles/scss/components/aside.scss"; // Mise à jour du chemin
/**
 * @description Aside component
 * @returns {JSX.Element} Aside component
 */
const Aside = () => {
  return (
    <aside className="aside">
      <NavBar isAside={true} /> {/* Affiche uniquement les icônes */}
      <LegalMention />
    </aside>
  );
};

export default Aside;
