import React from "react";
import { connect } from "react-redux";
import AuthNavbar from "../AuthNavbar";
import { getOneTeamData } from "../../actions";

class TeamDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await this.props.getOneTeamData(this.props.location.state.id);
    console.log(this.props);
  }
  renderContent() {
    return (
      <div className="team">
        <h2 className="team__teamName">{this.props.teamDetail.name}</h2>
        <p className="team__teamAddress">{this.props.teamDetail.address}</p>
        <img src={this.props.teamDetail.crestUrl} alt="Flag" className="team__teamFlag"/>
      </div>
    );
  }
  render() {
    return (
      <div>
        <AuthNavbar />
        <div className="team">
          {this.props.teamDetail && this.renderContent()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ teamDetail }) {
  return teamDetail;
}

export default connect(
  mapStateToProps,
  { getOneTeamData }
)(TeamDetail);
