import { useState } from 'react';
import './App.css';

function PlayerCard({name, score, increaseScore}) {
  return (
    <>
      <h2>Welcome, {name}! Your score is: {score}</h2>
      <button onClick={() => increaseScore(score + 1)}> Boost Score </button>
    </>
  );
}

function App(){
  const [count, setCount] = useState(0);
  const [playerName, setPlayerName] = useState("Guest");

  const squad = ["takao", "Broly", "Goku", "Vegeta"];

  let counterColor = "white";

  if(count > 0){
    counterColor = "green";
  } else if (count < 0) {
    counterColor = "red";
  }

  return (
    <div>
      {
        // Fix 1: { } ki jagah ( ) lagaya taaki automatically render ho jaye
        squad.map((player) => (
          <PlayerCard name={player} score={count} increaseScore={setCount} />
        ))
      }

      <input 
        type="text"
        placeholder="Enter your name"
        onChange={(event) => setPlayerName(event.target.value)}
      />

      <hr />

      <h1 style={{ color: counterColor}}> {count} </h1>
      
      {/* Fix 2: Button ko theek se ek line mein likha */}
      <button onClick={() => setCount(count - 1)}> Decrement </button>
      <button onClick={() => setCount(0)}> Reset </button>
      <button onClick={() => setCount(count + 1)}> Increment </button>
    </div>
  );
}

export default App;