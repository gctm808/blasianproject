/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';

const MediaBlock = (props) => {
    const media = {
        src: props.img,
        headline: props.headline,
        excerpt: props.excerpt
    };

    return (
        <div>
            <a href="#" className="c-block-media c-block-media--">
                <div className="c-block-media__media">
                    <img src={require(`../../images/${media.src}`)} alt='square' className="c-block-media__img" />
                </div>
                <div className="c-block-media__body">
                    <h2 className="c-block-media__headline">{media.headline}</h2>
                    <p className="c-block-media__excerpt">{media.excerpt}</p>
                </div>
            </a>
        </div>
    );
};

export default MediaBlock;