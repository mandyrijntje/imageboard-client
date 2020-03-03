import React, { Component } from "react";
import store from "./store";

import { Provider } from "react-redux"; //provide the redux store so that you can use connect and mstp in components!
import { Route } from "react-router-dom";
import ListContainer from "./components/ListContainer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route path="/" exact component={ListContainer} />
      </Provider>
    );
  }
}
export default App;
