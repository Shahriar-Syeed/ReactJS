import {useState} from 'react';
import QUESTIONS from '../questions.js';

import quizComplete from '../assets/quiz-complete.png'


export default function Quiz (){
    // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); // redundant due to can be find the indx from the length of array answers
     const [userAnswers, setUserAnswers] = useState([]);

     const activeQuestionIndex = userAnswers.length;


     const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
     console.log('quizIsComplete', quizIsComplete)

     function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevAnswer) => [...prevAnswer,selectedAnswer ]);
        console.log(userAnswers);
     }

     if(quizIsComplete){
        return (
            <div id="summary">
                <img src={quizComplete} alt="Trophy icon" />
                <h2>Quiz is complete</h2>
            </div>
        );
     }

     
     const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
     shuffledAnswers.sort(()=>Math.random()-0.5);


         return (
         <div id="quiz">
             <div id='question'>
                 <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                 <ul id='answers'>
                     {shuffledAnswers.map((answer)=> <li key={answer} className='answer'><button onClick={()=>handleSelectAnswer(answer)}>{answer}</button></li>)}
                 </ul>
             </div>
         </div>
     );
     
}