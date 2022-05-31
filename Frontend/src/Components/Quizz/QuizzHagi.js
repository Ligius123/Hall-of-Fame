import React, { useState } from "react";
import classes from "./Quizz.module.css";
const QuizzHagi = () => {
  const questions = [
    {
      questionText: "For which football club Hagi was the most efficient?",
      answerOptions: [
        { answerText: "Real Madrid", isCorrect: false },
        { answerText: "Brescia", isCorrect: false },
        { answerText: "Steaua", isCorrect: false },
        { answerText: "Galatasaray", isCorrect: true },
      ],
    },
    {
      questionText: "Which is the retirement age of Hagi?",
      answerOptions: [
        { answerText: "35", isCorrect: false },
        { answerText: "34", isCorrect: false },
        { answerText: "36", isCorrect: true },
        { answerText: "37", isCorrect: false },
      ],
    },
    {
      questionText:
        "How many goals did Hagi score at National team of Romania?",
      answerOptions: [
        { answerText: "35", isCorrect: true },
        { answerText: "42", isCorrect: false },
        { answerText: "28", isCorrect: false },
        { answerText: "36", isCorrect: false },
      ],
    },
    {
      questionText: "What is Hagi's nickname?",
      answerOptions: [
        { answerText: "The Wild Cat", isCorrect: false },
        { answerText: "Maradonna from the Carpathians", isCorrect: true },
        { answerText: "The King", isCorrect: false },
        { answerText: "El Matador", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <section className={classes.wrapper}>
      <div className={classes.app}>
        {showScore ? (
          <div className={classes.scoreSection}>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className={classes.questionSection}>
              <div className={classes.questionCount}>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className={classes.questionText}>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className={classes.answerSection}>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className={classes.customButton}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default QuizzHagi;
