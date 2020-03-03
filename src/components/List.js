import React, { Component } from "react";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";
import CreateFormContainer from "./CreateFormContainer";

class List extends Component {
  render() {
    const list = this.props.images.map(image => {
      return (
        <div key={image.id}>
          <h3>{image.title}</h3>
          <img src={image.url} alt="" />
        </div>
      );
    });
    if (!this.props.user.auth) {
      return (
        <div>
          <LoginFormContainer />
          <SignUpFormContainer />
          {list}
        </div>
      );
    } else {
      return (
        <div>
          <CreateFormContainer />
          {list}
        </div>
      );
    }
  }
}

export default List;
