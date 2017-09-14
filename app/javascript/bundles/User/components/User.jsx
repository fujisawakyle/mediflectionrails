import PropTypes from 'prop-types';
import React from 'react';
import Calendar from './Calendar';
import Timer from './timer/Timer';
import Journal from './journal/Journal';

const daysArrayNum = [];
const daysArrayText = [];
const userArray = [];

export default class User extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */


  constructor(props) {
    super(props);

    // const data = this.props.mediflection;
    // for(let i of data) {
    //   daysArrayNum.push(i.date);
    //   daysArrayText.push(new Date(i.date));
    // }

    // let arr = this.props.mediflection[0].journal

    //const arr = this.props.mediflection[0].created_at.slice(0,10);

    this.state = {
      // name: this.props.name,
      // userData: data,
      daysArrayNum: daysArrayNum,
      daysArrayText: daysArrayText,
      items: [],
      users: undefined,
    };
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
        <div>
          <Calendar user={this.state.users} daysArrayText={this.state.daysArrayText} daysArrayNum={this.state.daysArrayNum} userData={this.state.userData}/>

      </div>
    );
  }
}
