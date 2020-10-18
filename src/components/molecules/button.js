import React from 'react';
import '../../css/styles.css';

const Button = props => {
    return(
        <button className='c-btn'>{props.name}</button>
    )
}

export default Button