import React from 'react';
import { useEffect, useState, useCallback } from 'react';

const Hook_examples = (props) => {
    const [number, setNumber] = useState({num1: 0, num2: 0});
    const [result, setResult] = useState(0);

    useEffect(()=> {
    }, [number, result]);

    const callBk = useCallback(() => {
        setResult(number.num1 + number.num2);
    }, [number]);

    return (
        <>
            <h1>{props.title}</h1>
            <h2>Result: {result}</h2>
            <input type="text" placeholder="Enter first number" onChange={(e) => setNumber({num1: +e.target.value, num2: number.num2})}/>
            <br/>
            <input type="text" placeholder="Enter second number" onChange={(e) => setNumber({num1: number.num1, num2: +e.target.value})}/>
            <br/>
            {/* <input type="button" onClick={callBk} value=""/> */}
            <button onClick={callBk}>Calculate</button>
        </>
    );
};

export default Hook_examples;