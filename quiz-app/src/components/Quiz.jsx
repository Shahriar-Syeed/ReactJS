import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";

import QuestionTimer from "../QuestionTimer.jsx";
import quizComplete from "../assets/quiz-complete.png";

export default function Quiz() {
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); // redundant due to can be find the indx from the length of array answers
  const [answerState,setAnswerState]=useState('unanswered');
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = answerState === 'unanswered' ? userAnswers.length : userAnswers.length -1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  console.log("quizIsComplete", quizIsComplete);

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {

    setAnswerState('answered');
    
    setUserAnswers((prevAnswer) => [...prevAnswer, selectedAnswer]);
    // console.log(userAnswers);

    setTimeout(()=>{
      if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
        setAnswerState('correct');
      }else {
        setAnswerState('wrong');
      }
      setTimeout(()=>{
        setAnswerState('unanswered')
      },2000)
    }, 1000);
  },
  [activeQuestionIndex]);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="Trophy icon" />
        <h2>Quiz is complete</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex} //to recreate and again progressbar counting
          timeout={4000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {

            let cssClass ='';

            if(answerState === 'answered'){}
            if(answerState === 'correct'){}


            return <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)} className={'hi'}>
                {answer}
              </button>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
}
