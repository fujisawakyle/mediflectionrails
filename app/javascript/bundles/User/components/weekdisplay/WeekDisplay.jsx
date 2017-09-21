import React, { Component } from 'react';
import Graph from './Graph';

const style = {
  weekDisplay : {

  }
}

export default class WeekDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    return (
        <div style={style.weekDisplay}>
            <h3> This week's practice </h3>
            <Graph
              weekArrayVals={this.props.weekArrayVals}
              today={this.props.today}
            />
        </div>
    )
  }
}
