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
    this.setState({ height: height }, this.setBmi);
  };

  weightChange = weight => {
    this.setState({ weight: weight }, this.setBmi);
  };

  setBmi = () => {
    let bmi = (this.state.weight / this.state.height / this.state.height * 10000).toFixed(2);
    this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) }, () => {
      console.log(this.state);
    });
  };

  getBmiClass = index => {
    if (index < 18.5) {
      return 'Underweight';
    }
    if (index >= 18.5 && index <= 24.9) {
      return 'Normal';
    }
    if (index >= 25 && index <= 29.9) {
      return 'Overweight';
    }
    if (index >= 30) {
      return 'Obese';
    }
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
          <Output data={this.state} />
        </form>
      </div>
    );
  }
}

export default App;
