/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';

const Blockquote = (props) => {
    return (
        <blockquote className="c-quote">
            <div className="c-quote__text">
                {props.quote}
            </div>
            <cite className="c-quote__cite"><a href='#'>{props.cite}</a></cite>
        </blockquote>
    );
};

export default Blockquote;