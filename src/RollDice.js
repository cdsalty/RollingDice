import React, { Component } from 'react';
import Die from './Die';    // once I use "Die," it needs to be imported

class RollDice extends Component {
    constructor(props){
        super(props);
        this.state = { die1 : "one", die2 : "one" };
    }

    render(){
        return(
            <div>
              <Die face = {this.state.die1}/>  
              <Die face = {this.state.die2}/>
            </div>
        );
    }
}

export default RollDice;