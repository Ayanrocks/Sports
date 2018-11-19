import React from "react";
// import { connect } from "react-redux";
import AuthNavbar from "./AuthNavbar";
// // import MatchCard from "./MatchCard";
// // import _ from "lodash";
// import { getLeagueData, getFixtureData, getCurrentData } from "../actions";

class Dashboard extends React.Component {
  // async componentDidMount() {
  //   await this.props.getLeagueData();

  //   await this.props.getFixtureData();

  //   await this.props.getCurrentData();

  //   // console.log(this.props);
  // }

  render() {
    return (
      <section className="dashboard">
        <AuthNavbar />
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card__container pos-rel">
                <div className="triangle--red" />
                <h1 className="card__heading">Dashboard Coming Soon</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// function mapStateToProps({ league, fixture, current }) {
//   return {
//     league,
//     fixture,
//     current
//   };
// }

// export default connect(
//   mapStateToProps,
//   { getLeagueData, getFixtureData, getCurrentData }
// )(Dashboard);

export default Dashboard;
