import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Online, Offline } from "react-detect-offline";
import Protected from "./Protected";

//Custom components
import Home from "./Home";
import Contact from "./Contact";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Leagues from "./Leagues";
// import MyTeams from "./MyTeams";
import Videos from "./Videos";
import Profile from "./Profile";
import NotFound from "./NotFound";

// Detaiils
import LeagueDetail from "./details/LeagueDetail";
import TeamDetail from "./details/TeamDetail.js";
import SquadDetail from "./details/SquadDetail";

export default class App extends React.Component {
  render() {
    return <div>
        <Online>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} exact />
              <Route path="/faq" component={Home} exact />

              <Route path="/auth" component={Auth} exact />
              <Protected path="/dashboard" exact component={Dashboard} />
              <Protected path="/explore" component={Leagues} exact />

              {/* //Coming Soon  */}
              {/* <Route
                path="/myteams"
                render={() => (this.state.isLoggedIn ? <MyTeams /> : <Redirect to="/" />)}
                exact
              /> */}

              <Protected path="/videos" component={Videos} exact />
              <Protected path="/profile" component={Profile} exact />

              <Protected path="/league/:id/" component={LeagueDetail} exact />
              <Protected path="/team/:teamid/" component={TeamDetail} exact />
              <Protected path="/squad/:squadid/" component={SquadDetail} exact />

              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Online>
        <Offline>
          <h1 className="offline__heading">
            You're Offline. Please Connect to the Internet to use this App
            :)
          </h1>
        </Offline>
      </div>;
  }
}
