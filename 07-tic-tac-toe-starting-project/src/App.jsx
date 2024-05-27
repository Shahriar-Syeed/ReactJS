import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer,setActivePlayer] = useState('X');

  function handelSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer)=> currActivePlayer === "X" ? "O": "X");
    setGameTurn(prevTurns=>{
      let currentPlayer = 'X';
      if(prevTurns.length>0 && prevTurns[0]==='X'){
        currentPlayer = "O";
      }
      const updatedTurns =[{square:{row:rowIndex, col:colIndex,}, player:currentPlayer, },...prevTurns];
      return updatedTurns;
    });
  }
  console.log("activePlayer", activePlayer)

  return (
    <main>
      <div id="game-container">
         <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard onSelectSquare={handelSelectSquare} activePlayerSymbol={activePlayer} turns={gameTurn} />
      </div>
      <Log />
    </main>
  )
}

export default App
