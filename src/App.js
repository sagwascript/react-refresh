import React from "react";
import "./App.css";
import MoiButton from "./MoiButton";
import MoiInput from "./MoiInput";

function App() {
  // get child ref passed by `el` argument
  function disableButton(el) {
    // disable button using DOM API
    el.disabled = true;
  }

  function focus(el) {
    // do something to the DOM by the ref
    if (el) el.focus();
  }

  return (
    <div className="App">
      <MoiButton setRef={disableButton} style={{ fontSize: 24 }}>
        Click Me!
      </MoiButton>
      {/** directly access ref **/}
      <MoiInput ref={focus} />
    </div>
  );
}

export default App;
