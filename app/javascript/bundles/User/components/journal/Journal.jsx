import React, { Component } from 'react';
import Entry from './Entry';

const style = {
    journalBox : {
        backgroundColor: '#adf',
        height: '400px',
        width: '200px',
        textAlign: 'center',
        margin: 'auto',
        border: '1px solid black',
        borderRadius: '10px'
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
            <Entry onJournalSubmit={this.handleJournalSubmit} entry={this.props.entry}/>
        </div>
    )
  }
}

export default Journal;
