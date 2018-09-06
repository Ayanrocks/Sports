import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Leagues from "./Leagues";
import MyTeams from "./MyTeams";
import News from "./News";
import Profile from "./Profile";

export default class App extends React.Component {
  render() {
    return <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/search" component={Leagues} />
          <Route path="/myteams" component={MyTeams} />
        <Route path="/news" component={News} />
          <Route path="/profile" component={Profile} />
        </div>
      </BrowserRouter>;
  }
}
