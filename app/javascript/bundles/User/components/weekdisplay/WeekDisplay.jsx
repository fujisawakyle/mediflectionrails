import React, { Component } from 'react';
import Graph from './Graph';

const style = {
  weekDisplay : {
      backgroundColor: '#dcf',
      textAlign: 'center',
      border: '1px solid black',
      borderRadius: '10px',
      paddingBottom: '10px'
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
            <h3> This week's meditation </h3>
            <Graph dates={this.props.dates}/>
        </div>
    )
  }
}
