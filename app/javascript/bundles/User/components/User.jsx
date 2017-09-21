import React, { Component } from 'react';

const style = {
    user : {

    }
}

export default class User extends Component {

    render() {
        return (
        <div style={style.user}>
            <h3>Happy meditating, </h3>
            <h3>{this.props.name}</h3>
        </div>
    )
  }
}

