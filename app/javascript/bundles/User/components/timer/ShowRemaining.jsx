import React, { Component } from 'react';

const style = {
    showTime : {
    }
}

export default class ShowRemaining extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let seconds = this.props.seconds
        if (seconds === 0) {
            seconds = '00';
        }
        else if (seconds < 10) {
            seconds = '0' + seconds
        }

        let showRemaining;
            if (this.props.hours === 0) {
                    showRemaining = `${this.props.minutes}:${seconds}`
                }
            else {
                    showRemaining = `${this.props.hours}:${this.props.minutes}:${this.props.seconds}`
                }
        return (
            <div className="timer__remaining" style={style.showTime} >
                {showRemaining} <br />
            </div>
        )
    }
}

