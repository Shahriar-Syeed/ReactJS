// import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns, activePlayerSymbol}) {
  let gameBoard =initialGameBoard;
  let playerSymbol="O";

  for(const turn of turns){
    const {square, player} =turn;
    const {row, col} =square;
    gameBoard[row][col]=player;
    
  }
  // const [gameBoard,setGameBoard] = useState(initialGameBoard);

  // function  handleSelectSquare(rowIndex,colIndex){
  //       console.log(rowIndex,colIndex);
  //   setGameBoard((prevGameBoard)=>{
  //     const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])]
  //     updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
  //     console.log("prevGameBoard",prevGameBoard,"updatedBoard", updatedBoard);
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }
  // console.log("gameBoard", gameBoard);
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex)=><li key={rowIndex}>
        <ol>
            {/* {row.map((playerSymbol, colIndex)=><li key={colIndex}><button onClick={()=> handleSelectSquare(rowIndex, colIndex)}>{playerSymbol} {()=>console.log('playerSymbol', playerSymbol)}</button></li>)} */}
            {row.map((playerSymbol, colIndex)=><li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>)}
        </ol>
      </li>)}
    </ol>
  );
}
