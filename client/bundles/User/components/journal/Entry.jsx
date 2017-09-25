import React, { Component } from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {submitJournal} from '../actions/index';

/*make an API call and if the journal associated with this date is empty, then render
blank input field, if filled, display that in the input field.*/

const style = {
    // input : {
        // height : '17em',
        // width: '20em',
        // textAlign: 'top',
        // color: '#4A90E2',
        // background: 'rgba(255,255,255,0.3)',
    // }
}

export default class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            journal: props.journal,
        }

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.journal !== this.props.journal) {
            this.setState({
                journal: nextProps.journal,
            })
        }
    }
    resetState = () => {
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
            this.props.mediflectionUpdate({
                mediflection: {
                    id: this.props.id,
                    date: this.props.selectedDay,
                    time: this.props.duration,
                    journal: this.state.journal
                }
            });
        }
        else {
            this.props.mediflectionSubmit({
                mediflection: {
                    date: this.props.selectedDay,
                    time: this.props.time,
                    journal: this.state.journal
                }
            });
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
                className='component__field component__field--entry'
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
