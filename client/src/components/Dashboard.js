import React from "react";
// import { connect } from "react-redux";
import AuthNavbar from "./AuthNavbar";
import MatchCard from "./MatchCard";
// import _ from "lodash";

class Dashboard extends React.Component {
  render() {
    return (
      <section className="dashboard">
        <AuthNavbar />
        <div className="dashboard__content">
          <MatchCard match="Current Match" />
          <MatchCard match="Upcoming Match" />
        </div>
      </section>
    );
  }
}

// function mapStateToProps({ league, fixture }) {
//   return {
//     league,
//     fixture
//   };
// }

export default Dashboard;
