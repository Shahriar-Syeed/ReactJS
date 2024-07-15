import { useState } from "react";
import QuestionTimer from "../QuestionTimer.jsx";
import Answers from "./Answers.jsx";

import QUESTIONS from "../questions.js";

export default function Question({
    index,
//   questionText,
//   answers,
  onSelectAnswer,
//   selectedAnswer,
  handleSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "unanswered",
    isCorrect: null,
  });
  
  let timer = 15000;

  if (answer.selectedAnswer !== 'unanswered'){
    timer = 1000;
  }
  if (answer.isCorrect !== null){
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(()=>{
        onSelectAnswer(answer);
      },2000)
    }, 1000);
  }

  let answerState = 'unanswered';

  if(answer.selectedAnswer !=='unanswered' && answer.isCorrect !== null){
    answerState = answer.isCorrect ? 'correct': 'wrong';
  } else if(answer.selectedAnswer !== 'unanswered'){
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        //key={activeQuestionIndex} //to recreate and again progressbar counting
        timeout={timer}
        onTimeout={answer.selectedAnswer === 'unanswered' ? handleSkipAnswer : null} 
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
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
      <Answers
        answers={QUESTIONS[index].answers}
        // selectedAnswer={selectedAnswer}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        // onSelect={onSelectAnswer}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
