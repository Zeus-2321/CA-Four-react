import React, {useRef} from 'react';
import "./question.css";

export default function QuestionBox({questions,optionClicked,currentQuestion}) {
  const highlightQuestion = useRef();
  return (  
    <div id="questionBox" >
        <h2>
          Question: {currentQuestion + 1} out of {questions.length}
        </h2>
        <h3 ref={highlightQuestion} className="question-text">{questions[currentQuestion].text}</h3>

        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
        <div id='highlight'>
          <button onClick={highlight}>Highlight</button>
          <button onClick={nohighlight}>Remove Highlight</button>
        </div>
    </div>

  )
  



// defining function for highlightinng questions.


  function highlight(){
    highlightQuestion.current.style.color = "#ff0000";
  }

  function nohighlight(){
    highlightQuestion.current.style.color = "#0000de";
  }
}
