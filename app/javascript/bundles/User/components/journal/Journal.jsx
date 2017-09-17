import React, { Component } from 'react';
import Entry from './Entry';

const style = {
    journalBox : {

    }
}

class Journal extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleJournalSubmit = (entry) => {
        let entries = this.state.data;
        entry.id = Date.now();
        let newEntries = entries.concat([entry]);
        this.setState({ data: newEntries});
        axios.post(this.props.url, entry)
            .catch(err => {
                console.error(err);
                this.setState({ data: entries });
            })
    }

    render() {
        return (
        <div style={style.journalBox}>
            <h3>Journal</h3>
            <Entry id={this.props.id} duration={this.props.duration} mediflectionUpdate={this.props.mediflectionUpdate} updateFlag={this.props.updateFlag} selectedDay={this.props.selectedDay} mediflectionSubmit={this.props.mediflectionSubmit} onJournalSubmit={this.handleJournalSubmit} entry={this.props.entry}/>
        </div>
    )
  }
}

export default Journal;
