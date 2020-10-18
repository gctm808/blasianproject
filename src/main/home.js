import React from 'react';
import Button from '../components/molecules/button';
import landing from '../images/landing.jpg';
import Description from './landing/description';
import About from './landing/about';
import Products from './landing/products';
import '../css/styles.css';

const Home = () => {
    return (
        <div>
            <div style={{  backgroundImage: `url(${landing})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} className='landing'>
                <div className='l divider'>
                    <div className='headers'>
                        <h1 className='transitionTop'>YOUR CLIENTS COME FIRST</h1>
                        <h2 className='transitionLeft' style={{lineHeight: "1.5"}}>Guardian of Hawaii. <span style={{fontWeight: "lighter"}}>Helping you protect <br />what matters most to your clients.</span></h2>
                        <div className='transitionBottom'><a href='https://lifepipe.ipipeline.com/LTSearch.aspx?r=1490547670704388677&GAID=5229' target='_blank' rel='noopener noreferrer'><Button name='RUN MY QUOTE'/></a></div>
                    </div>
                </div>
            </div>
            <Description />
            <About />
            <Products />
        </div>
    );
};

export default Home;