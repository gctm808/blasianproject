import React from 'react';
import '../../css/styles.css';

const PageTitle = props => {
    return (
        <div className="c-page-header">
            <h1 className="c-page-header__title">{props.title}</h1>
        </div>
    );
};

export default PageTitle;