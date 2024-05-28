
import { useState } from "react";

export default  function Player ({initialName, symbol, isActive, onChangeName}){
const [playerName, setPlayerName]= useState(initialName);
const [ isEditing, setIsEditing] = useState(false);

function handleEditClick(){
    // setIsEditing(!isEditing); //=>true (previous value = false) schedules as state update to true
    // setIsEditing(!isEditing); //=>false X (previous value = false) =>true schedules as state update to true
    // setIsEditing((editing)=>!editing); // it will pass the updated latest value to the next function
    setIsEditing((editing)=>!editing);
    if(isEditing){
        onChangeName(symbol, playerName);
    }
}
function handleChange(event){
    console.log(event, event.target, event.target.value);
    setPlayerName(event.target.value);
}
let editablePlayerName = <span className="player-name">{playerName}</span>;

if (isEditing){
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required />;
   
}
    return (
        <li className={isActive ? 'active': null}>
            <span className='player'>
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={()=> handleEditClick()}>{isEditing?'Save':'Edit'}</button>
        </li>
    )
}