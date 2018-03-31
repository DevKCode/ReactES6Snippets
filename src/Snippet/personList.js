

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



  render() {
    return (
      <div className="App">
        <p> Hiii </p>
        <button >Show Person</button>
        {this.state.persons.map((peron)=>{

          return <Person name={peron.name}/>
        }
        )}
      </div>
    );
  }
}


