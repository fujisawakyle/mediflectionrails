import React, { Component } from 'react';
import ShowRemaining from './ShowRemaining'

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: {},
      seconds: this.props.seconds,
      logTime: props.logTime,
      showTime: false,
      startToggle: true,
      showInput: props.input,
      time: this.props.time
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
    if (nextProps.time !== this.props.time) {
      this.setState({
        time: nextProps.time
      })
    }
    let timeLeftCalc = this.secondsToTime(nextProps.seconds);
    this.setState({
      timeLeft: timeLeftCalc
    });
  }

  startTimer =(e) => {
    e.preventDefault();
    if (this.props.timeVal == undefined) {
      console.log('error');
    }
    else {
      if (this.timer == 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
      this.props.toggleInputShow();
      this.setState({
        showTime: !this.state.showTime,
        startToggle: !this.state.startToggle,
      })

      document.getElementsByClassName('c-site__component--timer')[0].classList.add('timer__window--open');
    }
  }

  continueTimer =(e) => {
    this.setState({
      startToggle: !this.state.startToggle,
    })
    e.preventDefault();
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  pauseTimer = (e) => {
    clearInterval(this.timer);
    this.timer = 0;
    this.setState({
      startToggle: !this.state.startToggle,
    })
  }

  resetTimer = (e) => {
    this.props.toggleInputShow();
    clearInterval(this.timer);
    this.timer = 0;
    this.setState({
      showTime: !this.state.showTime,
    })
  }

  exitTimer = (e) => {
    document.getElementsByClassName('c-site__component--timer')[0].classList.remove('timer__window--open');
    document.getElementsByClassName('timer__exit')[0].classList.remove('timer__exit--active');
    this.props.toggleInputShow();
    clearInterval(this.timer);
    this.timer = 0;
    this.setState({
      showTime: !this.state.showTime,
    })
  }

  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    let log = this.state.logTime - 1;
    this.setState({
      timeLeft: this.secondsToTime(seconds),
      seconds: seconds,
      logTime: log,
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
      this.props.timerDone();
    }

    //log time every 1 minute
    if (log === 0) {

      this.setState({
        logTime: 60,
        time: this.state.time + 1
      })
      if(this.state.journal == null) {
        this.setState({
          journal: ''
        })
      }
      console.log('log === 0, this.state.time', this.state.time);
      if(this.state.time > 1) {
        console.log('call timeUpdate');
        this.props.timeUpdate({
          mediflection: {
            date: this.props.selectedDay,
            time: this.state.time,
            journal: this.state.journal
          }
        });
      } else {
        this.props.timeSubmit({
          mediflection: {
            date: this.props.selectedDay,
            time: this.state.time,
            journal: this.state.journal
          }
        });
      }
    }
  }

  render() {

    let timerDisplay;
    if (this.props.today) {
      if (!$('#timer').hasClass('timer__window--open')) {
        timerDisplay = <button className='button' onClick={this.startTimer}>Start</button>
        if(Number(this.props.time)>0) {
          timerDisplay = (
            <div>
              <button className='button' onClick={this.startTimer}>Start</button>
              <br/>
              <h5 className="timer__text"> {this.props.time} minutes </h5>
            </div>
          )
        }
      }
      else if (this.state.startToggle && !this.state.showTime) {
        timerDisplay = <button className='button' onClick={this.startTimer}>Start</button>
        if(Number(this.props.time)>0) {
          timerDisplay = (
            <div>
              <button className='button' onClick={this.startTimer}>Start</button>
              <button className='button timer__exit timer__exit--active' onClick={this.exitTimer}>X</button>
              <br/>
              <h5 className="timer__text"> {this.props.time} minutes </h5>
            </div>
          )
        }
      }
      else if(!this.state.startToggle && this.state.showTime) {
        timerDisplay = (
          <div>
            <button className='button' onClick={this.pauseTimer}>Pause</button>
            <button className='button timer__exit timer__exit--active' onClick={this.exitTimer}>X</button>
          </div>
        )
      }
      else if(this.state.startToggle && this.state.showTime) {
        timerDisplay = (
          <div>
          <button className='button' onClick={this.continueTimer}>Start</button>
          <button className='button' onClick={this.resetTimer}>Reset</button>
          <button className='button timer__exit timer__exit--active' onClick={this.exitTimer}>X</button>
          </div>
        )
        if(Number(this.props.time)>0) {
          timerDisplay = (
            <div>
              <button className='button' onClick={this.continueTimer}>Start</button>
              <button className='button' onClick={this.resetTimer}>Reset</button>
              <button className='button timer__exit timer__exit--active' onClick={this.exitTimer}>X</button>
              <br/>
              <h5 className="timer__text"> {this.props.time} minutes </h5>
            </div>
          )
        }
      }
    } else {

      timerDisplay = <div> <h5 className="timer__text"> {this.props.time} minutes </h5></div>
    }
    return(
      <div>
        {timerDisplay}
        {this.state.showTime &&
          <ShowRemaining
            hours={this.state.timeLeft.h}
            minutes={this.state.timeLeft.m}
            seconds={this.state.timeLeft.s}
            logTime={this.state.logTime}
          />}
      </div>
    );
  }
}

