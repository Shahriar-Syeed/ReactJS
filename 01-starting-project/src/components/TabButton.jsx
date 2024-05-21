export default function TabButton(props){
  function handleClick(){
    console.log("hello worls");
  }
  return (
    <li><button onClick={handleClick}>{props.children}</button></li>
  );};
  export function TabButton2({children, onSelect, isSelected}){
   console.log("APP component ");
    function handleClick(){
      console.log("hello worls");
    }
    return (
      <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
      
    );};
    
    export function TabButton3({label}){
      function handleClick(){
        console.log("hello worls");
      }
      return (
    <li><button onClick={handleClick}>{label}</button></li>
  );};