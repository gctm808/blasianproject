import React from 'react';
import '../../css/styles.css';

const TextButton = (props) => {
    return(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={props.link} className='c-text-btn' target="_blank" rel='noopener noreferrer'>{props.name}</a>
    )
}

export default TextButton