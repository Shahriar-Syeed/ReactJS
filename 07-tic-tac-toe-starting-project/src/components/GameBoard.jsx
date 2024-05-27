import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard,setGameBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  
  function  handelSelectSquare(rowIndex,colIndex){
        console.log(rowIndex,colIndex);
    setGameBoard((prevGameBoard)=>{
      const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])]
      updatedBoard[rowIndex][colIndex]="X";
      console.log("prevGameBoard",prevGameBoard,"updatedBoard", updatedBoard);
      return updatedBoard;
    });
  }
  console.log("gameBoard", gameBoard);
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex)=><li key={rowIndex}>
        <ol>
            {row.map((playerSymbol, colIndex)=><li key={colIndex}><button onClick={()=> handelSelectSquare(rowIndex, colIndex)}>{playerSymbol} {()=>console.log('playerSymbol', playerSymbol)}</button></li>)}
        </ol>
      </li>)}
    </ol>
  );
}
