/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';
import {NavLink} from 'react-router-dom';

const FooterNav = () => {
    return (
        <nav className="c-footer-nav">
            <ul className="c-footer-nav__list">
                <li className="c-footer-nav__item c-footer-nav__link"><NavLink exact to='/about'>About</NavLink></li>
                <li className="c-footer-nav__item c-footer-nav__link"><NavLink exact to='/products'>Products</NavLink></li>
                <li className="c-footer-nav__item c-footer-nav__link"><NavLink exact to='/contact'>Contact</NavLink></li>
                <li className="c-footer-nav__item c-footer-nav__link"><NavLink exact to='/agents'>Agents</NavLink></li>
            </ul>
        </nav>
    );
};

export default FooterNav;