/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';
import LogoLink from '../molecules/logoLink';
import Nav from '../molecules/nav';


const Header = () => {
    return (
        <div>
            <header className="c-header" role="banner">
                <LogoLink img='logo.png' link=' ' />
                <div className="c-header__controls">
                    <a id='navLink' href="#" className="nav-toggle nav-toggle-menu icon-menu"><span className="is-vishidden">Menu</span></a>
                    <Nav />
                </div>
            </header>
        </div>
    );
};

export default Header;