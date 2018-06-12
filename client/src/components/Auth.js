import React from "react";
import Navbar from "./Navbar";
import GoogleButton from "./GoogleButton";
const Auth = () => (
  <section className="auth">
    <div className="auth-cover" />
    <Navbar />
    <div className="auth__left">
      {/* <button className="auth__signup">Sign Up</button> */}
      <GoogleButton />
    </div>
    <div className="auth__right">
      <div className="auth__login">Login</div>
    </div>
  </section>
);

export default Auth;
