import { useState } from "react";
export default function Player() {
  const [enterPlayerName,setEnterPlayerName]=useState(null);
  const [submittedName,setSubmittedName]=useState(false);
  function handleChange (event){
    setSubmittedName(false);
    setEnterPlayerName(event.target.value);
  }

  function handleClick(){
    setSubmittedName(true);
  }
  
  return (
    <section id="player">
      <h2>Welcome {submittedName ? enterPlayerName :"unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
