import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthNavbar from "../AuthNavbar";
import { getOneTeamData, addHistory, removeHistory } from "../../actions";
import { css } from "react-emotion";

import { HashLoader } from "react-spinners";
import _ from "lodash";
import HistoryBar from "../HistoryBar";

const override = css`
  display: block;
  margin: 0 auto;
`;

class TeamDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    await this.props.getOneTeamData(this.props.match.params.teamid);
    if (this.props.history.action === "PUSH") {
      const url = this.props.match.url;
      const name = this.props.teamDetail.name;
      await this.props.addHistory({ "url": url, "name": name });
    } else {
      await this.props.removeHistory();
    }
    console.log(this.props);
    this.setState({ loading: false });
  }
  renderSquads() {
    return _.map(this.props.teamDetail.squad, val => {
      return (
        <Link
          to={`/squad/${val.id}`}
          key={val.id}
          className="card--small box-shadow"
        >
          {val.name}
        </Link>
      );
    });
  }
  renderContent() {
    return (
      <div className="team">
        <h2 className="team__teamName">{this.props.teamDetail.name}</h2>
        <p className="team__teamAddress">{this.props.teamDetail.address}</p>
        {this.props.teamDetail.crestUrl && (
          <img
            src={this.props.teamDetail.crestUrl}
            alt="Flag"
            className="team__teamFlag"
          />
        )}
        <div className="card">
          <div className="card__container flex--dn">
            <h5>Founded: {this.props.teamDetail.founded}</h5>
            <h5>Club Colors: {this.props.teamDetail.clubColors}</h5>
            <h5>Email: {this.props.teamDetail.email}</h5>
            <h5>Phone: {this.props.teamDetail.phone}</h5>
            <h5>Venue: {this.props.teamDetail.venue}</h5>
            <h5>
              <a
                href={this.props.teamDetail.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website: {this.props.teamDetail.website}
              </a>
            </h5>
          </div>
        </div>
        <div className="card">
          <div className="card__container">
            <h1 className="card__heading">Squad</h1>
            <div className="flex--sa">{this.renderSquads()}</div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <AuthNavbar />
        <HistoryBar />
        <div className="sweet-loading">
          <HashLoader
            className={override}
            sizeUnit={"px"}
            size={90}
            color={"#E62314"}
            loading={this.state.loading}
          />
        </div>
        <div className="team">
          <div className="container">
            <div className="row">
              {this.props.teamDetail && this.renderContent()}
            </div>
          </div>
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
  { getOneTeamData, addHistory, removeHistory }
)(TeamDetail);
