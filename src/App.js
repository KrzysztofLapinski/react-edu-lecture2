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
  const [age, setAge] = useState(props.age);

  function onIncreaseButtonClicked(e, noOfYears) {
    console.log('onIncreaseButtonClicked', noOfYears);
    setAge(age + noOfYears);
  }

  console.log('User start', age);

  return (
    <div>
      <span>Name is: {props.name}. </span>
      <span>Age is: {age} </span>
      <IncreaseAgeButton onClick={onIncreaseButtonClicked}>
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
