import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Timer from './components/Timer/Timer';
import BreakButton from './components/BreakButton/BreakButton';
import BreakTimer from './components/BreakTimer/BreakTimer';
import StartButton from './components/StartButton/StartButton';
import {padNum, countDown} from './helpers/index';

class App extends Component {
  state = {
    shortBreak: {
      minutes: 3,
      seconds: 0
    },
    longBreak: {
      minutes: 15,
      seconds: 0
    },
    time: {
      minutes: 25,
      seconds: 0
    },
    pause: true,
    whichBreak: 'short'
  }

  componentDidMount(){
    const timer = setInterval(() => {
      const {time,shortBreak,longBreak,whichBreak} = this.state;
      if (!this.state.pause){
        const obj = countDown(time);
        this.setState({
          time: {
            ...this.state.time,
            minutes: obj.minutes,
            seconds: obj.seconds
          }
        });
      }
      if (time.minutes === 0 && time.seconds === 0 && whichBreak === 'short'){
        if (!this.state.pause){
          const obj = countDown(shortBreak);
          this.setState({
            shortBreak: {
              ...this.state.shortBreak,
              minutes: obj.minutes,
              seconds: obj.seconds
            }
          });
        }
        if (shortBreak.minutes === 0 && shortBreak.seconds === 0){
          this.setState({
            whichBreak: 'long'
          });
          this.resetTimer();
        }
      }
      if (time.minutes === 0 && time.seconds === 0 && whichBreak === "long"){
        if (!this.state.pause){
          const obj = countDown(longBreak);
          this.setState({
            longBreak: {
              ...this.state.longBreak,
              minutes: obj.minutes,
              seconds: obj.seconds
            }
          });
        }
        if (longBreak.minutes === 0 && longBreak.seconds === 0){
          this.setState({
            whichBreak: 'short'
          });
          this.resetTimer();
        }
      }
      if (time.minutes+time.seconds+shortBreak.minutes+shortBreak.seconds+longBreak.minutes+longBreak.seconds === 0){
        this.resetDefault();
      }
    },1000);
    this.setState({timer});
  }

  componentWillUnmount(){
    clearInterval(this.state.timer);
  }

  setBreak = (num) => {
    if (num < 10) {
      this.setState({
        shortBreak: {
          ...this.state.shortBreak,
          minutes: num
        }
      });
    }
    else{
      this.setState({
        longBreak: {
          ...this.state.longBreak,
          minutes: num
        }
      });
    }
  }

  setStart = () => {
    this.setState({
      pause: !this.state.pause
    })
  }

  resetTimer = () => {
    this.setState({
      time: {
        minutes: 25,
        seconds: 0
      }
    });
  }

  resetDefault = () => {
    this.setState({
      shortBreak: {
        minutes: 3,
        seconds: 0
      },
      longBreak: {
        minutes: 15,
        seconds: 0
      },
      time: {
        minutes: 25,
        seconds: 0
      },
      pause: true,
      whichBreak: 'short'
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Timer className="mt-3">
          {`${padNum(this.state.time.minutes)}:${padNum(this.state.time.seconds)}`}
        </Timer>
        <div className="d-flex justify-content-center">
          <BreakTimer>{`Short Break Length: ${this.state.shortBreak.minutes}:${padNum(this.state.shortBreak.seconds)}`}</BreakTimer>
        </div>
        <div className="d-flex justify-content-center">
        <BreakTimer>{`Long Break Length: ${this.state.longBreak.minutes}:${padNum(this.state.longBreak.seconds)}`}</BreakTimer>
        </div>
        <div className="d-flex justify-content-center">
          <div className="mr-3">
            <BreakButton minutes={[3,4,5]} setBreak={this.setBreak}/>
          </div>
          <div>
            <BreakButton minutes={[15,20,25,30]} setBreak={this.setBreak}/>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <StartButton setStart={this.setStart}>
            {(!this.state.pause && 'Pause') || (this.state.pause && 'Start')}
          </StartButton>
        </div>
      </div>
    );
  }
}

export default App;
