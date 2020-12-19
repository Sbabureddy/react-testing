/* eslint-disable no-unused-vars */

import "./App.css";
import Hello from "./components/Hello";
import Toggle from "./components/Toggle";
import { useState, lazy, Suspense } from "react";
import Card from "./components/Card";

const ApiCall = lazy(() => import("./components/ApiCall"));

const renderLoader = () => <p>Loading....</p>;

function App() {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState(false);

  // onChange for Toggle component
  const onChange = (state) => {
    setState((state) => !state);
  };

  // onSelect for Card Component
  const onSelect = (e) => {
    return e;
  };

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
      <Hello name="React" />
      <Suspense fallback={renderLoader()}>
        <ApiCall />
      </Suspense>
      <Toggle onChange={onChange} />
      <br />
      <Card onSelect={onSelect} />
    </div>
  );
}

export default App;
