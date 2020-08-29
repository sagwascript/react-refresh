import React from "react";

export default class Box extends React.Component {
  render() {
    return (
      <div className="box">
        <span>X: {this.props.mouse.x}</span>{" "}
        <span>Y: {this.props.mouse.y}</span>
      </div>
    );
  }
}
