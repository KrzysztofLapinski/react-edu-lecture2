import './App.css';

function SampleInput(props) {
  return (
    <div>
      <label>{props.label}</label><br />
      <input type="text" id={props.fieldName} name={props.fieldName}></input>
      <hr />
    </div>
  )
}

function App() {
  return (
    <div style={{ width: "200px" }}>
      <h1>Some form</h1>
      <SampleInput fieldName="fname" label="First name:" />
      <SampleInput fieldName="lname" label="Last name:" />
      <SampleInput fieldName="phoneNumber" label="Phone number:" />
    </div>
  );
}

export default App;
