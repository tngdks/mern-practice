import { useState } from 'react';
import './App.css';

function App() {
  //yaha user ke inputs ke liye states banayenge
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // yeha hum success ya error dikhayenge ki entry ho gyi hai ya nahi

  //yaha hum batenyenge ki fomr submit hone pr kya hoga
  const handleSubmit = (e) => {
    //yaha hum form ko page ko refresh krne se rokenge ki agar hum submit kare toh page refresh naho
    e.preventDefault();

    //yaha hum check karenge ki kahi khali form toh submit nahi kiya jaa rha
    if (name === "" || email === "") {
      setMessage(" Name aur Email dono khali nahi rahenge, dono mein entry chahiye!");
      return;
    }

    //yaha hum jo data user ne diya hai use ek packet mein banayneg aur backend ko bhejenge
    const newFighter = {
      name: name,
      email: email
    };

    //yeh message jayega message state mein
    setMessage(" Data bhej raha hai");

    //POST request ka use karenge data ko backend ko bhejne ke liye
    //yaha hum phir se fake api ka use karenge
    fetch('https://jsonplaceholder.typicode.com/users', {
      method:'POST', // yaha method mein POST ka mtlb hum data le nahi balki bhej rhe hai
      headers: {
        'Content-type': 'application/json',//backend ko nata rahe hai ki data json mein bhejnge
      },
      body: JSON.stringify(newFighter), // yaha apne data ko json mein convert kr diya
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("backend mein yeh save ho gaya:", data);
        setMessage(`Bdhai ho ${data.name} add ho gaya (ID: ${data.id})`);

        //form ko wapas se khali krna hoga
        setName("");
        setEmail("");
      })

        // koi error aane pe yeh message bhejna hoga 
        .catch((error) => {
          setMessage("Network error aa gaya");
        });
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>⚔️ Add New Fighter</h2>
      
      {/* Form tag ke onSubmit mein apna function laga diya */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        
        <input 
          type="text" 
          placeholder="Fighter ka naam" 
          value={name} // Step 2: Input box ki value state se aayegi
          onChange={(e) => setName(e.target.value)} // Jab type hoga, state update hogi
          style={{ padding: "10px", width: "250px" }}
        />
        
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Join Squad
        </button>
      </form>

      {/* Message dikhane ka dabba */}
      {message && <h3 style={{ marginTop: "20px" }}>{message}</h3>}
    </div>
  );
}

export default App;










// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// //Page 1: home page
// function Home(){
//   return <h2> Welcome to DBZ Home Arena! </h2>
// }

// //Page 2: profile page
// function Profile(){
//   return <h2> Fighter's Secret Profile Page </h2>
// }

// function App() {
//   return (
//     //yeh manage krta hai ki ab screen pr kya dikhaya jaayega
//     <BrowserRouter>

//       {/* Navigation bar jo screen pr humesha upar dikhega */}
//       <nav style={{ padding: "10px", backgroundColor: "#333", color: "white"}}>
//         {/*yaha hum button banayene alag alag pages ke */}
//         <Link to="/" style={{color:"white", marginRight: "20px", }}> Home </Link>
//         <Link to="/profile" style={{color:"white"}}> Profile </Link>
//       </nav>

//       {/*yaha hum check karenge ki url mein kya hai aur usko screen pr dikhayenge*/}
//       <div style={{padding:"20px"}}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </div>
    
//     </BrowserRouter>
//   );
// }

// export default App;






// import { useState, useEffect } from 'react';
// import'./App.css';

// function App() {
//   const[users, setUsers] = useState([]);

//   //loding state banyenge aur suru true rakhnage kyuki hum page jb load ho tn data ke aane ka wait karenge starting mein
//   const [isLoading, setIsLoading] = useState(true);

//   //yaha ek error state banayenge jo suru mein false nahi null hogi kkyuki hume error hone pr ek message dikhana hai toh jb error nahi hai toh message ek khali box ya null hoga
//   const [error, setError] = useState(null);

//   //page mein loading state ke chalne ke time pe yeh backgrond mein data load karega
//   useEffect(() => {
//     //fetch diye gaye url se data le kr aayega
//     fetch("https://jsonplaceholder.typicode.com/users")

//       //yeha response aa gaya url se ab response kaisa aaya hai sahi, galat ya aaya hi nahi ya ya kuch error hai usse deal karenge
//       .then((response) => {
//         //agar aaya data sahi (ok) nahi hai toh turant error throw karo
//         if(!response.ok){
//           throw new Error("API ya Internet mein gadbad hai!");
//         }
//         //respose sahi hai toh data ko json mein convert karo
//         return response.json();
//       })
//       .then((data) => {
//         console.log("yeh list aayi hai:", data);//console mein aayi hui list ko dekh lenge
//         setUsers(data);//yaha humne json data ko users state ko de diya
//         setIsLoading(false);//data successfully aane pe loading ko band kr diya 
//       })

//       //agar data url se laate time fetch fail hogay haise internet connection sustem ka band ho gaya
//       .catch((err) => {
//         setError(err.message);//error ko save kar liye ek state mein
//         setIsLoading(false);//fail hone pr bhi loading toh band krni hi hai user ko screen pe ek message dikhana hoga ki kya hua. hum uuse loading pe nahi atka sakta
//       });
//   }, []);//yaha empty list isliye ki page load hone pr yeh process ek baar chale\

//   //jb page load ho raha ho aur data abhi url se nahi aaya hai toh user ko loading screen dikhao
//   if(isLoading) {
//     return <h2 style={{ textAlign: "center", marginTop: "50px" }} > Loading Global Player List (From API)</h2>
//   }

//   //agar kuch error aagaya error waale state mein toh error dikhana hoga loading ko hata kr
//   if(error) {
//     return <h2 style={{ textAlign: "center", color: "red", marginTop: "50px" }}> Problem: {error} </h2>
//   }

//   //jb loading ho gayi aur data bhi successfully users state mein aa gaya json format mein to loading khatam karke screen pe data dikahan hoga
//   return(
//       <div style={{ textAlign: "center", padding: "20px"}}>
//        <h1>🌍 Global Players List (From API)</h1>

//         <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
//           {users.map((user) => (
//             <div
//               key={user.id}
//               style={{
//               border: "2px solid #ccc",
//               margin: "10px",
//               padding: "15px",
//               width: "250px",
//               borderRadius: "10px",
//               backgroundColor: "#f9f9f9"
//               }}
//             >
//               <h3> {user.name} </h3>
//               <p> 📧 {user.email} </p>
//               <p> 🏙️ City: {user.address.city} </p>
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;







// import { useState, useEffect } from 'react';
// import './App.css';

// function App(){
//   //yaha ek khali dabba banayenge jime data aayega internet se
//   const [users, setUsers] = useState([]);

//   //useEffect se data page khulte hi load ho jaayega
//   useEffect(() => {

//     //fetch url pe jaayega aur data laayega
//     fetch("https://jsonplaceholder.typicode.com/users")

//       //fetch jo data laaya url se usko json mein convert karenge
//       .then((response) => response.json())

//       //jab data json mein convert ho gay toh usko ek state mein save kar lenge
//       .then((data) => {
//         console.log("Internet se yeh data aaya:", data);//yaha pe hum check karenge ki internet se kya data aaya
//         setUsers(data);//yaha hum us jason data ko users state mein save kar lenge
//       });

//   }, []);//yaha khali bracket lagayenge taki page load pr sirf ek baar chale

//   return(
//     <div style={{ textAlign: "center", padding: "20px"}}>
//       <h1> Global Players List (From APi)</h1>

//       {/* yaha .map api waale data se cards banayega screen pr dikhane ke liye*/}
//       <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
//         {users.map((user) => (
//           <div
//             key={user.id}
//             style={{
//               border: "2px solid #ccc",
//               margin: "10px",
//               padding: "15px",
//               width: "250px",
//               borderRadius: "10px",
//               backgroundColor: "#f9f9f9"
//             }}
//             >
//               <h3> {user.name} </h3>
//               <p> {user.email} </p>
//               <p> City: {user.address.city} </p>
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;




// import { useState, useEffect } from 'react';
// import './App.css';

// function PlayerCard({ name, index, deletePlayer }) {

//   const [playerScore, setPlayerScore] = useState(0);

//   const [showScore, setShowScore] = useState(true);

//   useEffect(() => {
//     document.title = `${name} is ${playerScore}`;
//     console.log(`${name} ka naya score hai:`, playerScore);
//   }, [playerScore, name]);

//   return (
//     <div style={{ marginBottom: "20px"}}>
//       <h2>Welcome, {name}!</h2>

//       {showScore ? (
//         <h3> Your Score is: {playerScore}</h3>
//       ) : (
//         <h3> Score is Hidden </h3>
//       )}

//       <button onClick={() => setPlayerScore(playerScore + 1)}> Boost Score </button>

//       <button 
//         style={{ marginLeft:"10px", color:"red"}}
//         onClick={() => deletePlayer(index)}>
//           Delete Player
//         </button>

//       <button 
//         style={{ marginLeft:"10px"}}
//         onClick = {() => setShowScore(!showScore)}
//       >
//         Hide/Show Score
//       </button>
//     </div>
//   );
// }

// function App(){
//   const [count, setCount] = useState(0);
//   const [playerName, setPlayerName] = useState("Guest");
//   const [searchText, setSearchText] = useState("");

//   const [squad, setSquad] = useState(["takao", "Goku", "Broly", "Vegeta"]);

//   useEffect(() => {
//     // console.log("Welcome to DBZ Leaderborad! System Loaded.")
//     // document.title = "DBZ Arena "
//     document.title = `Score: ${count}`;
//     console.log("Count badal gaya! Naya count hai:", count);
//   }, [count]);

//   const deletePlayer = (indexToRemove) => {
//     const newSquad = squad.filter((player, index) => index !== indexToRemove);
//     setSquad(newSquad);
//   };

//   let counterColor = "white";

//   if(count > 0){
//     counterColor = "green";
//   } else if (count < 0) {
//     counterColor = "red";
//   }

//   return (
//     <div>
//       <div style ={{ marginBottom: "30px", padding:"10px", backgroundColor: "#f0f0f0"}}>
//         <h3> Search Squad: </h3>
//         <input
//           type="text"
//           placeholder="Type to search player..."
//           onChange={(event) => setSearchText(event.target.value)}
//         />
//       </div>

//       {
//         // Fix 1: { } ki jagah ( ) lagaya taaki automatically render ho jaye
//         squad
//           .filter((player) => player.toLowerCase().includes(searchText.toLowerCase()))
//           .map((player, index) => (
//             <PlayerCard
//               key={index} 
//               name={player}
//               index = {index}
//               deletePlayer = {deletePlayer} 
//             />
//           ))
//       }

//       <div style={{ marginTop: "40px"}}>
//       <input 
//         type="text"
//         placeholder="Enter your name"
//         onChange={(event) => setPlayerName(event.target.value)}
//       />
//       <button onClick ={() => setSquad([...squad, playerName])}> Add Player </button>
//     </div>
//       <hr />

//       <h1 style={{ color: counterColor}}> {count} </h1>
      
//       {/* Fix 2: Button ko theek se ek line mein likha */}
//       <button onClick={() => setCount(count - 1)}> Decrement </button>
//       <button onClick={() => setCount(0)}> Reset </button>
//       <button onClick={() => setCount(count + 1)}> Increment </button>
//     </div>
//   );
// }
// export default App;


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