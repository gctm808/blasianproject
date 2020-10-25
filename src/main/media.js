import React from 'react';
import '../css/styles.css';
import '../components/molecules/productBox';
import Button from '../components/molecules/button';
import LogoLink from '../components/molecules/logoLink';
import Nav from '../components/molecules/nav';

const Media = () => {
    return (
        <div>
            <header className="c-header" role="banner">
                <LogoLink img='whiteLogoResized.png' link=' ' />
                <div className="c-header__controls">
                    <a id='navLink' href="/home" className="nav-toggle nav-toggle-menu icon-menu"><span className="is-vishidden">Menu</span></a>
                    <Nav />
                    <a href='www.google.com' target='_blank' rel='noopener noreferrer'><Button name='Get Involved'/></a>
                </div>
            </header>
            <div className='l extraPadding'>
                <h2>Media</h2>
            </div>
        </div>
    );
};

export default Media;