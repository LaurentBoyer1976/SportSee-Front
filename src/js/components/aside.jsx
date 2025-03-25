import React from "react";
import NavBar from "./navbar.jsx";
import LegalMention from "./legalMention.jsx";

/**
 * @description Aside component
 * @param {void}
 * @returns {JSX.Element} Aside component
 */

const Aside = () => {
    return (
        <aside className="aside">
            <div className="aside__container">
                <NavBar />
                <LegalMention />
            </div>
        </aside>
    )
};

export default Aside;