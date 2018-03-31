import React, { Component } from "react";
import Person from "./Person/Person";

import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Step", age: 25 }
    ],
    showPerson: false
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { id: 1, name: event.target.value, age: 28 },
        { id: 2, name: "Manu1", age: 29 },
        { id: 3, name: "Step1", age: 25 }
      ]
    });
  };

  deletePersonHandler = params => {
    console.warn("deleteHandler is called" + params);
    const getPersonList = [...this.state.persons];
    getPersonList.splice(params, 1);
    this.setState({ persons: getPersonList });
  };

   personTextChanged = (index) => {
    console.log("hi" + index);
    let clikedData = {...this.state.persons[index]};
    console.log(clikedData.name);
    const copyofPerson = this.state.persons;
    copyofPerson[index].name = "React";
    this.setState({persons:copyofPerson});
  };

  render() {
    return (
      <div className="App">
        <p> Hiii </p>
        <button>Show Person</button>
        {this.state.persons.map((peron, index) => {
          return (
            <Person
              click={() => this.deletePersonHandler(index)}
              name={peron.name}
              age={peron.age}
              key={peron.id}
              changed={() => this.personTextChanged(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
