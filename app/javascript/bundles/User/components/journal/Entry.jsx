import React, { Component } from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {submitJournal} from '../actions/index';

/*make an API call and if the journal associated with this date is empty, then render
blank input field, if filled, display that in the input field.*/

const style = {
    input : {
        height : '17em',
        width: '19em',
        textAlign: 'top'
    }
}

export default class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entry: props.entry,
        }

    }
     componentWillReceiveProps(nextProps) {
        if (nextProps.entry !== this.props.entry) {
            this.setState({
                entry: nextProps.entry,
            })
        }
    }
    handleChange = (event) => {
        const value = event.target.value;

        this.setState({
                entry: value

        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.props.updateFlag) {
            console.log('this needs to be an update');
        }
        else {
        this.props.mediflectionSubmit({mediflection: {date: this.props.selectedDay, journal: this.state.entry}})
        }
    }
    render() {
        return (
        <div>
            <textarea
                placeholder="Today's meditation was:"
                autoComplete='off'
                value={this.state.entry}
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


// connect(mapStateToProps, matchDispatchToProps)(Entry);
