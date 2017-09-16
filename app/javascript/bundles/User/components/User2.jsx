import React, { Component } from 'react';

const style = {
    user : {

    }
}

export default class User2 extends Component {

    render() {
        return (
        <div style={style.user}>
            <h3>Happy meditating, {this.props.name}</h3>
        </div>
    )
  }
}

