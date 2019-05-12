import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
   
    render(){
        // return <i className='fas fa-dice-one'></i>      // See note 1
      return <i className = {`DieStyle fas fa-dice-${this.props.face}`} />; // created face on App and then rendered as a prop here.
    }
}

export default Die;


/*
Note 1:
Originally set as <i className='fas fa-dice-one'></i> but I need a way to pick numbers 1-6, not just 'one'
set it in JSX, then in the javascript, added our back-tics and extracted this.props.face into it. 
*/

