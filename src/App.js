import React, { Component } from "react";

import Persons from "./components/Persons/Persons";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("APP.JS ", props);
    this.state = {
      persons: [
        { id: 1, name: "Max", age: 28 },
        { id: 2, name: "Manu", age: 29 },
        { id: 3, name: "Step", age: 25 }
      ],
      showPerson: false,
      noOfClicks:0
    };

  }
  componentWillMount() {
    console.log("compwilmout :", ...this.state.persons);
  }

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

  personTextChanged = index => {
    console.log("hi" + index);
    let clikedData = { ...this.state.persons[index] };
    console.log(clikedData.name);
    const copyofPerson = this.state.persons;
    copyofPerson[index].name = "React";
    this.setState((prevState,props)=>{
      return{
      
        persons:copyofPerson,
        noOfClicks: prevState.noOfClicks + 1
      }
    });
    
  };

  render() {
    
    return (
      <div className="App">
        <p> Hiii </p>
        <button>Show Person</button>
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.personTextChanged}
        />
      </div>
    );
  }
}

export default App;
