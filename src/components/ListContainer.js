import React from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";
import CreateFormContainer from "./CreateFormContainer";
import List from "./List";
class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    if (!this.props.images) {
      return <div>Loading...</div>;
    }
    const displayImages = this.props.images.map(image => {
      return <List images={image} />;
    });
    return (
      <div>
        <LoginFormContainer />
        <CreateFormContainer />
        <div>{displayImages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { images: state.images };
}

const mapDispatchToProps = { getImages };

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
