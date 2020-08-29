import React from "react";
import "./App.css";
import withCounter from "./withCounter";
import Counter from "./Counter";
import CounterBox from "./Box";

const EnhancedCounter = withCounter(Counter, 0);

function App() {
  return (
    <div className="App">
      <EnhancedCounter className="counter" />
      <CounterBox />
    </div>
  );
}

export default App;
