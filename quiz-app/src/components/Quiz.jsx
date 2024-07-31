import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";

// import QuestionTimer from "../QuestionTimer.jsx";
import Summary from "./Summary.jsx";
// import Answers from "./Answers.jsx";

export default function Quiz() {
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); // redundant due to can be find the indx from the length of array answers
  // const shuffledAnswers =  useRef();
  // const [answerState, setAnswerState] = useState("unanswered");
  const [userAnswers, setUserAnswers] = useState([]);

  // const activeQuestionIndex =
    // answerState === "unanswered" ? userAnswers.length : userAnswers.length - 1;
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  console.log("quizIsComplete", quizIsComplete);

  console.log(userAnswers);
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      // setAnswerState("answered");

      setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);

      // setTimeout(() => {
      //   if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
      //     setAnswerState("correct");
      //   } else {
      //     setAnswerState("wrong");
      //   }
      //   setTimeout(() => {
      //     setAnswerState("unanswered");
      //   }, 6000);
      // }, 4000);
    },
    [userAnswers]
  );
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    );
  }

  // const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  // if(!shuffledAnswers.current){//if shuffledAnswers. current is undefined
  //   shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
  //   shuffledAnswers.current.sort(() => Math.random() - 0.5);
  // }

  return (
    <div id="quiz">
      {/* <div id="question">
        <QuestionTimer
          key={activeQuestionIndex} //to recreate and again progressbar counting
          timeout={15000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2> */}
      {/* <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = userAnswers[userAnswers.length -1] === answer;
            let cssClass ='';

            if(answerState === 'answered' && isSelected){
              cssClass = 'selected'
            }
            else if((answerState === 'correct' || answerState === 'wrong')&& isSelected){
              cssClass=answerState;
            }
            return (<li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>
                {answer}
              </button>
            </li>);
          })}
        </ul> */}
      {/* <Answers
          key={activeQuestionIndex}
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div> */}
      <Question
      key={activeQuestionIndex}
      index={activeQuestionIndex}
        // questionText={QUESTIONS[activeQuestionIndex].text}
        // answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        // selectedAnswer={userAnswers[userAnswers.length - 1]}
        // answerState={answerState}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
