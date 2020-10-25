/* eslint-disable jsx-a11y/anchor-is-valid */ /*<h2 className="c-block-media__headline">{media.headline}</h2>*/
import React from 'react';
import '../../css/styles.css';

const MediaBlock = (props) => {
    const media = {
        src: props.img,
        headline: props.headline
    };

    return (
        <div>
            <a href="#" className="c-block-media c-block-media--">
                <div className="c-block-media__media">
                    <img src={require(`../../images/${media.src}`)} alt='square' className="c-block-media__img" />
                   
                </div>
            </a>
        </div>
    );
};

export default MediaBlock;