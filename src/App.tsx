import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [state, setState] = useState<number>(0);
  return (
    <div data-test="component-app" className="App">
      <h1 data-test="component-display">
        Counter:&nbsp;<span data-test="component-count">{state}</span>
      </h1>
      <button
        data-test="component-button"
        type="button"
        onClick={() => setState(state + 1)}
      >
        Increment Counter
      </button>
    </div>
  );
};

export default App;
