import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../js/components/header.jsx';
import Aside from '../../js/components/aside.jsx';

/**
 * @description Layout component
 * @param {void}
 * @returns {JSX.Element} Layout component
 */

const Layout = () => {
    return (
        <>
            <Header />
            <main className="mainContainer">
                <Outlet />
            </main>
            <Aside/>
        </>
    );
};

export default Layout;