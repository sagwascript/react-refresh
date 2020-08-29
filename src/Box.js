import React, { Component } from "react";
import withCounter from "./withCounter";

class CounterBox extends Component {
  render() {
    return (
      <div className="box">
        <h4>I'm Box that can count</h4>
        <p>Counter is {this.props.counter}</p>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export default withCounter(CounterBox, 5);
