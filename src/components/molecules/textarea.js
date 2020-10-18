import React from 'react';
import '../../css/styles.css';

const TextArea = (props) => {
    return(
        <div class="c-textarea">
            <label for="" class="c-textarea__label">{props.label}</label>
	        <textarea id="" rows="10" class="c-textarea__text" placeholder={props.placeholder}></textarea>
        </div>
    )
}

export default TextArea