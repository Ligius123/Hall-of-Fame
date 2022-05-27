import React, { useState } from "react";
import classes from "./Quizz.module.css";
const QuizzHalep = () => {
  const questions = [
    {
      questionText: "Which is the first GrandSlem tour won by Simona?",
      answerOptions: [
        { answerText: "Australian Open", isCorrect: false },
        { answerText: "Roland Garros", isCorrect: false },
        { answerText: "Wimbledon", isCorrect: false },
        { answerText: "U.S. Open", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which is the favourite play surface of Simona according to statistics?",
      answerOptions: [
        { answerText: "Slag", isCorrect: false },
        { answerText: "Grass", isCorrect: false },
        { answerText: "Hard surface", isCorrect: true },
        { answerText: "Carpet", isCorrect: false },
      ],
    },
    {
      questionText: "Who is her new coach?",
      answerOptions: [
        { answerText: "Victor Ioniță", isCorrect: false },
        { answerText: "Patrick Mouratoglou⁠", isCorrect: true },
        { answerText: "Kim Clijsters", isCorrect: false },
        { answerText: "Darren Cahill", isCorrect: false },
      ],
    },
    {
      questionText: "Which is her start year in professional Tennis?",
      answerOptions: [
        { answerText: "2006", isCorrect: true },
        { answerText: "2008", isCorrect: false },
        { answerText: "2010", isCorrect: false },
        { answerText: "2007", isCorrect: false },
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

export default QuizzHalep;
