import { useEffect, useState } from "react";

export default function QuestionTimer({timeout, onTimeout}){

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(()=>{
        // const timer = setTimeout(()=>{
        //     onTimeout();
        // }, timeout);
        console.log("setting time");
        setTimeout(onTimeout, timeout);
        

        // return (
        //     ()=>{
        //         clearTimeout(timer);
        //     }
        // );
    },[timeout, onTimeout]);
    useEffect(()=>{
        
            setInterval(()=>{
                setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
                console.log("interval time");
                console.log(remainingTime );
            }, 100);
        // const interval = setInterval(onTimeout, timeout);

        // return (
        //     ()=>{
        //         clearInterval(interval);
        //     }
        // );
    },[]);

    return <progress id="question-time" max={timeout} value={remainingTime}/>;
}