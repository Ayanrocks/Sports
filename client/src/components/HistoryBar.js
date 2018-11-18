import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import { removeHistory } from "../actions";

class HistoryBar extends React.Component {
  constructor() {
    super();
    this.renderHistory = this.renderHistory.bind(this);
  }
  renderHistory() {
    return _.map(this.props.path, (val, i) => (
      <div className="historyBar__content" key={i}>
        <Link className="historyBar__link" to={val.url} onClick={this.props.removeHistory}>
          {val.name}
        </Link>
        >
      </div>
    ));
  }
  render() {
    return (
      <div>
        <div className="container flex--start">{this.renderHistory()}</div>
      </div>
    );
  }
}

function mapStateToProps({ path }) {
  return path;
}

export default connect(
  mapStateToProps,
  { removeHistory }
)(HistoryBar);
