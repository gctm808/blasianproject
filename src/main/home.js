import React from 'react';
import Button from '../components/molecules/button';
import landing from '../images/landing.jpg';
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