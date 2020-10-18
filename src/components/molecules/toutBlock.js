/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';

const ToutBlock = (props) => {
    const tout = {
        link: props.link,
        img: props.img,
        headline: props.headline
    };

    return (
        <div>
            <a href={tout.link} className="c-block-tout">
                <img src={require(`../../images/${tout.img}`)} alt="Landscape" className="c-block-tout__img" />
                <h2 className="c-block-tout__headline">{tout.headline}</h2>
            </a>
        </div>
    );
};

export default ToutBlock;