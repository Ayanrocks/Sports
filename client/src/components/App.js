import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import Dashboard from "./Dashboard";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}
