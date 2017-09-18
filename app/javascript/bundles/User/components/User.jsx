import PropTypes from 'prop-types';
import React from 'react';
import Calendar from './Calendar';
import Timer from './timer/Timer';
import Journal from './journal/Journal';

const style = {
  user: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth() + 1;
const date = dateObj.getDate();
const todayDate = `${year},${month},${date}`;
let selectedDay = '';
let postFlag = false;
let updateFlag = false;
const daysArrayNum = [];
const daysArrayText = [];
const weekArrayVal = [0, 0, 0, 0, 0, 0, 0];
const weekArrayDate = [];
const userArray = [];


for (let i = 0; i < 7; i ++){
  let oneWeekAgo = new Date()

  oneWeekAgo.setDate(oneWeekAgo.getDate() - 6 + i);
  let dateAlter = String(oneWeekAgo).split(' ').splice(1,3);
  // if (dateAlter[1][0] == 0) {
  //   dateAlter[1] = dateAlter[1].substr(1);
  // }
  dateAlter[0] = translateMonth(dateAlter[0]);
  let formattedDate = `${dateAlter[2]},${dateAlter[0]},${dateAlter[1]}`;
  weekArrayDate[i] = formattedDate
}

function translateMonth (month) {
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
      weekArrayVal: weekArrayVal,
      users: undefined,
      journal: '',
    };
  }

  // create a new journal //
  mediflectionSubmit = (mediflectionData) => {
    //console.log(mediflectionData);
    $.ajax({
          url: "/mediflections",
          dataType: 'json',
          type: 'POST',
          data: mediflectionData,

          success: function(userData) {
            postFlag = true;
            this.setState({
              userData: userData,
            });

            console.log('this.state.userData');
            console.log(this.state.userData);

          }.bind(this),

          error: function(response, status, err) {
            console.log('response');
            console.log(response);
            console.log('err');
            console.log(err);
            console.log("An error occured")
          }


        });
  }

  // update an existing journal //
  mediflectionUpdate = (mediflectionData) => {

    console.log(mediflectionData);
    console.log(mediflectionData.mediflection.id)
    $.ajax({
          url: "/mediflections/" + mediflectionData.mediflection.id,
          dataType: 'json',
          type: 'PATCH',
          data: mediflectionData,

          success: function(userData) {
            // console.log('ajax userData');
            // console.log(userData);

            this.setState({userData: userData});


          }.bind(this),

          error: function(response, status, err) {
            console.log('response');
            console.log(response);
            console.log('err');
            console.log(err);
            console.log("An error occured")
          }


        });
  }

  chooseDay = (day) => {
    postFlag = false;

    selectedDay = String(day).split(" ").slice(0, 4);
    selectedDay[1] = translateMonth(selectedDay[1]);
    selectedDay = `${selectedDay[3]},${selectedDay[1]},${selectedDay[2]}`;
    this.setState ({
      dateSelected: true,
      selectedDay: selectedDay,
    })
    if (selectedDay === todayDate) {
      this.setState ({
        today: true,
      })
    }
    else {
      //hide the timer if another date is pressed.
      this.setState ({
        today: false,
      })
    }

    if (this.state.daysArrayNum.indexOf(selectedDay) >= 0) {
      console.log('if');
      for(let data of this.state.userData) {
        if(selectedDay == data.date) {
          if(!data.time) {
            data.time = 'no data';
          }
          this.setState ({
            time: data.time,
            journal: data.journal,
            id: data.id,
          })
          updateFlag = true;
        }


      }
    }
    else {
      console.log('else');
      updateFlag = false;
      this.setState ({
        time: 'no data',
        journal: '',
      })
    }

    console.log('chooseDay state.journal');
    console.log(this.state.journal);
  }
  render() {

    const data = this.state.userData;
    for(let i of data) {
      //add time to week array
      let index = weekArrayDate.indexOf(i.date);
      if(index >= 0){
        weekArrayVal[index] = i.time;
      }
      if(daysArrayNum.indexOf(i.date) < 0) {
        daysArrayNum.push(i.date);
        daysArrayText.push(new Date(i.date));
      }
    }

    return (
      <div style = {style.user}>
          <Calendar
            chooseDay={this.chooseDay}
            mediflectionUpdate={this.mediflectionUpdate}
            mediflectionSubmit={this.mediflectionSubmit}
            time={this.state.time}
            journal={this.state.journal}
            weekArrayVal={this.state.weekArrayVal}
            name={this.props.name}
            daysArrayText={this.state.daysArrayText}
            daysArrayNum={this.state.daysArrayNum}
            userData={this.state.userData}
            selectedDay={selectedDay}
            postFlag={postFlag}
            updateFlag={updateFlag}
            year={year}
            month={month}
          />
      </div>
    );
  }
}
