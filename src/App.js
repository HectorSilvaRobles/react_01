import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Why from './Person/Why'

const App = (props) => {
  const [personState, setPersons] = useState({
    persons: [
      {name: 'Max', age: 25},
      {name: 'Manu', age: 20},
      {name: 'Steph', age: 30}
    ],
    otherState: 'some other value'
  })

  const switchNameHandler = () => {
    setPersons({
      persons: [
        {name: 'Hector', age: 40},
        {name: 'John', age: 34},
        {name: 'Curry', age: 30}
      ]
    })
  }

  const nameChangedHandler = (event) => {
    setPersons({
      persons: [
        {name: event.target.value, age: 28},
        {name: event.target.value, age: 30},
        {name: event.target.value, age: 25}
      ]
    })
  }

  const [otherState, setOtherState] = useState('some other value');

    return (
      <div className="App">
        <h1>Hi</h1>
          <Person 
          name={personState.persons[0].name} 
          age={personState.persons[0].age}
          click={switchNameHandler} 
          changed={nameChangedHandler}
          >New new yoork</Person> 

          <Person 
          name={personState.persons[1].name} 
          age={personState.persons[1].age}
          changed={nameChangedHandler} />

          <Person 
          name={personState.persons[2].name} 
          age={personState.persons[2].age} 
          changed={nameChangedHandler}
          />

          <button onClick={() => switchNameHandler()}>click</button>

      </div>
    );
  }

export default App;
