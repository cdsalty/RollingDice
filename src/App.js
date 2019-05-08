import React, { Component } from 'react';
// import Die from './Die';
import RollDice from './RollDice';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className = "App">
       <RollDice />
      </div>
    );
  }
}

export default App;


// I created face and then carried it over into the prop defined in die.js