import React from 'react';
import './result.css';

export default function Result({setScore,score, setCurrentQuestion, setDisplayResults, length}) {
  
// Defining function for restarting the game.

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setDisplayResults(false);
  };


  return (
    <div id='result'>
      <h1>Final Results</h1>
      <h2>
        {score} / {length} correct
      </h2>
      <button onClick={() => restartQuiz()}>Restart Quiz</button>
  </div>
  )
}
