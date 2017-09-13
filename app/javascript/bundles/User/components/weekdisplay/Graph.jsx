import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

//make API call to update data.
//look for the keys that are the date and then retrieve
//data for the week. if there's no stored date, the
//time will default to 0

const style = {
    graph : {

    }
}

let daysArray = [];
let today = new Date().getDay();
const offset = 6 - today;
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
for (let i=0; i < offset; i++){
    days.unshift(days.pop());
}



export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
        days: [],
        chartData: {
            labels: [
                days[0],days[1],days[2],days[3],days[4],days[5],days[6]
            ],
            datasets: [
                {
                    label: 'minutes',
                    data: this.props.dates,
                    backgroundColor: 'blue'
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
                display: false,
            }
        }
    };
  }




  render() {
    const daysArray = this.props.dates;
    return (
        <div style={style.graph}>

            <Bar
                data = {this.state.chartData}
                options = {this.state.options}
                width = {100}
                height = {50} />
        </div>
    );
  }

}
