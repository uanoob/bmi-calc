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
  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label htmlFor="">Height</label>
            <Range />
          </div>
          <div>
            <label htmlFor="">Weight</label>
            <Range />
          </div>
          <br />
          <Output />
        </form>
      </div>
    );
  }
}

export default App;
