import React, {Component} from 'react';
import tomato from '../../img/tomato.png';
import './Timer.css';

class Timer extends Component{
  render(){
    return(
      <div>
        <div className="d-flex justify-content-center">
          <img className="img mr-3" src={tomato} alt="tomato"/>
          <h1>Pomodoro Timer</h1>
          <img className="img ml-3" src={tomato} alt="tomato"/>
        </div>
        <h1 className="display-1 mt-3 text-center" style={{fontSize: "13rem"}}>{this.props.children}</h1>
      </div>
    );
  }
}

export default Timer;