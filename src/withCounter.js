import React, { Component } from "react";

// share all this stateful logic to any component wrapped by it
function withCounter(WrappedComponent, counter) {
  return class CounterContainer extends Component {
    state = {
      counter
    };

    increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    decrement = () => {
      this.setState({ counter: this.state.counter - 1 });
    };

    render() {
      return (
        <WrappedComponent
          counter={this.state.counter}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          {...this.props}
        />
      );
    }
  };
}

export default withCounter;
