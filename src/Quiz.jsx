import React, { useState } from "react";
import "./Quiz.css";
import Questions from "../src/components/Questions"; 

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
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
          <div className="Answer-section">
            {Questions[currentQuestion].answerChoices.map((answerChoice, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(answerChoice.isCorrect)}
                className={answerChoice.isCorrect ? "correct" : "incorrect"}
              >
                {answerChoice.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
