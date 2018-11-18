import React from "react";
import { css } from "react-emotion";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { HashLoader } from "react-spinners";
import _ from "lodash";

import {
  getLeagueData,
  getTeamData,
  getStandingsData,
  addHistory,
  removeHistory
} from "../../actions";
import AuthNavbar from "../AuthNavbar";
import HistoryBar from "../HistoryBar";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class LeagueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    if (this.props) {
      await this.props.getLeagueData(this.props.match.params.id);
      await this.props.getTeamData(this.props.match.params.id);
      await this.props.getStandingsData(this.props.league.league.id);
      if (this.props.history.action === "PUSH") {
        const url = this.props.match.url;
        const name = this.props.league.league.name;
        await this.props.addHistory({ "url": url, "name": name });
      } else {
        await this.props.removeHistory();
      }
      this.setState({ loading: false });
    }
    console.log(this.props);
  }

  previousWinner() {
    return _.map(this.props.league.league.seasons, val => {
      if (val.winner !== null) {
        return (
          <Link
            to={`/team/${val.winner.id}`}
            className="card--small box-shadow text-center"
            key={val.id}
          >
            {val.winner.crestUrl && (
              <img
                src={val.winner.crestUrl}
                alt={val.winner.name}
                height="100"
                width="100"
                className="text-center"
              />
            )}
            <h3 className="text-center">{val.winner.name}</h3>
            <h3 className="text-center">
              {val.startDate.substring(0, val.startDate.indexOf("-"))}
            </h3>
          </Link>
        );
      }
    });
  }
  teamList() {
    return _.map(this.props.teams.teams.teams, val => (
      <Link
        to={`/team/${val.id}`}
        className="card--small box-shadow flex--dn"
        key={val.id}
      >
        {val.crestUrl && (
          <img
            src={val.crestUrl}
            alt={val.name}
            height="100"
            width="100"
            className="block-center"
          />
        )}
        <h3 className="text-center">{val.name}</h3>
      </Link>
    ));
  }
  renderContent() {
    if (this.state.loading === false) {
      if (this.props.league.league.name !== undefined) {
        return (
          <div className="league">
            <div className="league__heading__container">
              <h1 className="heading">
                {this.props.league.league.name} -{" "}
                {this.props.league.league.code}
              </h1>
            </div>
            <div className="card">
              <div className="card__container flex--row">
                <h3 className="league__country">
                  Country of Origin - {this.props.league.league.area.name}
                </h3>
                <h3 className="league__season">
                  Current Season:{" "}
                  {this.props.league.league.currentSeason.startDate} -{" "}
                  {this.props.league.league.currentSeason.endDate}
                </h3>
              </div>
            </div>
            <div className="card">
              <div className="card__container">
                <h3 className="league__heading text-center">
                  Previous Winner{" "}
                </h3>
                <div className="league__standings flex--sa">
                  {this.previousWinner()}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__container flex--sa">
                <h3 className="card__heading">Teams</h3>
                <div className="flex--row">{this.teamList()}</div>
              </div>
            </div>
          </div>
        );
      }
      if (this.props.league.league.message !== undefined) {
        return (
          <h5 className="api__error">
            {this.props.league.league.message} and refresh the page
          </h5>
        );
      }
    }
  }

  render() {
    return (
      <div className="leagueDetail">
        <AuthNavbar />
        <HistoryBar />
        <div className="sweet-loading">
          <HashLoader
            className={override}
            sizeUnit={"px"}
            size={90}
            color={"#E62314"}
            loading={this.state.loading}
          />
        </div>

        <div className="container">
          <div className="row">{this.renderContent()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ league, teams }) {
  return {
    league,
    teams
  };
}

export default connect(
  mapStateToProps,
  { getLeagueData, getTeamData, getStandingsData, addHistory, removeHistory }
)(LeagueDetail);
