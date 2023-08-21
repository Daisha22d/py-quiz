import React, { useState } from 'react';
import '../scss/quiz.scss';

const PythonLearningQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the primary purpose of Python?',
      answerOptions: [
        'Web development',
        'Data analysis',
        'Machine learning',
        'General-purpose programming'
      ],
      correctAnswer: 'General-purpose programming',
      selectedAnswer: ''
    },
    {
      question: 'Which keyword is used to define a function in Python?',
      answerOptions: ['def', 'function', 'define', 'func'],
      correctAnswer: 'def',
      selectedAnswer: ''
    },
    {
      question: 'What is the output of the following code?\nprint(2 + 3 * 4)',
      answerOptions: ['20', '14', '15', '23'],
      correctAnswer: '14',
      selectedAnswer: ''
    },
    {
      question: 'What does the "len()" function do?',
      answerOptions: [
        'Converts a value to lowercase',
        'Returns the square root of a number',
        'Calculates the length of a string or list',
        'Generates random numbers'
      ],
      correctAnswer: 'Calculates the length of a string or list',
      selectedAnswer: ''
    },
    {
      question: 'Which of the following is NOT a valid Python variable name?',
      answerOptions: ['my_var', '123var', '_variable', 'variable_name'],
      correctAnswer: '123var',
      selectedAnswer: ''
    },
    {
      question: 'Which data type is used to store a sequence of characters?',
      answerOptions: ['int', 'float', 'str', 'list'],
      correctAnswer: 'str',
      selectedAnswer: ''
    },
    {
      question: 'What is the purpose of the "if" statement in Python?',
      answerOptions: [
        'To define a function',
        'To perform arithmetic calculations',
        'To create a loop',
        'To make conditional decisions'
      ],
      correctAnswer: 'To make conditional decisions',
      selectedAnswer: ''
    }

    
  ]);

  const handleAnswerChange = (e, index) => {
    const newQuestions = [...questions];
    newQuestions[index].selectedAnswer = e.target.value;
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let correctCount = 0;
    questions.forEach((question) => {
      if (question.selectedAnswer === question.correctAnswer) {
        correctCount++;
      }
    });

    const score = (correctCount / questions.length) * 100;
    alert(`Your score: ${score.toFixed(2)}%`);
  };

  return (
    <div className="quiz-container">
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <select
            value={question.selectedAnswer}
            onChange={(e) => handleAnswerChange(e, index)}
          >
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

export default PythonLearningQuiz;
