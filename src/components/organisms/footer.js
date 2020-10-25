import React from 'react';
import '../../css/styles.css';
import LogoLink from '../molecules/logoLink';
import FooterNav from '../molecules/footerNav';

const Footer = () => {
    return (
        <footer className="c-footer" role="contentinfo">
            <div className="l">
                <LogoLink img='whiteLogoResized.png' link='#' />
                <FooterNav />
                <p className="copyright">&copy; 2020 gmooreDev All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;