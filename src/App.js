import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{width: "400px"}}>
    <h1>Some form</h1>
    <div>
      <label>First name:</label><br/>
      <input type="text" id="fname" name="fname" />
      <hr/>
    </div>
    <div>
      <label for="lname">Last name:</label><br/>
      <input type="text" id="lname" name="lname" />
      <hr/>
    </div>
    <div>
      <label>Phone number:</label><br/>
      <input type="text" id="phoneNumber" name="phoneNumber" />
      <hr/>
    </div>
  </div>
  );
}

export default App;
