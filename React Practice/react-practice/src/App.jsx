import { useState } from 'react';
import './App.css';

function App(){
  const [count, setCount] = useState(0);

  const [playerName, setPlayerName] = useState("Guest");

  let counterColor = "white";

  if(count > 0){
    counterColor = "green";
  } else if (count < 0) {
    counterColor = "red";
  }

  return (
<div>
  <h2> Welcome {playerName} </h2>
  <input 
    type="text"
    placeholder="Enter your name"
    onChange={(event) => setPlayerName(event.target.value)}/>

    <hr />

    <h1 style = {{ color: counterColor}}> {count} </h1>
    <button onClick = {() => setCount(count - 1)}> - Decrement </button>
    <button onClick = {() => setCount(0)}> Reset </button>      <button onClick = {() => setCount(count + 1)}> + Increment </button>
</div>
  );
}

export default App;