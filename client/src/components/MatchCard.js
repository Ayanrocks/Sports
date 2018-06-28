import React from "react";
// import { connect } from "react-redux";
import _ from "lodash";

class Match extends React.Component {
   componentWillMount(){
  }
  renderContent() {
  

    if (!_.isEmpty(this.props.details)) {
      return (
        <div className="card__content">
          <div className="card__left">
            <div className="card__left__heading">
              {this.props.details.awayTeamName}
            </div>
            <div className="card__left__img">
              <img
                src={this.props.details.awayFlag}
                alt={this.props.details.awayTeamName}
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
              {this.props.details.homeTeamName}
            </div>
            <div className="card__right__img">
              <img
                src={this.props.details.homeFlag}
                alt={this.props.details.homeTeamName}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <h5 className="card__heading">{this.props.title}</h5>;
    }
  }
  render() {
    return (
      <div className="card">
        <h4 className="card__heading">{this.props.leagueCaption}</h4>
        <h5 className="card__heading">{this.props.match}</h5>

        {/* //to render Upcoming match Fixture */}
        {this.renderContent()}
      </div>
    );
  }
}



export default (Match);
