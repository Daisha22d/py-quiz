import React, { useState } from "react";
import "./Quiz.css";
import Questions from "../src/components/Questions";
import AnswerChoices from "../src/components/AnswerChoices";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (selectedAnswer) => {
    const correctAnswer = Questions[currentQuestion].correctAnswer;
  
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  

  return (
    <div className="Quiz">
      {showScore ? (
        <div className="Score-section">
          You scored {score} out of {Questions.length}
        </div>
      ) : (
        <>
          <div className="Question-section">
            <div className="Question-count">
              <span>Question {currentQuestion + 1}</span>/{Questions.length}
            </div>
            <div className="Question-text">
              {Questions[currentQuestion].question}
            </div>
          </div>
          <AnswerChoices
            answerChoices={Questions[currentQuestion].answerChoices}
            handleAnswerButtonClick={handleAnswerButtonClick}
            currentQuestion={currentQuestion}
          />
        </>
      )}
    </div>
  );
}

export default Quiz;

// console.log("Quiz component loaded");