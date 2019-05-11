import React, { Component } from 'react';
import Die from './Die';    // once I use "Die," it needs to be imported

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props){
        super(props);
        this.state = { die1 : "one", die2 : "one" };    // can never be zero 
        this.roll = this.roll.bind(this);
    }

    roll(){
        // Need to pick to new rolls
        // Math.floor(Math.random() * this.props.sides.length);
            // take the number above to acces the data from the sides and assign it to each die
        const newDice1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDice2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        // set State with the new variables
        this.setState({ die1: newDice1, die2: newDice2});
    }

    render(){
        return(
            <div>
              <Die face = {this.state.die1}/>  
              <Die face = {this.state.die2}/>
              <button onClick={this.roll}>Click to roll</button>
              
            </div>
        );
    }
}

export default RollDice;