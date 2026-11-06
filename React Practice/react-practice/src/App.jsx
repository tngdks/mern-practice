import { useState } from 'react';
import './App.css';

function App(){
  const [count, setCount] = useState(0);

  let counterColor = "white";

  if(count > 0){
    counterColor = "green";
  } else if (count < 0) {
    counterColor = "red";
  }

  return (
    <div>
      <h1 style = {{ color: counterColor}}> {count} </h1>
      <button onClick = {() => setCount(count - 1)}> - Decrement </button>
      <button onClick = {() => setCount(0)}> Reset </button>
      <button onClick = {() => setCount(count + 1)}> + Increment </button>
    </div>
  );
}

export default App;