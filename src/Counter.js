import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <span>Counter : {this.props.counter}</span>
        <br />
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
