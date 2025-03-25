import React from 'react';
import NavBar from './navbar.jsx';
import HomeLink from './homeLink.jsx';

/**
 * @description Header component
 * @param {void}
 * @returns {JSX.Element} Header component
 */


const Header = () => {
    return (
        <header className="header">
            <div className='header__container'>
                <HomeLink />
                <NavBar />
            </div>           
        </header>
    )
}

export default Header;