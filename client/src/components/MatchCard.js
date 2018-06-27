import React from "react";
import { connect } from "react-redux";
import { getLeagueData, getFixtureData, getCurrentData } from "../actions";
import _ from "lodash";
class Match extends React.Component {
  async componentWillMount() {
    await this.props.getLeagueData();
    if (this.props.match === "Upcoming Match") {
      await this.props.getFixtureData();
    } else {
      await this.props.getCurrentData();
    }

    console.log(this.props);
  }

  renderContent() {
    if (!_.isEmpty(this.props.fixture)) {
      return (
        <div className="card__content">
          <div className="card__left">
            <div className="card__left__heading">
              {this.props.fixture.awayTeamName}
            </div>
            <div className="card__left__img">
              <img
                src={this.props.fixture.awayFlag}
                alt={this.props.fixture.awayTeamName}
              />
            </div>
          </div>
          <div className="card__middle">
            <div className="vs">
              <h1>VS.</h1>
            </div>
          </div>
          <div className="card__right">
            <div className="card__right__heading">
              {this.props.fixture.homeTeamName}
            </div>
            <div className="card__right__img">
              <img
                src={this.props.fixture.homeFlag}
                alt={this.props.fixture.homeTeamName}
              />
            </div>
          </div>
        </div>
      );
    } else if (this.props.current === null && _.isEmpty(this.props.fixture)) {
      return <h5 className="card__heading"> No current Match</h5>;
    } else {
      return (
        <div className="card__content">
          <div className="card__left">
            <div className="card__left__heading">
              {this.props.current.awayTeamName}
            </div>
            <div className="card__left__img">
              <img
                src={this.props.current.awayFlag}
                alt={this.props.current.awayTeamName}
              />
            </div>
          </div>
          <div className="card__middle">
            <div className="vs">
              <h1>VS.</h1>
            </div>
          </div>
          <div className="card__right">
            <div className="card__right__heading">
              {this.props.current.homeTeamName}
            </div>
            <div className="card__right__img">
              <img
                src={this.props.current.homeFlag}
                alt={this.props.current.homeTeamName}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="card">
        <h4 className="card__heading">{this.props.league.leagueCaption}</h4>
        <h5 className="card__heading">{this.props.match}</h5>
        {this.renderContent()}
      </div>
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
  { getFixtureData, getLeagueData, getCurrentData }
)(Match);
