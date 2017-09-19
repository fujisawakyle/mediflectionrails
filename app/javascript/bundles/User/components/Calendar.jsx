import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import Timer from './timer/Timer';
import Journal from './journal/Journal';
import WeekDisplay from './weekdisplay/WeekDisplay';
import User2 from './User2';
// import PropTypes from 'prop-types';

const style = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      maxWidth: '80em',
      height: '60em',
    },
    user : {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      background: 'rgba(255,255,255,0.3)',
      height: '10em',
      width: '22em',
      textAlign: 'center',
      margin: 'auto',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      padding: '1em',
      margin: '1em 0',
      color: 'white',
    },
    weekdisplay : {
      background: 'rgba(255,255,255,0.2)',
      textAlign: 'center',
      paddingBottom: '10px',
      width: '22em',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      margin: '1em 0',
      color: 'white',
    },
    calendar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '1em 0',

    },
    timer : {
      background: 'rgba(255,255,255,0.3)',
      height: '15em',
      width: '22em',
      textAlign: 'center',
      margin: '1em 0',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      margin: '1em',
    },
    journal : {
      background: 'rgba(255,255,255,0.3)',
      height: '25em',
      width: '22em',
      textAlign: 'center',
      margin: '1em 0',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      margin: '1em',
    },

}

export default class Calendar extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };
  constructor(props) {
    super(props);

    this.state = {
      daysArrayNum: this.props.daysArrayNum,
      daysArrayText: this.props.daysArrayText,
      userData: this.props.userData,
      today: this.props.today,
      weekArrayVals: this.props.weekArrayVals,
      journal: this.props.journal,
    }

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.postFlag) {
      this.setState({
        journal: nextProps.userData[nextProps.userData.length-1].journal,

      });
    }else {
      this.setState({
        journal: nextProps.journal
      })
    }
  }

  render () {

    return (
      <div>
        <div style={style.container}>
          <div style = {style.user}>
            <User2 name={this.props.name} />
          </div>
          <div className="l-site__components--calendar" style={style.calendar}>
            <DayPicker
              initialMonth={new Date(this.props.year, this.props.month - 1)}
              todayButton="Go to current month"
              selectedDays={this.state.daysArrayText}
              onDayClick={day => this.props.chooseDay(day)}
            />
          </div>
          <div style = {style.weekdisplay}>
            <WeekDisplay
              weekArrayVals={this.props.weekArrayVals}
              today={this.props.today}
            />
          </div>
          <div style = {style.timer}>
            <Timer
              timeSubmit={this.props.timeSubmit}
              timeUpdate={this.props.timeUpdate}
              id={this.state.id}
              today={this.props.today}
              time={this.props.time}
              journal={this.state.journal}
              selectedDay={this.props.selectedDay}
            />
          </div>
          <div style = {style.journal}>
            <Journal
              id={this.state.id}
              time={this.state.time}
              updateFlag={this.props.updateFlag}
              selectedDay={this.props.selectedDay}
              mediflectionUpdate={this.props.mediflectionUpdate}
              mediflectionSubmit={this.props.mediflectionSubmit}
              journal={this.state.journal}
            />
          </div>

        </div>
      </div>
    );
  }

}

