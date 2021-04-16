import React from 'react';

const HigherOrd = (Comp) => {
    class Common extends React.Component {
        state = {  
            hotshots: 0
        }
        
        handleClick = () => {
            this.setState({ hotshots: this.state.hotshots + 1 })
        }
        
        render() { 
            return (<Comp hotshots={this.state.hotshots} handleClick={this.handleClick} {...this.props} style={{ textDecorationLine: 'underline', cursor: 'pointer' }}/>);
        }
    }
     
    return Common;
};

export default HigherOrd;