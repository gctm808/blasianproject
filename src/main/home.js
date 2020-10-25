import React from 'react';
import LogoLink from '../components/molecules/logoLink';
import Nav from '../components/molecules/nav';
import Button from '../components/molecules/button';
import landing from '../images/landing2.jpg';
import About from './landing/about';
import Community from './landing/community';
import Media from './landing/media';
import '../css/styles.css';

const Home = () => {
    return (
        <div>
            <div style={{  backgroundImage: `url(${landing})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} className='landing'>
                <header className="c-header" role="banner">
                    <LogoLink img='whiteLogoResized.png' link=' ' />
                    <div className="c-header__controls">
                        <a id='navLink' href="/home" className="nav-toggle nav-toggle-menu icon-menu"><span className="is-vishidden">Menu</span></a>
                        <Nav />
                        <a href='www.google.com' target='_blank' rel='noopener noreferrer'><Button name='Get Involved'/></a>
                    </div>
                </header>
                <div className='l divider'>
                    <div className='headers'>
                        <h1 className='transitionTop'>INSPIRE.</h1>
                        <h1 className='transitionTop'>EMPOWER.</h1>
                        <h1 className='transitionTop'>RESTORE.</h1>
                        <div className='transitionBottom'><a href='www.google.com' target='_blank' rel='noopener noreferrer'><Button name='SEE OUR LATEST POST'/></a></div>
                    </div>
                </div>
            </div>
            <About />
            <Media />
            <Community />
        </div>
    );
};

export default Home;