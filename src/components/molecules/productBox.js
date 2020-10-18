import React from 'react';
import '../../css/styles.css';
import Button from './button';
import {NavLink} from 'react-router-dom'

const ProductBox = (props) => {
    return (
        <div className='productBox'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <NavLink exact to={props.link}><Button name='LEARN MORE' /></NavLink>
        </div>
    );
};

export default ProductBox;