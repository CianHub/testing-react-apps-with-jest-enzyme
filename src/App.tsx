import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [state, setState] = useState<number>(0);
  const [showError, setShowError] = useState<boolean>(false);

  const handleInc = () => {
    setState(state + 1);
    showError && setShowError(false);
  };

  const handleDec = () => {
    if (state > 0) {
      setState(state - 1);
    } else {
      setShowError(true);
    }
  };

  return (
    <div data-test="component-app" className="App">
      <h1 data-test="component-display">
        Counter:&nbsp;<span data-test="component-count">{state}</span>
      </h1>
      <button
        data-test="component-button"
        type="button"
        onClick={() => handleInc()}
      >
        Increment Counter
      </button>
      <button
        data-test="component-dec-button"
        type="button"
        onClick={() => handleDec()}
      >
        Decrement Counter
      </button>
      {showError && <p data-test="component-error">Count must be 0 or above</p>}
    </div>
  );
};

export default App;
