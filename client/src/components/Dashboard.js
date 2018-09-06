import React from "react";
import { connect } from "react-redux";
import AuthNavbar from "./AuthNavbar";
import MatchCard from "./MatchCard";
import _ from "lodash";
import { getLeagueData, getFixtureData, getCurrentData } from "../actions";

class Dashboard extends React.Component {
  async componentDidMount() {
    await this.props.getLeagueData();

    await this.props.getFixtureData();

    await this.props.getCurrentData();


    // console.log(this.props);
  }

  renderContent() {
    if (_.isEmpty(this.props.current.current)) {
      if (this.props.league.league) {
        return (
          <MatchCard 
            match="France won the world cup"
            // title=" No current Match"
            details={{}}
            leagueCaption={this.props.league.league.leagueCaption}
          />
        );
      }
    } else {
      return (
        <MatchCard
          match="Current Match"
          details={this.props.current.current}
          leagueCaption={this.props.league.league.leagueCaption}
        />
      );
    }
  }

  render() {
    return (
      <section className="dashboard">
        <AuthNavbar />
        <div className="dashboard__content">
          {/* To render Current matchCard */}
          {this.renderContent()}

          {/* { this.props.league.league && <MatchCard
            match="Upcoming Match"
            details={this.props.fixture.fixture}
            leagueCaption={this.props.league.league.leagueCaption}
          />} */}
        </div>
      </section>
    );
  }
}

function mapStateToProps({ league, fixture, current }) {
  return {
    league,
    fixture,
    current
  };
}

export default connect(
  mapStateToProps,
  { getLeagueData, getFixtureData, getCurrentData }
)(Dashboard);
