import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [displayResults, setDisplayResults] = useState(false);
  const [score, setScore] = useState(0);



  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const optionClicked = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setDisplayResults(true);
    }
  };
 
  return (
    <div>
      <div id="header">
      <h1>Quiz App</h1>
      <button onClick={toggleMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <style jsx>{`
        body {
          background-color: ${isDarkMode ? 'black' : 'white'};
          color: ${isDarkMode ? 'white' : 'black'};
          transition: background-color 0.5s ease-in-out, color 0.3s ease-in-out;
        }
        button{
          height:4vh;
          cursor:pointer;
          border-radius: 2vh;
          background-color: ${isDarkMode ? 'white' : 'black'};
          color: ${isDarkMode ? 'black' : 'white'};
          transition: background-color 0.5s ease-in-out, color 0.3s ease-in-out;
        }
      `}</style>
      </div>
      {displayResults ? <Result setScore={setScore} score={score} setCurrentQuestion={setCurrentQuestion} setDisplayResults={setDisplayResults} length={questions.length}/> : 
          <QuestionBox questions={questions} optionClicked={optionClicked} currentQuestion={currentQuestion}/>}
    </div>
  );
}

export default App;
