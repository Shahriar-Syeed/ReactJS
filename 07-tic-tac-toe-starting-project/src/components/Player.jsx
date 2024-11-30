import { useState } from "react";

export default function Player ({name, symbol}){
    const [isEditing, setIsEditing]=useState(false);
    function handelEditClick(){
        // setIsEditing(isEditing ? false : true);
        // setIsEditing(!isEditing);
        setIsEditing((editing)=>!editing);
    }

    let playerName = <span className="player-name">{name}</span>;
    (isEditing) &&  (playerName = <input type="text" required id="name" value={name}/>);

    return <li>
    <span className="player">
        {playerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={()=>handelEditClick()}>{isEditing ? "Save":"Edit" }</button>
  </li>
}