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

    const data = this.props.data;
    for(let i of data) {
      //add time to week array
      let index = weekArrayDate.indexOf(i.date);
      if(index >= 0) {
        weekArrayVal[index] = i.time;
      }
      daysArrayNum.push(i.date);
      daysArrayText.push(new Date(i.date));
    }
    console.log(weekArrayVal);

    this.state = {
      // name: this.props.name,
      userData: this.props.data,
      daysArrayNum: daysArrayNum,
      daysArrayText: daysArrayText,
      weekArrayVal: weekArrayVal,
      items: [],
      users: undefined,
    };
  }

  mediflectionSubmit = (mediflectionData) => {
    console.log(mediflectionData);
    $.ajax({
          url: "/mediflections",
          dataType: 'json',
          type: 'POST',
          data: mediflectionData,

          success: function(userData) {

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


  // updateName = (name) => {
  //   this.setState({ name });
  // };

  // componentDidMount() {
  //   console.log('hi');
  //   this.getDataFromApi();
    // $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });

  // }

  // getDataFromApi = () => {
  //   var self = this;
  //   $.ajax({
  //     url: '/api/users',
  //     success: function(data) {
  //       console.log(data);
  //       self.setState({ users: data});
  //     },
  //     error: function(xhr, status, error) {
  //       alert('cannot get data from API: ', error);
  //     }
  //   });
  // }
  // getDataFromApi = () => {
  //   console.log('run function');
  //     fetch('/api/users')
  //     .then(resp => resp.json())
  //     .then(function(data) {
  //       data.forEach(function(user) {
  //         userArray.push(user.name);
  //       });
  //       console.log(userArray);

  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  render() {
    // console.log('users state');
    // console.log(this.state.users);
    // let items= this.state.items.map((item) => {
    //   return (
    //     <div key={item.id}>
    //       <h3>{item.name}</h3>
    //       <p>{item.description}</p>
    //       </div>
    //   )
    // });


    // const arr = [];
    // this.state.users.forEach(function(user) {
    //       arr.push(user.name);
    //     }.bind(this));


    return (
      <div style = {style.user}>
          <Calendar mediflectionSubmit={this.mediflectionSubmit} user={this.state.users} weekArrayVal={this.state.weekArrayVal} daysArrayText={this.state.daysArrayText} daysArrayNum={this.state.daysArrayNum} userData={this.state.userData}/>
      </div>
    );
  }
}
