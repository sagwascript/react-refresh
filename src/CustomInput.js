import React, { Component } from "react";

const bgs = ["salmon", "aquamarine", "gray"];

class CustomInput extends Component {
  state = {
    value: ""
  };

  componentDidMount() {
    this.setRandomBg();
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
    this.setRandomBg();
  };

  setRandomBg() {
    console.log(this.props.parentRef);
    if (this.props.parentRef) {
      // modify parent DOM through it's ref passed through props
      this.props.parentRef.style.backgroundColor =
        bgs[Math.floor(Math.random() * 3)];
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default CustomInput;
