import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar'

const style = {
    position:'relative',
    margin:'50px auto',
    color:'black',
    border:"1px green solid",
    padding: "10px",
    backgroundColor:"pink"
}

class App2 extends Component {
  onDayClick = (e,day)=>{
    alert(day);
  }
  
  state = {
   
  }
   
  render() {
    

    return (
      <div className="App">
        <Calendar 
        onDayClick = {(e, day) => this.onDayClick(e,day)} style = {style} width = "500px" height = "350px"/>
      </div>
    );
  }
}

export default App2;
