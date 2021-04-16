import React from 'react';
import HigherOrd from './HigherOrd';

class Two extends React.Component {
    render() {
        return (
            <>
                <h3 onClick={this.props.handleClick} style={this.props.style}>
                    Click on {this.props.compName} {this.props.hotshots}
                </h3>
            </>
        );
    }
}

export default HigherOrd(Two);