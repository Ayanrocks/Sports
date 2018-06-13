import React from "react";
import Navbar from "./Navbar";
import GoogleButton from "./GoogleButton";
import FacebookButton from "./FacebookButton";
const Auth = () => (
  <section className="auth">
    <div className="auth-cover" />
    <Navbar />
    <div className="auth__left">
      <button className="auth__signup">Sign Up</button>
      <GoogleButton className="google-signup" show={true} text="Sign Up with Google"/>
      <FacebookButton show={true} className="facebook-signup" text="Sign Up with Facebook"/>
    </div>
    <div className="auth__right">
      <div className="auth__login">Login</div>
      <GoogleButton className="google-login" show={true} text="Login with Google" />
      <FacebookButton className="facebook-login" show={true} text="Login with Facebook" />
    </div>
  </section>
);

export default Auth;
