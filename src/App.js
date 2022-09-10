import './App.css';

function ComponentOne(props) {
  return (
    <div style={{ backgroundColor: 'green', width: '50%', margin: '5px' }}>
      I'm green component
    </div>
  );
}

function ComponentTwo(props) {
  return (
    <div style={{ backgroundColor: 'yellow', width: '50%', margin: '5px' }}>
      I'm yellow component
    </div>
  );
}

function App() {
  return (
    <div >
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
}

export default App;
