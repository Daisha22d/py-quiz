import React from "react";
import Questions from "../components/Questions.jsx";

const AnswerChoices = ({ answerChoices, handleAnswerButtonClick, currentQuestion }) => {
  return (
    <div className="Answer-section">
      {answerChoices.map((answerChoice, index) => (
        <button
          key={index}
          onClick={() => handleAnswerButtonClick(answerChoice)}
          className={answerChoice === Questions[currentQuestion].correctAnswer ? "correct" : "incorrect"}
        >
          {answerChoice}
        </button>
      ))}
    </div>
  );
};

export default AnswerChoices;




// import React from "react";
// import Questions from "../components/Questions.jsx";
// import "./AnswerChoices.css";

// const AnswerChoices = ({ answerChoices, handleAnswerButtonClick }) => {
//   return (
//     <div className="Answer-section">
//       {answerChoices.map((answerChoice, index) => (
//         <button
//           key={index}
//           onClick={() => handleAnswerButtonClick(answerChoice)}
//           className="default"
//         >
//           {answerChoice}
//         </button>
//       ))}
//     </div>
//   );
// };


// export default AnswerChoices;


// import React from "react";
// import Questions from "../components/Questions.jsx";

// const AnswerChoices = ({ answerChoices, handleAnswerButtonClick, currentQuestion }) => {
//   return (
//     <div className="Answer-section">
//       {answerChoices.map((answerChoice, index) => (
//         <button
//           key={index}
//           onClick={() => handleAnswerButtonClick(answerChoice)}
//           className={answerChoice === Questions[currentQuestion].correctAnswer ? "correct" : "incorrect"}
//         >
//           {answerChoice}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default AnswerChoices;


