import { useState, useRef } from "react";
export default function Player() {
  const playerName =useRef();//will not re-executed
  const [enterPlayerName,setEnterPlayerName]=useState(null);
  // const [submittedName,setSubmittedName]=useState(false);
  // function handleChange (event){
  //   setSubmittedName(false);
  //   setEnterPlayerName(event.target.value);
  // }

  function handleClick(){
    // setSubmittedName(true);
    setEnterPlayerName(playerName.current.value);
    playerName.current.value=null;//breaking the idea that react should manipulate the dome
  }
  
  return (
    <section id="player">
      <h2>Welcome {
      // submittedName ? enterPlayerName :"unknown entity"
       enterPlayerName ?? "unknown entity"
      //  playerName.current ? playerName.current.value : "unknown entity"//will not change the ui value
      }
      </h2>
      <p>
        <input 
        ref={playerName} 
        type="text" 
        // onChange={handleChange} 
        // value={enterPlayerName} 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
