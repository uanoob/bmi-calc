import React, { Component } from 'react';

import './App.css';
import Range from './Components/Range';
import Output from './Components/Output';

class App extends Component {
  state = {
    height: 170,
    weight: 65,
    bmi: 22.49,
    bmiClass: 'Normal'
  };

  heightChange = height => {
    this.setState({ height: height }, () => {
      console.log(this.state);
    });
  };

  weightChange = weight => {
    this.setState({ weight: weight }, () => {
      console.log(this.state);
    });
  };
  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label htmlFor="">Height</label>
            <Range value={this.state.height} onChange={this.heightChange} />
          </div>
          <div>
            <label htmlFor="">Weight</label>
            <Range value={this.state.weight} onChange={this.weightChange} />
          </div>
          <br />
          <Output />
        </form>
      </div>
    );
  }
}

export default App;
