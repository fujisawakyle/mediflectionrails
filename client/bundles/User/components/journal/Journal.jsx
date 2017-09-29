import React, { Component } from 'react';
import Entry from './Entry';

const style = {
    journal : {
        color: 'white',
    }
}



export default class Journal extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.journal !== this.props.journal) {
        this.setState({
          journal: nextProps.journal,
        })
      }
    }

    render() {
        return (
        <div style={style.journal}>
            <h3>Reflection</h3>
            <Entry
                id={this.props.id}
                time={this.props.time}
                mediflectionUpdate={this.props.mediflectionUpdate}
                updateFlag={this.props.updateFlag}
                selectedDay={this.props.selectedDay}
                mediflectionSubmit={this.props.mediflectionSubmit}
                journal={this.props.journal}
                saveStatus={this.props.saveStatus}
                />

        </div>
    )
  }
}

