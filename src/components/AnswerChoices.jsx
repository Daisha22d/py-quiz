import React from "react";

const AnswerChoices = ({ answerChoices, handleAnswerButtonClick }) => {
  return (
    <div className="Answer-section">
      {answerChoices.map((answerChoice, index) => (
        <button
          key={index}
          onClick={() => handleAnswerButtonClick(answerChoice.isCorrect)}
          className={answerChoice.isCorrect ? "correct" : "incorrect"}
        >
          {answerChoice.answerText}
        </button>
      ))}
    </div>
  );
};

export default AnswerChoices;
