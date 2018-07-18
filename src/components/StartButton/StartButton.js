import React, {Component} from 'react';
import {Button} from 'reactstrap';

class StartButton extends Component{

  setStart = () => {
    this.props.setStart();
  }

  render(){
    return(
      <div style={{width: "350px"}}>
        <Button color="danger" size="lg" block onClick={this.setStart}>
          {this.props.children}
        </Button>
      </div>
    );
  }
}

export default StartButton;