import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/auth" component={Auth}  />
        </div>
      </BrowserRouter>
    );
  }
}
