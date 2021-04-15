import React from 'react';
import Button from './Button';

const Row = (prop) => {
    return prop.text.map(vals => <Button text={vals.text} value={!isNaN(vals.text) ? parseInt(vals.text) : vals.text} 
    className="btn btn-secondary mx-2 p-3" onClick={vals.onClick} 
    disable={vals.disable}/>);
}

export default React.memo(Row);