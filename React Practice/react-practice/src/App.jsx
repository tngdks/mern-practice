import { useState } from 'react';
import './App.css';

function PlayerCard({ name }) {

  const [playerScore, setPlayerScore] = useState(0);

  return (
    <div style={{ marginBottom: "20px"}}>
      <h2>Welcome, {name}! Your score is: {playerScore}</h2>

      <button onClick={() => setPlayerScore(playerScore + 1)}> Boost Score </button>
    </div>
  );
}

function App(){
  const [count, setCount] = useState(0);
  const [playerName, setPlayerName] = useState("Guest");

  const [squad, setSquad] = useState(["takao", "Goku", "Broly", "Vegeta"]);

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
        squad.map((player, index) => (
          <PlayerCard key={index} name={player} />
        ))
      }

      <div style={{ marginTop: "40px"}}>
      <input 
        type="text"
        placeholder="Enter your name"
        onChange={(event) => setPlayerName(event.target.value)}
      />
      <button onClick ={() => setSquad([...squad, playerName])}> Add Player </button>
    </div>
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