import React from 'react';
import OutScreenRow from './OutScreenRow';

const OutScreen = (props) => {
    return (
        <div className="screen">
            <OutScreenRow value={props.question} />
            <OutScreenRow value={props.answer} />
        </div>
    )
}

export default OutScreen;
