import './App.css';

function UserJan() {
  return (
    <div>
      <span>Name is: Jan </span>
      <span>Age is: 25</span>
    </div>
  );
}

function UserAnna() {
  return (
    <div>
      <span>Name is: Anna </span>
      <span>Age is: 42</span>
    </div>
  );
}

function App() {
  return (
    <div >
      <UserJan />
      <UserAnna />
    </div>
  );
}

export default App;
