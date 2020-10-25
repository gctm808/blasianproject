import React from 'react';
import '../css/styles.css';
import Form from '../components/organisms/form';
import LogoLink from '../components/molecules/logoLink';
import Nav from '../components/molecules/nav';
import Button from '../components/molecules/button';

const Contact = () => {
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
                <h2>GET IN TOUCH</h2>
                <h4>contactdescription</h4><br />
                <div className='l--two-col'>
                    <div className='l-main border-right'>
                        <Form field1='Name' field2='Email' field3='Message' button='SUBMIT' />
                    </div>
                    <div className='l-sidebar'>
                        <p>Hours:</p>
                        <p>contacthours</p>
                        <p>Phone Number</p>
                        <p>##########</p>
                        <p>Email</p>
                        <p>emailaddress</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;