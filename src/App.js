import './App.css';
import { useState } from 'react'

function IncreaseAgeButton(props) {
  return (
    <button className="btn-primary" onClick={(e) => props.onClick(e, 2)}>
      {props.children}
    </button>
  )
}

function User(props) {
  const [user, setUser] = useState({
    age: props.age,
    name: props.name
  });
  console.log('User start', user);

  function onIncreaseButtonClicked(e, noOfYears) {
    setUser(prevUser => ({
      ...prevUser,
      age: 23
    }));
  }

  return (
    <div>
      <span>Name is: {user.name}. </span>
      <span>Age is: {user.age} </span>
      <IncreaseAgeButton onClick={(e) => onIncreaseButtonClicked(e, 2)}>
        Increase age
      </IncreaseAgeButton>
    </div>
  );
}

function App() {
  console.log('App start');
  return (
    <div >
      <User name="Jan" age={25} />
      <User name="Anna" age={42} />
    </div>
  );
}

export default App;
