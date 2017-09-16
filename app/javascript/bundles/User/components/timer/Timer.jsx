import React, { Component } from 'react'
import Clock from './Clock';
import Countdown from './Countdown';

const style = {

}


class Timer extends Component {
    constructor(props) {
        super(props);


    }
    render () {
        return (
            <div style={style.timerBox} className='timerBox'>
                <h3>Timer</h3>
                <Clock today={this.props.today} duration={this.props.duration}/>
            </div>
        )
    }
}

export default Timer;
