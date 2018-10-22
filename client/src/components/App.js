import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Online, Offline } from "react-detect-offline";

//Custom components
import Home from "./Home";
import Contact from './Contact';
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Leagues from "./Leagues";
import MyTeams from "./MyTeams";
import News from "./News";
import Profile from "./Profile";

// Leagues
import LeagueDetail from "./leagues/LeagueDetail";

export default class App extends React.Component {
  render() {
    return <div>
        <Online>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/contact" component={Contact}/>
              <Route path="/faq" component={Home} exact />

              <Route path="/auth" component={Auth} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/search" component={Leagues} />
              <Route path="/myteams" component={MyTeams} />
              <Route path="/news" component={News} />
              <Route path="/profile" component={Profile} />
              <Route path="/:name" component={LeagueDetail} />
            </Switch>
          </BrowserRouter>
        </Online>
        <Offline>
          <h1 className="offline__heading">
            You're Offline. Please Connect to the Internet to use this App :)
          </h1>
        </Offline>
      </div>;
  }
}
