import React from 'react';
import '../css/styles.css';
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