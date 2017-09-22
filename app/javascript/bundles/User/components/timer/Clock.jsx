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

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showInput: true,
            seconds: 0
        };
        this.timer = 0;

        this.handleChange = this.handleChange.bind(this);
        this.toggleInputShow = this.toggleInputShow.bind(this);
    };

    handleChange(event) {
        event.preventDefault();
        //set input lower bound to 0
        if (event.target.value < 0) {
            event.target.value = 0;
        }
        this.setState({
            seconds: event.target.value * 60
        });

    }

    updater(dataToUpdate) {
        this.setState({
            seconds: dataToUpdate
        })
    }

    toggleInputShow() {
        this.setState({
            showInput: !this.state.showInput
        })
    }


    render () {
        let minutes = ' minutes';
        let timeInput;
        if (this.state.showInput && this.props.today) {
            timeInput = (
                <div className='clockBox'>
                    <input
                        style={style.clockDisplay}
                        className='component__field component__field--timer'
                        type='number'
                        value={this.state.value}
                        onChange={this.handleChange}>
                    </input>
                     {minutes}
                </div>)
        }
        else {
            timeInput = <div> </div>
        }
        return (
            <div>
                {timeInput}
                <Countdown
                    timeSubmit={this.props.timeSubmit}
                    timeUpdate={this.props.timeUpdate}
                    today={this.props.today}
                    time={this.props.time}
                    callback={this.toggleInputShow}
                    seconds={this.state.seconds}
                    logTime={60}
                    journal={this.props.journal}
                    selectedDay={this.props.selectedDay}
                />

            </div>
        )
    }
}

export default Clock;
