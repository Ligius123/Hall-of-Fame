import React, { useState } from "react";
import classes from "./Quizz.module.css";
const Quizz = () => {
  const questions = [
    {
      questionText: "How many 1st Olympics games positions does Ana has?",
      answerOptions: [
        { answerText: "0", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "1", isCorrect: true },
        { answerText: "3", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which is the year when Ana conquered the first place at team category?",
      answerOptions: [
        { answerText: "2004", isCorrect: false },
        { answerText: "2016", isCorrect: true },
        { answerText: "2008", isCorrect: false },
        { answerText: "2019", isCorrect: false },
      ],
    },
    {
      questionText: "Which is the club where Ana has started her career in Fencing?",
      answerOptions: [
        { answerText: "Steaua", isCorrect: true },
        { answerText: "Dinamo", isCorrect: false },
        { answerText: "CSU Politehnica Timisoara", isCorrect: false },
        { answerText: "ACS Floreta Timisoara", isCorrect: false },
      ],
    },
    {
      questionText: "How many books did Ana published untill now?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "4", isCorrect: true },
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

export default Quizz;
