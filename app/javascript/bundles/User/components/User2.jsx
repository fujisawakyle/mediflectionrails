import React, { Component } from 'react';

const style = {
    user : {
        background: 'rgba(255,255,255,0.3)',
        height: '150px',
        width: '250px',
        textAlign: 'center',
        margin: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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

