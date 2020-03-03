import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import ListContainer from "./components/ListContainer";
import UsersListContainer from "./components/UsersListContainer";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavBar />
          <Route path="/" exact component={ListContainer} />
          <Route path="/users" exact component={UsersListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
