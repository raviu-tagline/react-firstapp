import React from 'react';
import HigherOne from './higherExample/One';
import HigherTwo from './higherExample/Two';

const Higher = () => {
    return (
        <>
            <h1>HOC example component</h1>
            <br/>
            <HigherOne compName="First Component" />
            <HigherTwo compName="Second Component" />
        </>
    );
};

export default Higher;