import './App.css';
import React, {Component} from 'react'

function IncreaseAgeButton(props) {
  return (
      <button className="btn-primary" onClick={(e) => props.onClick(e, 2)}>
          {props.children}
      </button>
  )
}

class User extends React.Component {
  constructor(props) {
      super(props);
      this.state = { age: props.age };
      // This binding is necessary to make `this` work in the callback
      this.onIncreaseButtonClicked = this.onIncreaseButtonClicked.bind(this);
  }

  onIncreaseButtonClicked(e, noOfYears) {
    console.log('onIncreaseButtonClicked', noOfYears);
    //console.log('before', this.state.age);
      this.setState({
          age: this.state.age + noOfYears
      });
    //console.log('after', this.state.age);
  }
  
  render() { 
    console.log('User start', this.state);

      return (
          <div>
              <span>Name is: {this.props.name}. </span>
              <span>Age is: {this.state.age} </span>
              <IncreaseAgeButton onClick={this.onIncreaseButtonClicked}>
                  Increase age
              </IncreaseAgeButton>
          </div>
      );
  };
}

class App extends React.Component {
  render() {
    console.log('App start', this.state);
      return (
          <div >
              <User name="Jan" age={25}/>
              <User name="Anna" age={42} />
          </div>
      );
  }
}

export default App;
