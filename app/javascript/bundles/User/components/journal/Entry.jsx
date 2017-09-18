import React, { Component } from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {submitJournal} from '../actions/index';

/*make an API call and if the journal associated with this date is empty, then render
blank input field, if filled, display that in the input field.*/

const style = {
    input : {
        height : '17em',
        width: '20em',
        textAlign: 'top',
        color: '#4A90E2',
    }
}

export default class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            journal: props.journal,
        }

    }
    componentWillReceiveProps(nextProps) {
        // console.log('Entry CWRP nextProps');
        // console.log(nextProps);
        // console.log('Entry CWRP this.props.entry');
        // console.log(this.props.journal);
        // console.log('Entry CWRP this.state.entry');
        // console.log(this.state.journal);
        if (nextProps.journal !== this.props.journal) {
            this.setState({
                journal: nextProps.journal,
            })
        }
    }
    resetState = () => {
        // console.log('inside resetState');
        // console.log('this.state.journal');
        // console.log(this.state.journal);
        // console.log('this.props.journal');
        // console.log(this.props.journal);
        this.setState({journal: this.state.journal})
    }
    handleChange = (event) => {
        const value = event.target.value;

        this.setState({
                journal: value

        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.props.updateFlag) {
            console.log('this needs to be an update');
            this.props.mediflectionUpdate({mediflection: {id: this.props.id, date: this.props.selectedDay, time: this.props.duration, journal: this.state.journal}});
            console.log('after this');
        }
        else {
            this.props.mediflectionSubmit({mediflection: {date: this.props.selectedDay, time: this.props.time, journal: this.state.journal}});
            // console.log('before reset');
            // console.log(this.state.journal);
            //this.resetState();
            // console.log('after reset');
            // console.log(this.state.journal);
        }
    }
    render() {
        return (
        <div>
            <textarea
                placeholder="Today's meditation was:"
                autoComplete='off'
                value={this.state.journal}
                onChange={this.handleChange}
                style={style.input}
            />
            <button
                className='button'
                type='button'
                onClick={this.handleSubmit}>
                    Save
            </button>

        </div>
    )
  }
}

// function mapStateToProps(state) {
//     return {
//         entries: state.entries
//     };
// }

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({submitJournal: submitJournal}, dispatch)
// }


// connect(mapStateToProps, matchDispatchToProps)(journal);
