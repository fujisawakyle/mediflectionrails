import React, { Component } from 'react';
import Entry from './Entry';

const style = {
    journal : {
        color: 'white',
    }
}

class Journal extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
        <div style={style.journal}>
            <h3>Journal</h3>
            <Entry id={this.props.id} time={this.props.time} mediflectionUpdate={this.props.mediflectionUpdate} updateFlag={this.props.updateFlag} selectedDay={this.props.selectedDay} mediflectionSubmit={this.props.mediflectionSubmit} journal={this.props.journal}/>
        </div>
    )
  }
}

export default Journal;
