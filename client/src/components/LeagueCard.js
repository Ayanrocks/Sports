import React from "react";

class LeagueCard extends React.Component {
  render() {
    return (
      <div className="card--small flex--sa box-shadow">
        <h2 className="card__heading">{this.props.leagueName}</h2>
      </div>
    );
  }
}

export default LeagueCard;