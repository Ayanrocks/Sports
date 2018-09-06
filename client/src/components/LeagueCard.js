import React from "react";

class LeagueCard extends React.Component {
  render() {
    return (
      <div className="leagueCard">
        <h2 className="leagueCard__heading">{this.props.leagueName}</h2>
      </div>
    );
  }
}

export default LeagueCard;