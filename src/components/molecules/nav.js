/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav id="nav" className="c-primary-nav">
            <ul className="c-primary-nav__list">
                <li className="c-primary-nav__item c-primary-nav__link"><NavLink exact to='/about'>About</NavLink></li>
                <li className="c-primary-nav__item c-primary-nav__link"><NavLink exact to='/products'>Products</NavLink></li>
                <li className="c-primary-nav__item c-primary-nav__link"><NavLink exact to='/contact'>Contact</NavLink></li>
                <li className="c-primary-nav__item c-primary-nav__link"><NavLink exact to='/agents'>Agents</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;