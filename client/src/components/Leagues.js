import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AuthNavbar from "./AuthNavbar";
import LeagueCard from "./LeagueCard";
import { getCompetitionData } from "../actions";
import _ from "lodash";
import { css } from "react-emotion";
import { HashLoader } from "react-spinners";

const override = css`
  display: block;
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await this.props.getCompetitionData();
    this.setState({ loading: false });

  }
  renderContent() {
    return _.map(this.props.competition.current, val => {
      const url = "/league/" + val.code.toLowerCase();
      return (
        <Link key={val.id} to={{ pathname: url, state: { id: val.id } }}>
          <LeagueCard key={val.id} leagueName={val.name} />
        </Link>
      );
    });
  }
  render() {
    return (
      <div className="league">
        <div
          className={
            this.state.loading ? "sweet-loading" : "sweet-loading--stop"
          }
        >
          <HashLoader
            className={override}
            sizeUnit={"px"}
            size={90}
            // height={90}
            // width={6}
            // radius={2}
            color={"#E62314"}
            loading={this.state.loading}
          />
        </div>

        <AuthNavbar />

        <h1 className="league__heading">Available Leagues</h1>
        <div className="league__container">{this.renderContent()}</div>
      </div>
    );
  }
}

function mapStateToProps({ competition }) {
  return {
    competition
  };
}

export default connect(
  mapStateToProps,
  { getCompetitionData }
)(Search);
