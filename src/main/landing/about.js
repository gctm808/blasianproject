import React from 'react';
import '../../css/styles.css';
import Button from '../../components/molecules/button';
import {NavLink} from 'react-router-dom';

const About = () => {
    return (
        <div className='l aboutContainer'>
            <div className='l--two-col'>
                <div className='l-main'>
                    <h2>OUR COMPANY</h2>
                    <p>Founded in 1955 by Frederick K. Tseu, <span className='gohBold'>Guardian of Hawaii</span> has always been and will always be a family run operation. From granddaughters answering phones, to a daughter taking the reins, our company has always valued family and consider our agents and clients extended members of our family.</p>
                    <NavLink exact to='/about'><Button name='LEARN MORE' /></NavLink>
                </div>
                <div className='l-sidebar'>
                    <img src={require('../../images/family.jpg')} alt='family' />
                </div>
            </div>
        </div>
    );
};

export default About;