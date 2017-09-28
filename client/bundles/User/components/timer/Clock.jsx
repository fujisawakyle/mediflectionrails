import React, { Component } from 'react';
import Countdown from './Countdown';

const style = {

    // clockDisplay : {
    //     width: '55px',
    //     height: '30px',
    //     fontSize: '1.5em',
    //     color: '#4A90E2',
    //     textAlign: 'right',
    //     background: 'rgba(255,255,255,0.5)',
    // }
}

let timerDoneFlag = false;

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showInput: true,
            seconds: 60,
            value: 1
        };
        this.timer = 0;

    };

    handleChange = (event) => {
        event.preventDefault();
        //set input lower bound to 1
        if (event.target.value < 1) {
            event.target.value = 1;
        }
        this.setState({
            value: event.target.value,
            seconds: event.target.value * 60,
        });
    }
    timerDoneReset = () => {
        timerDoneFlag = false;
    }

    timerDone = () => {
        timerDoneFlag = true;
        //when timer is over, reset seconds to 0, not the input value
        this.setState({
            seconds: 0
        })
    }

    toggleInputShow = () => {
        this.setState({
            showInput: !this.state.showInput
        })
    }

    render () {
        let minutesInput = ' minute';
        if (this.state.value != 1) {
            minutesInput = ' minutes';
        }
        let minutesTracked = ' minute';
        if (this.props.time != 1) {
            minutesTracked = ' minutes'
        }
        let timeInput;
        if (this.state.showInput && this.props.today) {
            timeInput = (
                <div className='clockBox'>
                    <input
                        style={style.clockDisplay}
                        className='component component__field component__field--timer'
                        type='number'
                        value={this.state.value}
                        onChange={this.handleChange}>
                    </input>
                     {minutesInput}
                </div>)
        }
        else {
            timeInput = <div> </div>
        }
        return (
            <div>
                <h5 className="timer__text"> {this.props.time} {minutesTracked} </h5>
                {timeInput}
                <Countdown
                    timeVal={this.state.value}
                    timeSubmit={this.props.timeSubmit}
                    timeUpdate={this.props.timeUpdate}
                    today={this.props.today}
                    time={this.props.time}
                    toggleInputShow={this.toggleInputShow}
                    timerDone={this.timerDone}
                    timerDoneReset={this.timerDoneReset}
                    timerDoneFlag={timerDoneFlag}
                    seconds={this.state.seconds}
                    logTime={60}
                    journal={this.props.journal}
                    selectedDay={this.props.selectedDay}
                />
            </div>
        )
    }
}


