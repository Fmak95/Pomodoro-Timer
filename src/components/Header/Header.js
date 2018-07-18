import React, {Component} from 'react';
import './Header.css'
import tomato from '../../img/tomato.png';
// export tomato from '../../img/tomato.png';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <div style={{display: "inline-block", marginLeft: "20px"}}>
          <h3 className="d-inline">Pomodoro Timer</h3>
          <img className="img" style={{marginRight: "20px", float: "right" }} src={tomato} alt="tomato"/>
        </div>
      </div>
    );
  }
}

export default Header;