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
        <Box boxes={currentBoxes} onNewBox={newBox} />
        <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
