import React from 'react';
import '../../css/styles.css';
import Button from './button';
import {NavLink} from 'react-router-dom';

const FigWithCaption = (props) => {
    const fig = {
        img: props.img,
        title: props.title,
        caption: props.caption
    };
 
    return (
        <figure className="c-figure">
            <div className="c-figure__media">
                <NavLink exact to={props.productLink}><img src={require(`../../images/${fig.img}`)} alt="Landscape" className="" /></NavLink>
            </div>
            <figcaption className="c-figure__caption"><span className='captionTitle'>{fig.title}</span><br /><br />{fig.caption}</figcaption><br />
            <NavLink exact to={props.productLink}><Button name='LEARN MORE' /></NavLink><br />
        </figure>
    );
};

export default FigWithCaption;