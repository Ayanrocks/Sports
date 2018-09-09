import React from "react";
import { connect } from "react-redux";
import { getLeagueData } from "../../actions";
import AuthNavbar from "../AuthNavbar";

class BsereA extends React.Component {
  async componentDidMount() {
    if (this.props.location.state) {
      await this.props.getLeagueData(this.props.location.state.id);
    }
    console.log(this.props.league.league);
  }
  render() {
    return (
      <div className="league">
        <AuthNavbar />

        {this.props.league.league && (
          <h1 className="league__heading">{this.props.league.league.name}</h1>
        )}
      </div>
    );
  }
}

function mapStateToProps({ league }) {
  return {
    league
  };
}

export default connect(
  mapStateToProps,
  { getLeagueData }
)(BsereA);
