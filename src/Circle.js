import React from "react";

export default class Circle extends React.Component {
  render() {
    return (
      <div
        className="circle"
        style={{
          marginLeft: this.props.mouse.x - 100,
          marginTop: this.props.mouse.y - 400
        }}
      >
        <span>X: {this.props.mouse.x}</span>{" "}
        <span>Y: {this.props.mouse.y}</span>
      </div>
    );
  }
}
