import React, { Component } from 'react';

class Range extends Component {
  state = {
    value: this.props.value
  };

  static defaultProps = {
    min: 0,
    max: 245,
    step: 1
  };

  onChange = ivent => {
    console.log(ivent.target.value);
    this.props.onChange(this.state.value);
    this.setState({ value: ivent.target.value });
  };

  render() {
    return (
      <div className="Range">
        <input
          type="range"
          value={this.state.value}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Range;
