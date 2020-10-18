import React from 'react';
import '../css/styles.css';
import Header from '../components/organisms/header';
import Footer from '../components/organisms/footer';
import Home from './home';
import About from './about';
import Products from './products';
import Contact from './contact';
import Agents from './agents';
import Annuities from './products/annuities';
import Disabilities from './products/disabilities';
import Life from './products/life';
import Ltc from './products/ltc';
import Linked from './products/linked';
import Alert from '../components/molecules/alert';
import {Route} from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <Header />
            {/*Content Div*/}
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/agents' component={Agents} />
                <Route exact path='/products/annuities' component={Annuities} />
                <Route exact path='/products/disabilities' component={Disabilities} />
                <Route exact path='/products/life' component={Life} />
                <Route exact path='/products/ltc' component={Ltc} />
                <Route exact path='/products/linked' component={Linked} />
            <Footer />
        </div>
    );
};

export default Landing;