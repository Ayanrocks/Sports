import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
class HistoryBar extends React.Component {
  constructor() {
    super();
    this.renderHistory = this.renderHistory.bind(this);
  }
  renderHistory() {
    return _.map(this.props.path, (val,i) => (
        <div className="" key={i}>
        <Link to={val} >
          {val}
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

export default connect(mapStateToProps)(HistoryBar);
