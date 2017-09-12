import PropTypes from 'prop-types';
import React from 'react';
import Calendar from './Calendar';
import Timer from './timer/Timer';
import Journal from './journal/Journal';

const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth();
const date = dateObj.getDate();
const todayDate = `${year},${month},${date}`;
let oneWeekAgo, dateAlter, formattedDate;

const weekArray = [];
// for (let i = 0; i < 7; i ++){
//   let oneWeekAgo = new Date()
//   oneWeekAgo.setDate(oneWeekAgo.getDate() - 6 + i);
//   let dateAlter = String(oneWeekAgo).split(' ').splice(1,3);
//   if (dateAlter[1][0] == 0) {
//     dateAlter[1] = dateAlter[1].substr(1);
//   }
//   dateAlter[0] = translateMonth(dateAlter[0]);
//   const formattedDate = `${dateAlter[2]},${dateAlter[0]},${dateAlter[1]}`;
//   weekArray[i] = formattedDate
// }

function translateMonth (month) {
  switch (month) {
      case 'Jan':
        month = '0';
        break;
      case 'Feb':
        month = '1';
        break;
      case 'Mar':
        month = '2';
        break;
      case 'Apr':
        month = '3';
        break;
      case 'May':
        month = '4';
        break;
      case 'Jun':
        month = '5';
        break;
      case 'Jul':
        month = '6';
        break;
      case 'Aug':
        month = '7';
        break;
      case 'Sep':
        month = '8';
        break;
      case 'Oct':
        month = '9';
        break;
      case 'Nov':
        month = '10';
        break;
      case 'Dec':
        month = '11';
        break;
    }
  return month;
}

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
      daysArray.push(new Date(i.date));
    }
    console.log(daysArray);

    // let arr = this.props.mediflection[0].journal

    const arr = this.props.mediflection[0].created_at.slice(0,10);

    this.state = {
      name: this.props.name,
      mediflection: arr,
      dateSelected: true,
      today: true,
      duration: null,
      entry: '',
      daysArray: daysArray,
      weekDates: weekArray
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
          <Timer />
          <Journal />
      </div>
    );
  }
}
