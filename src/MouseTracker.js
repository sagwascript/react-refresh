import React, { Component } from "react";

class MouseTracker extends Component {
  state = {
    x: 0,
    y: 0
  };

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };

  render() {
    return (
      <div
        style={{ height: "50vh", background: this.props.background }}
        onMouseMove={this.handleMouseMove}
      >
        <h1>Move the mouse around!</h1>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default MouseTracker;
