import React from "react";
import { connect } from "react-redux";
import { createImage } from "../actions";
import CreateForm from "./CreateForm";
class CreateFormContainer extends React.Component {
  state = {
    title: "",
    url: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    console.log("Submit was clicked!");
    event.preventDefault();
    this.props.createImage(this.state);
    this.setState({
      title: this.state.title,
      url: this.state.url
    });
  };
  render() {
    console.log("Create form container created");
    return (
      <CreateForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}
export default connect(null, { createImage })(CreateFormContainer);
