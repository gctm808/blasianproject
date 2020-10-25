import React from 'react';
import '../../css/styles.css';
import {NavLink} from 'react-router-dom';

const ImageWithTitle = (props) => {
    const fig = {
        img: props.img
    };
 
    return (
        <figure className="c-figure">
            <div className="c-figure__media">
                <NavLink exact to={props.productLink}><img src={require(`../../images/${fig.img}`)} alt="Landscape" className="" /></NavLink>
            </div>
        </figure>
    );
};

export default ImageWithTitle;