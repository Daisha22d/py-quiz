import React from 'react';
import Quiz from '../src/Quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PyQuiz</h1>
        <p>
          A mini quiz to test your Python knowledge!
        </p>
      </header>
      <div className="App-content">
        <Quiz />
      </div>
    </div>
  );
}

export default App;
