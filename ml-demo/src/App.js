import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async () => {
    // Send input to the backend (ML model)
    const response = await fetch('/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });
    const data = await response.json();
    setOutput(data.prediction);
  };

  return (
      <div className="App">
        <h1>ML Model Demo</h1>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter input"
        />
        <button onClick={handleSubmit}>Predict</button>
        {output && <p>Prediction: {output}</p>}
      </div>
  );
}

export default App;