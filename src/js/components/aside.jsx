import React from "react";
import NavBar from "./navbar.jsx";
import LegalMention from "./legalMention.jsx";

/**
 * @description Aside component
 * @returns {JSX.Element} Aside component
 */
const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__container">
        <NavBar type="icon" />
        <LegalMention />
      </div>
    </aside>
  );
};

export default Aside;