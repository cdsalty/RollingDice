import React, { Component } from 'react';
import Die from './Die';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className = "App">
        <Die face='one' />
        <Die face='one' />
      </div>
    );
  }
}

export default App;


// I created face and then carried it over into the prop defined in die.js