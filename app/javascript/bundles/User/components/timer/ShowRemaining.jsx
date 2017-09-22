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
        let showRemaining;
            if (this.props.hours === 0) {
                    showRemaining = `${this.props.minutes}:${this.props.seconds}`
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

