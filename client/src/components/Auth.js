import React from "react";
import Navbar from "./Navbar";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";
import { connect } from "react-redux";
import { signUpButton, loginAuthButton } from "../actions";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "null"
    };
  }
  render() {
    return (
      <section className="auth">
        <div
          className={
            this.state.show === "login"
              ? "login-active auth-cover"
              : "auth-cover"
          }
        />
        <Navbar />
        <div className="auth__left">
          <button
            className={
              this.state.show === "signup"
                ? "hide"
                : this.state.show === "login"
                  ? "black-text auth__signup"
                  : "auth__signup"
            }
            onClick={() => {
              this.setState(() => {
                return {
                  show: "signup"
                };
              });
            }}
          >
            Sign Up
          </button>

          <div className={this.state.show === "signup" ? "active" : "hide"}>
            <GoogleButton
              className="google-signup"
              text="Sign Up with Google"
            />
            <FacebookButton
              className="facebook-signup"
              text="Sign Up with Facebook"
            />
          </div>
        </div>
        <div className="auth__right">
          <button
            className={this.state.show === "login" ? "hide" : "auth__login"}
            onClick={() => {
              this.setState(() => {
                return {
                  show: "login"
                };
              });
            }}
          >
            Login
          </button>
          <div className={this.state.show === "login" ? "active" : "hide"}>
            <GoogleButton className="google-login" text="Login with Google" />
            <FacebookButton
              className="facebook-login"
              text="Login with Facebook"
            />
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.show
  };
}

function mapDispatchToProps() {
  return {
    loginAuthButton,
    signUpButton
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
