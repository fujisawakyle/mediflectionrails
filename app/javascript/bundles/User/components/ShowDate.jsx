import React, { Component } from 'react';

const style = {
    date : {

    }
}

export default class ShowDate extends Component {

    formatDate = (date) => {
        let formatted = new Date(date);
        formatted = String(formatted).split(" ").slice(0, 4);
        formatted[0] = formatted[0] + ',';
        formatted[2] = formatted[2] + ',';
        return formatted.join(" ");
    }

    render() {
        let dataDisplay;
        let today = this.formatDate(this.props.todayDate);
        let selectedDay = this.formatDate(this.props.selectedDay)
        if(this.props.today) {
            dataDisplay = (
                <div className="l-site__date l-site__date--today">
                    <h3>{today} </h3>
                </div>
            )
        }
        else {
            dataDisplay = (
                <div className="l-site__date l-site__date--other-day">
                    <h3> {selectedDay} </h3>
                </div>
            )
        }
        return (
        <div style={style.user}>
            {dataDisplay}
        </div>
    )
  }
}

