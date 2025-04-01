import NavBar from "./navbar.jsx";
import LegalMention from "./legalMention.jsx";
import "src/styles/components/aside.scss";
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
