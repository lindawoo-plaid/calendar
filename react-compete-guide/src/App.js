import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person'

class App extends Component {
  state = {
    persons: [{id:"kfdlk;",name:"Linda",age:"53"},{id:"dae", name: "Carter", age: "18"}, {id:"POIO",name:"Debbie", age:54}]
  }
  switchName = ()=>{
    this.setState({persons:[{id:"AFDS", name:"art",age:"53"},{id:"DASWE", name: "sammy", age: "99"}, {id:"PODE",name:"carol", age:54}]} )
  }

  typeInName = (event,index)=>{
    console.log("Woohoo!!");
    console.log(event.target.value, index)
    this.setState({persons:[{id:"ODASOFI",name:"art",age:"53"},{id:"afef",name: event.target.value, age: "99"}, {id:"ewqq",name:"carol", age:54}]} )
  }
  
  render() {
    let persons = this.state.persons.map((person,index)=>{
      return <Person
                name = {person.name}
                age = {person.age}
                key = {person.id}
                changed = {this.typeInName}
                index = {person.id}
                
              />  
    })

    console.log(persons)

    return (
      <div className="App">
        <p className="App-intro">
         hello there Linda!
        </p>
        <button onClick = {this.switchName}>Click on Me! </button>
        <input/>

        {persons}
      </div>
    );
  }
}

export default App;
