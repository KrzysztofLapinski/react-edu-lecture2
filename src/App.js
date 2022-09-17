import './App.css';

function User(props) {
  return (
    <div>
      <span>Name is: {props.name} </span>
      <span>Age is: {props.age}</span>
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
