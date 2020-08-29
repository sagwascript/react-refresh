import React from "react";
import "./App.css";
import MouseTracker from "./MouseTracker";
import Box from "./Box";
import Circle from "./Circle";

function App() {
  // it's just away to share behavior
  // MouseTracker send the state of specific behavior as the function argument
  // passed in props named `render` in this case -- we can use other name of course --
  return (
    <div className="App">
      <MouseTracker background="tomato" render={data => <Box mouse={data} />} />
      <MouseTracker
        background="#EFE"
        render={data => <Circle mouse={data} />}
      />
    </div>
  );
}

export default App;
