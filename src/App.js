/* eslint-disable no-unused-vars */

import './App.css';
import Hello from './components/Hello';
import ApiCall from './components/ApiCall';
import Toggle from './components/Toggle';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState(false)
  
  const [select, setSelect] = useState(null)

  // onChange for Toggle component 
  const onChange = (state) => {
    setState(state => !state)
  }

  // onSelect for Card Component
  const onSelect = (e) => {
    console.log(e)
    
    // setSelect(e.target.value)
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
     <br />
     <Card onSelect={onSelect} />
    </div>
  );
}

export default App;
