
import './App.css';
import Hello from './components/Hello';
import ApiCall from './components/ApiCall';
import Toggle from './components/Toggle';
import { useState } from 'react';

function App() {
  
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState(false)
  const onChange = (state) => {
    setState(state => !state)
  }
  
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
     <Toggle onChange={onChange} />
    </div>
  );
}

export default App;
