import React, { Component } from 'react';
import Die from './Die';    // once I use "Die," it needs to be imported
import './RollDice.css';


class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props){
        super(props);
        this.state = { die1 : "one", die2 : "one", isRolling: false };    // can never be zero 
        this.roll = this.roll.bind(this);
    }

    roll(){
        // Need to pick to new rolls
        // Math.floor(Math.random() * this.props.sides.length);
            // take the number above to acces the data from the sides and assign it to each die
        let newDice1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        let newDice2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        // set State with the new variables
        this.setState({ die1: newDice1, die2: newDice2, rolling: true });

        // need to wait one second, then change rolling back to false.
        setTimeout(() => {
          this.setState({ rolling: false });
        }, 1000);

    }

    render(){
        return(
            <div className = "RollDice">
              <div className = "RollDice-container">
              <Die face = {this.state.die1} rolling = {this.state.rolling} />  
              <Die face = {this.state.die2} rolling = {this.state.rolling} />
            </div>
            <button onClick={this.roll} disabled={this.state.rolling}>
              {this.state.rolling ? "Dice Rolling..." : "Roll Dice!"}
            </button>
            </div>
        );
    }
}

export default RollDice;