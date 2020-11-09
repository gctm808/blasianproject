import React from 'react';
import '../css/styles.css';
import LogoLink from '../components/molecules/logoLink';
import Nav from '../components/molecules/nav';
import Button from '../components/molecules/button';
import Footer from '../components/organisms/footer';
import Home from './home';
import About from './about';
import Media from './media';
import Contact from './contact';
import Community from './community';
import {Route} from 'react-router-dom';

const Landing = () => {
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
            {/*Content Div*/}
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/media' component={Media} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/community' component={Community} />
            <Footer />
        </div>
    );
};

export default Landing;