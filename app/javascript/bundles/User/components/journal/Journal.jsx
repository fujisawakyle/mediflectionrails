import React, { Component } from 'react';
import Entry from './Entry';

const style = {
    journalBox : {
        background: 'rgba(255,255,255,0.3)',
        height: '350px',
        width: '250px',
        textAlign: 'center',
        margin: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
            <Entry updateFlag={this.props.updateFlag} selectedDay={this.props.selectedDay} mediflectionSubmit={this.props.mediflectionSubmit} onJournalSubmit={this.handleJournalSubmit} entry={this.props.entry}/>
        </div>
    )
  }
}

export default Journal;
