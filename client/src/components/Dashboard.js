import React from "react";
import { connect } from "react-redux";
import AuthNavbar from "./AuthNavbar";
import { getLeagueData, getFixtureData } from "../actions";
import MatchCard from "./MatchCard";
import _ from "lodash";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curMatch: {}
    };
    this.filterArray = this.filterArray.bind(this);
  }
 async componentDidMount() {
    await this.props.getLeagueData();
   await this.props.getFixtureData();
   this.filterArray();
  }
  filterArray() {
    const data = _
      .chain(this.props.fixture.fixtures)
      .filter(val => {
        return val.status === "TIMED";
      })
      .slice(0, 1);

    this.setState(state => ({
      ...state,
      curMatch: data
    }));
  };
  render() {
    return (
      <section className="dashboard">
        {console.log(this.state.curMatch)}

        <AuthNavbar />
        <MatchCard
          leagueCaption={"World cup 2018 Russia"}
          match={this.state.curMatch}
          // homeTeamLogo={}
          // awayTeamLogo={}
        />
      </section>
    );
  }
}

function mapStateToProps({ league, fixture }) {
  return {
    league,
    fixture
  };
}

export default connect(
  mapStateToProps,
  { getFixtureData, getLeagueData }
)(Dashboard);
