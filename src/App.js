import React from 'react';
import Questions from './components/Questions';
import Quiz from '../src/Quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PyQuiz</h1>
        <p>
          A mini quiz to tell your python knowledge!
        </p>
      </header>
      <Quiz />
    </div>
  );
}

export default App;
