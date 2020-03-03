import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";
import { signup } from "../actions";

class SignupFormContainer extends Component {
  state = { email: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state);
    this.setState({ email: this.state.email, password: this.state.password });
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { signup })(SignupFormContainer);
