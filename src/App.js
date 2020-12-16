import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import ApiCall from './components/ApiCall';

function App() {
  return (
    <div className="App">
     <Hello name="React"/>
     <ApiCall id="1" />
    </div>
  );
}

export default App;
