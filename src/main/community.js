/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../css/styles.css';
import Button from '../components/molecules/button';
import LogoLink from '../components/molecules/logoLink';
import Nav from '../components/molecules/nav';

const Community = () => {
    return (
        <div>
            <header className="c-header" role="banner">
                <LogoLink img='whiteLogoResized.png' link=' ' />
                <div className="c-header__controls">
                    <a id='navLink' href="/home" className="nav-toggle nav-toggle-menu icon-menu"><span className="is-vishidden">Menu</span></a>
                    <Nav />
                    <a href='#' target='_blank' rel='noopener noreferrer'><Button name='Get Involved'/></a>
                </div>
            </header>
            <div className='l extraPadding'>
                <h2>Community</h2>
            </div>
        </div>
    );
};

export default Community;