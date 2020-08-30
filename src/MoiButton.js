import React from "react";

function MoiButton({ setRef, ...props }) {
  // retrieve button ref using callback pattern through props
  return (
    <button className="moi-button" ref={setRef} {...props}>
      {props.children}
    </button>
  );
}

export default MoiButton;
