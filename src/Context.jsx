import React, { useState } from 'react';
import { ContextData } from './contextAPI/Context';
import User from './contextAPI/User';

const Context = () => {

    const [val, setVal] = useState("No value");
    return (
        <>
            <ContextData.Provider value={val}>
                <User title="Context example component" />
                <button onClick={() => setVal({ val: "From context provider" })}>Change val</button>
            </ContextData.Provider>
        </>
    );
};

export default Context;