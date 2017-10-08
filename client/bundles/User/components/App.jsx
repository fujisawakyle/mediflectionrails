import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import Timer from './timer/Timer';
import Journal from './Journal';
import WeekDisplay from './WeekDisplay';
import ShowDate from './ShowDate';
import Calendar from './Calendar';
import moment from 'moment';

const style = {
  user: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth() + 1;
const date = dateObj.getDate();
const todayDate = `${year},${month},${date}`;
let selectedDay = todayDate;
let postFlag = false;
let updateFlag = false;
const daysArrayNum = [];
const daysArrayText = [];
const weekArrayVals = [0, 0, 0, 0, 0, 0, 0];
const weekArrayDate = [];
const userArray = [];
let today = true;

for (let i = 0; i < 7; i++) {
  let oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - oneWeekAgo.getDay() + i);
  let dateAlter = String(oneWeekAgo)
    .split(' ')
    .splice(1, 3);
  dateAlter[0] = translateMonth(dateAlter[0]);
  let formattedDate = `${dateAlter[2]},${dateAlter[0]},${dateAlter[1]}`;
  weekArrayDate[i] = formattedDate;
}

function translateMonth(month) {
  switch (month) {
    case 'Jan':
      month = '1';
      break;
    case 'Feb':
      month = '2';
      break;
    case 'Mar':
      month = '3';
      break;
    case 'Apr':
      month = '4';
      break;
    case 'May':
      month = '5';
      break;
    case 'Jun':
      month = '6';
      break;
    case 'Jul':
      month = '7';
      break;
    case 'Aug':
      month = '8';
      break;
    case 'Sep':
      month = '9';
      break;
    case 'Oct':
      month = '10';
      break;
    case 'Nov':
      month = '11';
      break;
    case 'Dec':
      month = '12';
      break;
  }
  return month;
}

export default class User extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  constructor(props) {
    super(props);

