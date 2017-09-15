import React, { Component } from 'react'
import Clock from './Clock';
import Countdown from './Countdown';

const style = {
    timerBox : {
        background: 'rgba(255,255,255,0.3)',
        height: '200px',
        width: '250px',
        textAlign: 'center',
        margin: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }
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
