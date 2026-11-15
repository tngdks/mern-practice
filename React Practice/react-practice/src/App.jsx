import { useState } from 'react';
import './App.css';

function PlayerCard({ name, index, deletePlayer }) {

  const [playerScore, setPlayerScore] = useState(0);

  const [showScore, setShowScore] = useState(true);

  return (
    <div style={{ marginBottom: "20px"}}>
      <h2>Welcome, {name}!</h2>

      {showScore ? (
        <h3> Your Score is: {playerScore}</h3>
      ) : (
        <h3> Score is Hidden </h3>
      )}

      <button onClick={() => setPlayerScore(playerScore + 1)}> Boost Score </button>

      <button 
        style={{ marginleft:"10px", color:"red"}}
        onClick={() => deletePlayer(index)}>
          Delete Player
        </button>

      <button 
        style={{ marginLeft:"10px"}}
        onClick = {() => setShowScore(!showScore)}
      >
        Hide/Show Score
      </button>
    </div>
  );
}

function App(){
  const [count, setCount] = useState(0);
  const [playerName, setPlayerName] = useState("Guest");
  const [searchText, setSearchText] = useState("");

  const [squad, setSquad] = useState(["takao", "Goku", "Broly", "Vegeta"]);

  const deletePlayer = (indexToRemove) => {
    const newSquad = squad.filter((player, index) => index !== indexToRemove);
    setSquad(newSquad);
  };

  let counterColor = "white";

  if(count > 0){
    counterColor = "green";
  } else if (count < 0) {
    counterColor = "red";
  }

  return (
    <div>
      <div style ={{ marginBottom: "30px", padding:"10px", backgroundColor: "#f0f0f0"}}>
        <h3> Search Squad: </h3>
        <input
          type="text"
          placeholder="Type to search player..."
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>
      
      {
        // Fix 1: { } ki jagah ( ) lagaya taaki automatically render ho jaye
        squad
          .filter((player) => player.toLowerCase().includes(searchText.toLowerCase()))
          .map((player, index) => (
            <PlayerCard
              key={index} 
              name={player}
              index = {index}
              deletePlayer = {deletePlayer} 
            />
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