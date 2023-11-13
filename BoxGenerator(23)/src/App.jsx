import React, { useState } from "react";
import Box from './components/Box';
import './App.css';

function App() {
  const [currentBoxes, setCurrentBoxes] = useState([]);

  const newBox = (box) => {
    setCurrentBoxes(currentBoxes => [...currentBoxes, box]);
  };

  const handleReset = () => {
    setCurrentBoxes([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Box boxes={currentBoxes} onNewBox={newBox} />
        <button onClick={handleReset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
