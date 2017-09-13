import PropTypes from 'prop-types';
import React from 'react';
import Calendar from './Calendar';
import Timer from './timer/Timer';
import Journal from './journal/Journal';

const daysArrayNum = [];
const daysArrayText = [];

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
    for(let i of data) {
      daysArrayNum.push(i.date);
      daysArrayText.push(new Date(i.date));
    }

    // let arr = this.props.mediflection[0].journal

    const arr = this.props.mediflection[0].created_at.slice(0,10);

    this.state = {
      name: this.props.name,
      mediflection: arr,
      userData: data,
      daysArrayNum: daysArrayNum,
      daysArrayText: daysArrayText,
      items: [],
    };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  }

  render() {
    let items= this.state.items.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          </div>
      )
    });


    return (
      <div>
        {items}
        <h3>
          Happy meditating, {this.state.name}
        </h3>
          <Calendar daysArrayText={this.state.daysArrayText} daysArrayNum={this.state.daysArrayNum} userData={this.state.userData}/>

      </div>
    );
  }
}
