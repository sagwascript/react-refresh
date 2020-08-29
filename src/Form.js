import React, { Component } from "react";
import CustomInput from "./CustomInput";

class Form extends Component {
  inputRef = React.createRef();
  customInputRef = React.createRef();
  inputCbRef = null;
  formRef = null;

  state = {
    name: "Immanuel Kant",
    age: 54
  };

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.customInputRef.current);
    // return the DOM so no need to call current
    console.log(this.inputCbRef);
  }

  componentDidUpdate() {
    console.log(this.inputRef.current.value);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    // this will trigger handleChange on `CustomInput`
    this.customInputRef.current.handleChange({ target: { value } });
  };

  decorate = () => {
    const currentClass = this.inputRef.current.className;
    this.inputRef.current.className =
      currentClass === "" ? "decorated-input" : "";
  };

  render() {
    return (
      <form action="#" ref={el => (this.formRef = el)}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          value={this.state.name}
          name="name"
          placeholder="Name"
          // this only works on Class component and native HTML element
          ref={this.inputRef}
          onChange={this.handleChange}
          onClick={this.decorate}
        />
        <br />
        <label htmlFor="age">Age : </label>
        <input
          type="text"
          id="age"
          name="age"
          value={this.state.age}
          placeholder="20"
          ref={element => {
            // this will set the ref of this element to the local variable
            this.inputCbRef = element;
          }}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="address">Address : </label>
        <CustomInput
          ref={this.customInputRef}
          parentRef={this.formRef}
          placeholder="Address"
        />
        <br />
        <button>Process</button>
      </form>
    );
  }
}

export default Form;
