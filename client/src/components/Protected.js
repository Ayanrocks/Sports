import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getLoginData } from "../actions";
import { connect } from "react-redux";
import Switch from "react-router-dom/Switch";
import { withRouter } from "react-router";

class Protected extends React.Component {
  async componentDidMount() {
    await this.props.getLoginData();
  }
  renderRoute() {
    const { component: Component, ...props } = this.props;
    if (this.props.isLoggedIn) {
      return (
        <Route
          {...props}
          render={props =>
            this.props.isLoggedIn === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      );
    }
  }
  render() {
    return <Switch>{this.renderRoute()}</Switch>;
  }
}

function mapStateToProps({ isLoggedIn }) {
  return isLoggedIn;
}

export default withRouter(
  connect(
    mapStateToProps,
    { getLoginData }
  )(Protected)
);
