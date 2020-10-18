/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';

const Overlay = () => {
    return (
        <div className="c-overlay">
            <p className="c-overlay__intro">Let's go on a hike and climb in elevation</p>
            <a href="#" className="c-btn c-btn--overlay">Find a Hike</a>
        </div>
    );
};

export default Overlay;