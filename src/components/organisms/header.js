/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';
import LogoLink from '../molecules/logoLink';
import Nav from '../molecules/nav';
import Button from '../molecules/button';


const Header = () => {
    return (
        <div>
            <header className="c-header" role="banner">
                <LogoLink img='whiteLogoResized.png' link=' ' />
                <div className="c-header__controls">
                    <a id='navLink' href="#" className="nav-toggle nav-toggle-menu icon-menu"><span className="is-vishidden">Menu</span></a>
                    <Nav />
                </div>
                <a href='https://lifepipe.ipipeline.com/LTSearch.aspx?r=1490547670704388677&GAID=5229' target='_blank' rel='noopener noreferrer'><Button name='SEE OUR LATEST POST'/></a>
            </header>
        </div>
    );
};

export default Header;