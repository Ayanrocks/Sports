import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AuthNavbar from "./AuthNavbar";
import LeagueCard from "./LeagueCard";
import { getCompetitionData } from "../actions";
import _ from "lodash";

class Search extends React.Component {
  async componentDidMount() {
    await this.props.getCompetitionData();
    console.log(this.props);
  }
  expand() {}
  renderContent() {
    return _.map(this.props.competition.current, val => {
      const url = "/" + val.code.toLowerCase();
      return (
        <Link key={val.id} to={url}>
          <LeagueCard leagueName={val.name} />
        </Link>
      );
    });
  }
  render() {
    return (
      <div className="league">
        <AuthNavbar />
        <h1 className="league__heading">Available Leagues</h1>
        <div className="league__container">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ competition }) {
  return {
    competition
  };
}

export default connect(
  mapStateToProps,
  { getCompetitionData }
)(Search);
