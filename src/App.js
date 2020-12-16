import './App.css';
import Hello from './components/Hello';
import ApiCall from './components/ApiCall';

function App() {
  return (
    <div className="App">
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
     <Hello name="React"/>
     <ApiCall id="1" />
    </div>
  );
}

export default App;