    this.state = {
      userData: this.props.data,
      daysArrayNum: daysArrayNum,
      daysArrayText: daysArrayText,
      weekArrayVals: weekArrayVals,
      journal: '',
      today: true
    };
  }

  componentDidMount() {
    this.chooseDay(new Date(todayDate));
  }

  // create a new journal //
  mediflectionSubmit = mediflectionData => {
    $.ajax({
      url: '/mediflections',
      dataType: 'json',
      type: 'POST',
      data: mediflectionData,

      success: function(userData) {
        $('.journalBox').append("<div class='saved submit'>Saved!</div>");
        setTimeout(function() {
          $('.saved')
            .hide()
            .fadeOut(1000);
        }, 2000);
        postFlag = true;
        this.setState({
          userData: userData,
          saveStatus: true
        });
      }.bind(this),

      error: function(response, status, err) {
        console.log('response');
        console.log(response);
        console.log('err');
        console.log(err);
        console.log('An error occured');
        this.setState({
          saveStatus: false
        });
      }
    });
  };

  // update an existing journal //
  mediflectionUpdate = mediflectionData => {
    $.ajax({
      url: '/mediflections/' + mediflectionData.mediflection.id,
      dataType: 'json',
      type: 'PUT',
      data: mediflectionData,

      success: function(userData) {
        $('.journalBox').append("<div class='update submit'>Updated!</div>");
        setTimeout(function() {
          $('.update')
            .hide()
            .fadeOut(1000);
        }, 2000);
        this.setState({
          userData: userData,
          saveStatus: true
        });
      }.bind(this),

      error: function(response, status, err) {
        console.log('response');
        console.log(response);
        console.log('err');
        console.log(err);
        console.log('An error occured');
        this.setState({
          saveStatus: false
        });
      }.bind(this)
    });
  };

  timeSubmit = mediflectionData => {
    $.ajax({
      url: '/mediflections',
      dataType: 'json',
      type: 'POST',
      data: mediflectionData,

      success: function(userData) {
        postFlag = true;
        this.setState({
          userData: userData
        });

        this.chooseDay(new Date(todayDate));
      }.bind(this),

      error: function(response, status, err) {
        console.log('response');
        console.log(response);
        console.log('err');
        console.log(err);
        console.log('An error occured');
      }.bind(this)
    });
  };

  timeUpdate = mediflectionData => {
    $.ajax({
      url: '/mediflections/' + mediflectionData.mediflection.id,
      dataType: 'json',
      type: 'PATCH',
      data: mediflectionData,

      success: function(userData) {
        this.setState({ userData: userData });
        this.chooseDay(new Date(todayDate));
      }.bind(this),

      error: function(response, status, err) {
        console.log('response');
        console.log(response);
        console.log('err');
        console.log(err);
        console.log('An error occured');
      }
    });
  };

  updateData = () => {
    let data = this.state.userData;

    for (let i of data) {
      //add time to week array
      let index = weekArrayDate.indexOf(i.date);
      if (index >= 0) {
        weekArrayVals[index] = i.time;
      }
      if (daysArrayNum.indexOf(i.date) < 0) {
        daysArrayNum.push(i.date);
        daysArrayText.push(new Date(i.date));
      }
    }
  };

  chooseDay = day => {
    console.log('moment', moment(day));
    console.log('moment', moment(day)._d);
    console.log('Date.toISOString(day)', day.toISOString());
    console.log('new Date(day)', new Date(day));
    console.log('day', day);
    console.log('String(day)', String(day));
    this.updateData();
    postFlag = false;

    selectedDay = String(day)
      .split(' ')
      .slice(0, 4);
    selectedDay[1] = translateMonth(selectedDay[1]);

    selectedDay = `${selectedDay[3]},${selectedDay[1]},${selectedDay[2]}`;
    this.setState({
      dateSelected: true,
      selectedDay: selectedDay
    });
    console.log('selectedDay', selectedDay);
    console.log('todayDate', todayDate);
    if (selectedDay === todayDate) {
      today = true;
    } else {
      //hide the timer if another date is pressed.
      today = false;
    }

    if (daysArrayNum.indexOf(selectedDay) >= 0) {
      for (let data of this.state.userData) {
        if (selectedDay == data.date) {
          if (!data.time) {
            data.time = 0;
          }
          this.setState({
            time: data.time,
            journal: data.journal,
            id: data.id
          });
          updateFlag = true;
        }
      }
    } else {
      updateFlag = false;
      this.setState({
        time: 0,
        journal: ''
      });
    }
  };
  render() {
    this.updateData();
    return (
      <div>
        <div className="c-site__component--container">
          <div>
            <div>
              <ShowDate
                today={today}
                todayDate={todayDate}
                selectedDay={selectedDay}
              />
            </div>
          </div>
          <div className="c-site__components">
            <div className="c-site__components-container">
              <div
                className="c-site__component c-site__component--month"
                style={style.calendar}
              >
                <DayPicker
                  initialMonth={new Date(year, month - 1)}
                  todayButton="current month"
                  selectedDays={this.state.daysArrayText}
                  onDayClick={day => this.chooseDay(String(day))}
                />
              </div>
              <div
                className="c-site__component c-site__component--week"
                style={style.weekdisplay}
              >
                <WeekDisplay weekArrayVals={weekArrayVals} today={today} />
              </div>
            </div>
            <div className="c-site__components-container">
              <div
                id="timer"
                className="c-site__component c-site__component--timer"
                style={style.timer}
              >
                <Timer
                  timeSubmit={this.timeSubmit}
                  timeUpdate={this.timeUpdate}
                  id={this.state.id}
                  today={today}
                  time={this.state.time}
                  journal={this.state.journal}
                  selectedDay={selectedDay}
                />
              </div>
              <div
                className="c-site__component c-site__component--journal"
                style={style.journal}
              >
                <Journal
                  id={this.state.id}
                  time={this.state.time}
                  updateFlag={updateFlag}
                  selectedDay={selectedDay}
                  mediflectionUpdate={this.mediflectionUpdate}
                  mediflectionSubmit={this.mediflectionSubmit}
                  journal={this.state.journal}
                  saveStatus={this.state.saveStatus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
