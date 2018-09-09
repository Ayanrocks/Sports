import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Leagues from "./Leagues";
import MyTeams from "./MyTeams";
import News from "./News";
import Profile from "./Profile";

// Leagues
import BserieA from "./leagues/BSerieA";
import Bundesliga from "./leagues/Bundesliga";
import Championship from "./leagues/Championship";
import Eredivisie from "./leagues/Eredivisie";
import EurChamp from "./leagues/EurChamp";
import Ligue1 from "./leagues/Ligue1";
import PremierLeague from "./leagues/PremierLeague";
import PrimeraDiv from "./leagues/PrimeraDiv";
import PrimeraLiga from "./leagues/PrimeraLiga";
import SerieA from "./leagues/SerieA";
import UEFAChamp from "./leagues/UEFAChamp";
import WorldCup from "./leagues/WorldCup";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/search" component={Leagues} />
          <Route path="/myteams" component={MyTeams} />
          <Route path="/news" component={News} />
          <Route path="/profile" component={Profile} />
          <Route path="/:name" component={BserieA} />
          <Route path="/:name" component={BserieA} />
          <Route path="/:name" component={BserieA} />
          <Route path="/:name" component={BserieA} />
          <Route path="/:name" component={BserieA} />
          <Route path="/:name" component={Ligue1} />
          <Route path="/:name" component={Bundesliga} />
          <Route path="/:name" component={SerieA} />
          <Route path="/:name" component={Eredivisie} />
          <Route path="/:name" component={PrimeraLiga} />
          <Route path="/:name" component={PrimeraDiv} />
          <Route path="/:name" component={WorldCup} />
        </div>
      </BrowserRouter>
    );
  }
}
