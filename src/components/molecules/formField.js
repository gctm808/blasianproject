import React from 'react';
import '../../css/styles.css';

const FormField = (props) => {
    return (
        <div className="c-field">
            <label for="field-id" className="c-field__label">{props.label}</label>
            <input id="field-id" type="text" placeholder={props.placeholder} value="" />
        </div>
    );
};

export default FormField;