import React from 'react';
import FormField from '../molecules/formField';
import TextArea from '../molecules/textarea';
import Button from '../molecules/button';


const Form = props => {
    const buttonName = props.button;
    const field1 = props.field1;
    const field2 = props.field2;
    const field3 = props.field3;

    return (
        <form class="c-form c-form--stacked" method="post" action="#">
            <FormField label={field1} placeholder={field1} />
            <FormField label={field2} placeholder={field2} />
            <TextArea label={field3} placeholder={field3} />
            <Button name={buttonName} />
        </form>
    );
};

export default Form;