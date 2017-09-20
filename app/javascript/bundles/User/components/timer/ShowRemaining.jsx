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
        return (
            <div className="timer__remaining" style={style.showTime} >
                {this.props.hours}:{this.props.minutes}:{this.props.seconds} <br />
                nextsave: {this.props.logTime}
            </div>
        )
    }
}

