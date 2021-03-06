import React from "react";
import { connect } from "react-redux";
import AuthNavbar from "../AuthNavbar";
import { getSquadData, addHistory, removeHistory } from "../../actions";
import HistoryBar from "../HistoryBar";

class SquadDetail extends React.Component {
  async componentDidMount() {
    await this.props.getSquadData(this.props.match.params.squadid);
    if (this.props.history.action === "PUSH") {
      const url = this.props.match.url;
      const name = this.props.squad.name;
      await this.props.addHistory({ "url": url, "name": name });
    } else {
      await this.props.removeHistory();
    }
  }
  renderContent() {
    if (this.props.squad) {
      return (
        <div>
          <h1 className="heading">{this.props.squad.name}</h1>

          <div className="card">
            <div className="card__container flex--dn">
              <h5>Country of Birth: {this.props.squad.countryOfBirth}</h5>
              <h5>Date of Birth: {this.props.squad.dateOfBirth}</h5>
              <h5>Nationality: {this.props.squad.nationality}</h5>
              <h5>Position: {this.props.squad.position}</h5>
              <h5>Shirt Number: {this.props.squad.shirtNumber}</h5>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <AuthNavbar />
        <HistoryBar />
        <div className="container">
          <div className="row">{this.renderContent()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ squad }) {
  return squad;
}

export default connect(
  mapStateToProps,
  { getSquadData, addHistory, removeHistory }
)(SquadDetail);
