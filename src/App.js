import './App.css';

function IncreaseAgeButton(props) {
  return (
    <button className="btn-primary" onClick={(e) => props.onClick(e, 2)}>
      {props.children}
    </button>
  )
}

function User(props) {
  function onIncreaseButtonClicked(e, noOfYears) {
    console.log('Age was increased by ' + noOfYears + ' years');
  }

  return (
    <div>
      <span>Name is: {props.name} </span>
      <span>Age is: {props.age} </span>
      <IncreaseAgeButton onClick={onIncreaseButtonClicked}>
        Increase age
      </IncreaseAgeButton>
    </div>
  );
}

function App() {
  return (
    <div >
      <User name="Jan" age="25" />
      <User name="Anna" age="42" />
    </div>
  );
}

export default App;
