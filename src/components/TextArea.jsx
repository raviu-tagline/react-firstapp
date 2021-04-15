import React from 'react';

const TextArea = (props) => {
    console.log(props)
    return <textarea className="w-50" value={props.ansValue != '' ? props.ansValue : props.queVal} readOnly></textarea>
};

export default TextArea;