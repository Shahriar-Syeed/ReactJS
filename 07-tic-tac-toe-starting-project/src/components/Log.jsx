export default function Log({turns}) {
    
    {console.log(turns)}
  return (
    <ol id="log">

      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} select {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
