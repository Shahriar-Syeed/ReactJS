import { useState } from "react";
export default function Player() {
  const [a,b]=useState("unknown entity")

  
  return (
    <section id="player">
      <h2>Welcome {a}</h2>
      <p>
        <input type="text" onChange={(e)=> b(e.target.value)} />
        <button>Set Name</button>
      </p>
    </section>
  );
}
