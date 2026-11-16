import { useState, useEffect } from 'react';
import './App.css';

function PlayerCard({ name, index, deletePlayer }) {

  const [playerScore, setPlayerScore] = useState(0);

  const [showScore, setShowScore] = useState(true);

  useEffect(() => {
    document.title = `${name} is ${playerScore}`;
    console.log(`${name} ka naya score hai:`, playerScore);
  }, [playerScore, name]);

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
        style={{ marginLeft:"10px", color:"red"}}
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

  useEffect(() => {
    // console.log("Welcome to DBZ Leaderborad! System Loaded.")
    // document.title = "DBZ Arena "
    document.title = `Score: ${count}`;
    console.log("Count badal gaya! Naya count hai:", count);
  }, [count]);

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


// import { useState, useEffect } from 'react';

// // analog watch ke liye fucntin banaya
// function AnalogWatch({ currentTime }) {
//   return <div> Analog Design: {currentTime}</div>;
// }
 
// //digital watch keliye fucniton banaye
// function DigitalWatch({ currentTime }) {
//   return <div> {currentTime} </div>;
// }

// function App() {
//   //ek analog state banaye ke jn woh avtive ho to true rahe agar false hai to digital rahega
//   const [isAnalog, setIsAnalog] = useState(true);

//   //state banye tuime ke liye jo dikhana hai 
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   //watch mein time dahio dikhaye uske liye use effect lagaye aur update kr rahe hai second ko hr 1000 ms pr
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>

//     {/*yaha condition lagaye ki jb state change hoa toh componenet rerender ho jaayega*/}
//       <button onClick={() => setIsAnalog(!isAnalog)}>
//         Switch to {isAnalog ? "Digital" : "Analog"}
//       </button>

//       <div style={{ marginTop: "20px" }}>
//         {/* yaha time ko set kr denge agar analog hai toh ya hoga aur digital hai toh kya hopga. wasie value same hi rahegi bs ui alag hoga*/}
//         {isAnalog ? (
//           <AnalogWatch currentTime={time} />
//         ) : (
//           <DigitalWatch currentTime={time} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;