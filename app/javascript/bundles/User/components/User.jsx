import PropTypes from 'prop-types';
import React from 'react';
import Calendar from './Calendar';
import Timer from './timer/Timer';
import Journal from './journal/Journal';

const daysArray = [];

export default class User extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */


  constructor(props) {
    super(props);

    const data = this.props.mediflection;
    console.log(data[0].date);
    for(let i of data) {
      daysArray.push(i.date);
    }

    // let arr = this.props.mediflection[0].journal

    const arr = this.props.mediflection[0].created_at.slice(0,10);

    this.state = {
      name: this.props.name,
      mediflection: arr,
      userData: this.props.mediflection,
      daysArray: daysArray,
    };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {

    return (
      <div>
        <h3>
          Happy meditating, {this.state.name}
        </h3>
        <h3>
          Time: {this.state.mediflection}
        </h3>
          <Calendar daysArray={this.state.daysArray} userData={this.state.mediflection}/>

      </div>
    );
  }
}
