import React from 'react';
import '../../css/styles.css';

const alert = (props) => {
    return (
        <div className={`alert ${props.alertType}`}>
            <a href={props.link}>{props.text}</a>
        </div>
    );
};

export default alert;