import React, { Component } from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends Component {
  
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Step", age: 25 }
    ],
    showPerson: false
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: "Manu1", age: 29 },
        { name: "Step1", age: 25 }
      ]
    });
  };

  showPerson = () => {
 
    this.setState({ showPerson: true });
    if (this.state.showPerson) {
      console.warn("Time to show PersonList");
     let personList = (
        <div>
          <Person
            changed={this.nameChangeHandler}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          >
            Hiii
          </Person>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <p> Hiii </p>
        <button onClick={this.showPerson}>Show Person</button>
        {this.personList}
      </div>
    );
  }
}

export default App;
