import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Radio extends Component {
  constructor() {
    super();
    this.state = {
      radioClick: 'name',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(type) {
    // on radio state change handler
    this.setState({ selectedOption: type.target.value });
    this.props.sortBy(type.target.value);
  }

  render() {
    return (
      <div className="radioButtons">
        <div className="left">
          <input
            type="radio"
            name={this.state.radioClick}
            value="name"
            checked={this.state.selectedOption === 'name'}
            onChange={this.onChange}
          />
          <label>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className="right">
          <input
            type="radio"
            name={this.state.radioClick}
            value="age"
            checked={this.state.selectedOption === 'age'}
            onChange={this.onChange}
          />
          <label>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );
  }
}

// Uncomment the snippet below
Radio.propTypes = {
  sortBy: PropTypes.func,
};

export default Radio;
