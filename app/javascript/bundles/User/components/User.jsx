import PropTypes from 'prop-types';
import React from 'react';

export default class User extends React.Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // this is passed from the Rails view
  // };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      mediflection: this.props.mediflection
    };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <h3>
          Happy meditating, {this.state.name}
        </h3>
        <h3>
          Time: {this.state.mediflection}
        </h3>
      </div>
    );
  }
}
