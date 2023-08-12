import React, { useState } from 'react';
import "../scss/quiz.scss";

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'How does your skin feel throughout the day?',
      answerOptions: ['Oily and shiny', 'Normal and balanced', 'Dry and tight', 'Sensitive and irritated'],
    },
    {
      question: 'How often do you have to blot your skin throughout the day?',
      answerOptions: ['Rarely or never', 'Occasionally', 'Frequently', 'Constantly'],
    },
    {
      question: 'How does your skin react to new products?',
      answerOptions: ['I rarely have any reactions', 'I sometimes get breakouts or irritation', 'I often have reactions to new products'],
    },
    {
      question: 'What is your skin\'s main concern?',
      answerOptions: ['Oiliness', 'Dryness', 'Acne', 'Sensitivity'],
    },
    {
      question: 'How does your skin feel after cleansing?',
      answerOptions: ['Tight and dry', 'Comfortable and balanced', 'Oily and greasy', 'Sensitive and irritated'],
    },
    {
      question: 'How often do you experience breakouts?',
      answerOptions: ['Rarely or never', 'Occasionally', 'Frequently', 'Constantly'],
    },
    {
      question: 'How does your skin react to the weather?',
      answerOptions: ['It gets oily in hot weather and dry in cold weather', 'It stays pretty much the same regardless of the weather', 'It gets dry in hot weather and oily in cold weather'],
    },
  ]);

  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // User's skin type based on their answers to the questions.
    const skinType = {
      oily: 0,
      normal: 0,
      dry: 0,
      sensitive: 0,
      combination: 0,
    };

    questions.forEach((question) => {
      const index = question.answerOptions.indexOf(answer);
      skinType[question.skinType] += index + 1;
    });

    // Determine the user's skin type based on the scores.
    const maxScore = Math.max(skinType.oily, skinType.normal, skinType.dry, skinType.sensitive, skinType.combination);
    const skinTypes = Object.keys(skinType);
    const userSkinType = skinTypes[skinType.indexOf(maxScore)];

    // Display the results.
    alert(`Your skin type is ${userSkinType}.`);
  };

  return (
    <div className="quiz-container">
      {questions.map((question, index) => (
        <div key={index}>
          <h1>{question.question}</h1>
          <select value={answer} onChange={handleAnswerChange}>
            {question.answerOptions.map((answerOption) => (
              <option key={answerOption} value={answerOption}>
                {answerOption}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};


export default Quiz;

