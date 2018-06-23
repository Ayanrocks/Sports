import React from "react";

class Match extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  renderContent() {}
  render() {
    return (
      <div className="card">
        <h4 className="card__heading">{this.props.leagueCaption}</h4>
        <div className="card__content">
          <div className="card__left">
            <div className="card__left__heading">
              {this.props.match.awayTeamName}
            </div>
            <div className="card__left__img">
              <img src={this.props.awayTeamLogo} alt={this.props.match.awayTeamName} />
            </div>
          </div>
          <div className="card__right">
            <div className="card__right__heading">
              {this.props.match.homeTeamName}
            </div>
            <div className="card__right__img">
              <img src={this.props.homeTeamLogo} alt={this.props.match.homeTeamName} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
