import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../css/styles.css';
import Landing from './landing';
import ScrollToTop from 'react-router-scroll-top';



const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Landing />
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default App;