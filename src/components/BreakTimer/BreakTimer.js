import React, {Component} from 'react';

class BreakTimer extends Component{
  render(){
    return(
      <div>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
}

export default BreakTimer;