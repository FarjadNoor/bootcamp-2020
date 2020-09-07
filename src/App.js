import React, { useState } from "react";
import Farjad from "./Farjad";
import { Message } from "./Message.js";
import "./App.css";

function App() {
  let [count, setCount] = useState(1);
  let [isDay, setDay] = useState(true);

  return (
    <div className={`box ${isDay ? 'dayLight' : ''}`}>
      <h2>Good {isDay ? "Morning" : "Night"}</h2>
      <Message counter={count} />
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("clicked");
        }}
      >
        Update Counter
      </button>
      <button onClick={()=>setDay(!isDay)}>Update Day</button>
    </div>
  );
}

export default App;
