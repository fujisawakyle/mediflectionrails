import React, { Component } from 'react';

const style = {
  journal: {
    color: 'white'
  }
};

export default class Journal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      journal: props.journal
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.journal !== this.props.journal) {
      this.setState({
        journal: nextProps.journal
      });
    }
  }

  resetState = () => {
    this.setState({ journal: this.state.journal });
  };

  handleChange = event => {
    const value = event.target.value;

    this.setState({
      journal: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.updateFlag) {
      this.props.mediflectionUpdate({
        mediflection: {
          id: this.props.id,
          date: this.props.selectedDay,
          time: this.props.duration,
          journal: this.state.journal
        }
      });
    } else {
      this.props.mediflectionSubmit({
        mediflection: {
          date: this.props.selectedDay,
          time: this.props.time,
          journal: this.state.journal
        }
      });
    }
  };

  render() {
    return (
      <div style={style.journal}>
        <h3>Reflection</h3>

        <div className="journalBox">
          <textarea
            placeholder="Today's meditation was:"
            autoComplete="off"
            value={this.state.journal}
            onChange={this.handleChange}
            className="component component__field component__field--entry"
          />
          <button
            className="button journal__button"
            type="button"
            onClick={this.handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
