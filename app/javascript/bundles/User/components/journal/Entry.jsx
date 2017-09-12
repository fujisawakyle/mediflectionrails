import React, { Component } from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {submitJournal} from '../actions/index';

/*make an API call and if the journal associated with this date is empty, then render
blank input field, if filled, display that in the input field.*/

const style = {
    input : {
        height : '230px',
        width: '220px',
        textAlign: 'top'
    }
}

class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entry: props.entry
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
        let journalEntry = this.state.entry;
        alert('send info: ' + journalEntry);
        //set up an object so that we can send it.
        //store to server (API call)
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


export default Entry // connect(mapStateToProps, matchDispatchToProps)(Entry);
