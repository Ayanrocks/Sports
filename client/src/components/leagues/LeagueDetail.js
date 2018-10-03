import React from "react";
import { css } from "react-emotion";
import { connect } from "react-redux";
import { HashLoader } from "react-spinners";

import { getLeagueData } from "../../actions";
import AuthNavbar from "../AuthNavbar";

const override = css`
  display: block;
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
`;

class LeagueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  async componentDidMount(prevProps) {
    if (this.props.location.state) {
      await this.props.getLeagueData(this.props.location.state.id);
      this.setState({ loading: false });
    }
    console.log(this.props);
  }
  renderContent() {
    if (this.state.loading === false) {
      if (this.props.league.league.name !== undefined) {
        return (
          <div className="league">
            <h1 className="league__heading">
              {this.props.league.league.name} - {this.props.match.params.name}
            </h1>
            <h1 className="league__country">
              Country of Origin - {this.props.league.league.area.name}
            </h1>
            <h3 className="league__season">
              Current Season: {this.props.league.league.currentSeason.startDate}{" "}
              - {this.props.league.league.currentSeason.endDate}
            </h3>
          </div>
        );
      }
      if (this.props.league.league.message !== undefined) {
        return <h5 className="League__error">{this.props.league.league.message} And refresh the page</h5>;
      }
    }
  }

  render() {
    return (
      <div className="leagueDetail">
        <div
          className={
            this.state.loading ? "sweet-loading" : "sweet-loading--stop"
          }
        >
          <HashLoader
            className={override}
            sizeUnit={"px"}
            size={90}
            color={"#E62314"}
            loading={this.state.loading}
          />
        </div>
        <AuthNavbar />
        {this.renderContent()}
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
)(LeagueDetail);
