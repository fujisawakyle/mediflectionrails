import React, { Component } from 'react'
import Clock from './Clock';
import Countdown from './Countdown';

const style = {
    timer: {
        color: 'white',
    }
}


class Timer extends Component {
    constructor(props) {
        super(props);


    }
    render () {
        return (
            <div style={style.timer} className='timerBox'>
                <h3>Timer</h3>
                <Clock today={this.props.today} time={this.props.time}/>
            </div>
        )
    }
}

export default Timer;
