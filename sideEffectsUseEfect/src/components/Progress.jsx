import { useEffect, useState } from "react";

export default function Progress( {TIMER}) {
    const [remainingTime, setRemainingTime] = useState(TIMER);
    useEffect(() => {
        const interval = setInterval(() => {
          console.log("interval progress time");
          setRemainingTime((prevTime) => prevTime - 10);
        }, 10);
    
        return () => {
          console.log("Cleaning up progress timer");
          clearInterval(interval);
        };
      }, []);
  return (
    <>
      <progress value={remainingTime} max={TIMER} />
      &nbsp; &nbsp;
      <span>{remainingTime / 1000} second</span>
    </>
  );
}
