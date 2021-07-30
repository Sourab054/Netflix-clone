import React, { useState } from "react";
import "./SignIn.css";
import SignUp from "./SignUp";
import { auth } from "../../firebase";

const SignIn = () => {
  const [signUp, setSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    if (!auth.user) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          setEmail("");
          setPassword("");
        })
        .catch((err) => alert(err.message));
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          setEmail("");
          setPassword("");
        })
        .catch((err) => alert(err.message));
    }
  };
  return (
    <>
      {signUp ? (
        <SignUp />
      ) : (
        <div className="sign-in-body">
          <form>
            <h1>Sign In</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submit-btn" onClick={signIn}>
              Sign In
            </button>
            <h4>
              <span className="signin-lowerbody">New to Netflix? </span>

              <span className="signup-link" onClick={() => setSignUp(true)}>
                Sign Up now.
              </span>
            </h4>
          </form>
        </div>
      )}
    </>
  );
};

export default SignIn;
