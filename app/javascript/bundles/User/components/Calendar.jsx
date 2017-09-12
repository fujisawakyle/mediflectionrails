// import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
// import Timer from './Timer';
// import Journal from './Journal';
// import WeekDisplay from './WeekDisplay';

// import PropTypes from 'prop-types';
import React from 'react';

const style = {
    calendar : {
      textAlign: 'center',
    },
    wrapper : {
      display: 'flex',
      flexWrap: 'wrap',
      margin: 'auto',
    },
    first : {
      display: 'in-line',
      flex: '1',
      minWidth: '200px'
    },
    second : {
      flex: '1'
    }
}

const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth();
const date = dateObj.getDate();
const todayDate = `${year},${month},${date}`;

export default class Calendar extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };
    constructor(props) {
    super(props);
    console.log('yeah')
    console.log(this.props.daysArray)

    this.state = {
      daysArray: this.props.daysArray,
    }

    // for (let i = 0; i < weekArray.length ; i++) {
    //   if(!this.props.userData[weekArray[i]]) {
    //     weekArray[i] = 0;
    //   } else {
    //   weekArray[i] = this.props.userData[weekArray[i]].meditationDuration
    //   }
    // }

  }
  // chooseDay = (day) => {
  //   //need to call reset if the day is changed.
  //   this.setState ({
  //     dateSelected: true

  //   })
  //   let selectedDay = String(day).split(" ").slice(0, 4);
  //   selectedDay[1] = translateMonth(selectedDay[1]);
  //   selectedDay = `${selectedDay[3]},${selectedDay[1]},${selectedDay[2]}`
  //   //make API call for this selectedDay, alert in the meantime
  //   //alert(selectedDay);

  //   if (selectedDay === todayDate) {
  //     console.log('today!')
  //     this.setState ({
  //       today: true,
  //     })
  //   }
  //   else {
  //     //hide the timer if another date is pressed.


  //     if(this.props.userData[selectedDay]) {
  //       this.setState ({
  //         today: false,
  //         duration: this.props.userData[selectedDay].meditationDuration,
  //         entry: this.props.userData[selectedDay].journal
  //       })
  //     } else {
  //       this.setState ({
  //         today: false,
  //         duration: 'no data',
  //         entry: 'no entry'
  //       })
  //     }
  //   }
  // }
  render () {

    // const data = this.props.userData;
    // console.log(data);
    // const formattedData = [];
    // const daysArray = [];
    // for(let i of data) {

    // }
    // for(let i = 0; i < formattedData.length; i++) {
    //   daysArray[i] = new Date(formattedData[i][0],formattedData[i][1],formattedData[i][2]);
    // }
    let meditationUI;
    // if (this.state.dateSelected) {
    //   meditationUI = ( <div style={style.container}>
    //       <div style={style.first}>
    //       <div style={style.timer}>
    //       <Timer today={this.state.today} duration={this.state.duration} />
    //       </div>
    //       <WeekDisplay dates={this.state.weekDates}/>
    //       </div>
    //       <div style={style.second}>
    //       <div style={style.journal}>
    //       <Journal entry={this.state.entry} />
    //       </div>
    //       </div>
    //     </div>
    //   )
    // }
    return (
      <div>
        <div style={style.calendar}>
          <DayPicker
            initialMonth={new Date(year, month)}
            todayButton="Go to Today"
            selectedDays={this.state.daysArray}
          />
        </div>
        {meditationUI}
      </div>
  );
  }

}

