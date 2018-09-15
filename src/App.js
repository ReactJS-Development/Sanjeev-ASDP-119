import React, { Component } from 'react';
import './App.css';
import EmployeeApi from './EmployeeApi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EmployeeApi />
      </div>
    );
  }
}

export default App;
