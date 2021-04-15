import React, {useState, useEffect, Fragment} from 'react';

const UseEffect = () => {

    const [count, setCount] = useState(0)

    useEffect(()=> {
        document.title = `My First App (${count})`
    });
    return (
        <Fragment>
            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>Incr</button>
            </div>
        </Fragment>
    );
};

export default UseEffect;