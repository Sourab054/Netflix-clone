import React from "react";
import { useState } from "react";
import "./Login.css";
import SignIn from "./SignIn";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login-nav">
        <img
          className="loginLogo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="login-btn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="gradient" />
      </div>
      <div className="signin-body">
        {signIn ? (
          <SignIn />
        ) : (
          <div className="login-body">
            {" "}
            <h1>Unlimited films,TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.{" "}
            </h3>
            <div className="input">
              <form>
                <input
                  type="email"
                  className="login-input"
                  placeholder="Enter email address"
                />
                <button className="input-btn" onClick={() => setSignIn(true)}>
                  Get started
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
