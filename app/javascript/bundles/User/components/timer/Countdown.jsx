import React, { Component } from 'react';
import ShowRemaining from './ShowRemaining'

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {},
      seconds: props.seconds,
      logTime: props.logTime,
      showTime: false,
      startToggle: true,
      showInput: props.input,
      timeTracked: 0
    };

    this.timer = 0;

  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  // This is what was missing to update this component when the props.seconds changes

  componentWillReceiveProps(nextProps) {
    if (nextProps.seconds !== this.props.seconds) {
      this.setState({
        seconds: nextProps.seconds,
        logTime: nextProps.logTime
      })
    }
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer =(e) => {
    this.props.callback();
    this.setState({
      showTime: !this.state.showTime,
      startToggle: !this.state.startToggle,
    })
    e.preventDefault();
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  resetTimer = (e) => {
    this.props.callback();
    clearInterval(this.timer);
    this.timer = 0;
    this.setState({
      showTime: !this.state.showTime,
      startToggle: !this.state.startToggle,
    })
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    let log = this.state.logTime - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      logTime: log,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }

    //log time every 1 minute
    if (log === 0) {

      //API call - add 1 min to today's time.
      this.setState({
        logTime: 60,
        timeTracked: this.state.timeTracked + 1
      })
      alert(this.state.timeTracked);
    }
  }

  render() {
    let timerDisplay;
    if (this.props.today) {
      if (this.state.startToggle) {
        timerDisplay = <button onClick={this.startTimer}>Start</button>
      }
      else {
        timerDisplay = <button onClick={this.resetTimer}>Reset</button>
      }
    } else {
      timerDisplay = <div> {this.props.duration} </div>
    }
    return(
      <div>
        {timerDisplay}
        {this.state.showTime &&
          <ShowRemaining
            hours={this.state.time.h}
            minutes={this.state.time.m}
            seconds={this.state.time.s}
            logTime={this.state.logTime}
          />}
      </div>
    );
  }
}

export default Countdown;
