import React, { useState } from "react";
import classes from "./Quizz.module.css";
const QuizzComaneci = () => {
  const questions = [
    {
      questionText: "Which is her nickname?",
      answerOptions: [
        { answerText: "The catlike", isCorrect: false },
        { answerText: "The hope", isCorrect: false },
        { answerText: "The goddess of Montreal", isCorrect: true },
        { answerText: "The special one", isCorrect: false },
      ],
    },
    {
      questionText: "Which is her start year in gymnastics?",
      answerOptions: [
        { answerText: "1972", isCorrect: false },
        { answerText: "1967", isCorrect: false },
        { answerText: "1975", isCorrect: false },
        { answerText: "1970", isCorrect: true },
      ],
    },
    {
      questionText: "Which is the year when Nadia conquered the clean 10?",
      answerOptions: [
        { answerText: "1976", isCorrect: true },
        { answerText: "1975", isCorrect: false },
        { answerText: "1977", isCorrect: false },
        { answerText: "1978", isCorrect: false },
      ],
    },
    {
      questionText: "Which is her birthday year?",
      answerOptions: [
        { answerText: "12 November 1961", isCorrect: true },
        { answerText: "12 November 1963", isCorrect: false },
        { answerText: "20 June 1960", isCorrect: false },
        { answerText: "28 August 1970", isCorrect: false },
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

export default QuizzComaneci;
