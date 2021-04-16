import React, { Component } from 'react';
import { ContextData } from './Context';

class User extends Component {
    constructor(){
        super();
        this.data = "";
    }
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <ContextData.Consumer>
                    {
                        (data) => {
                            this.data = data.val
                        } 
                    }
                </ContextData.Consumer>
                <h3>{this.data}</h3>
            </>
        );
    }
}

export default User;