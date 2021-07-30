import React, { useState } from "react";
import "./SignIn.css";
import { auth } from "../../firebase";
import SignIn from "./SignIn";

const SignUp = () => {
  const [signedUp, setSignedUp] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // const register = (e) => {
  //   e.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       console.log(user);
  //       setEmail("");
  //       setPassword("");
  //       setSignedUp(true);
  //     })
  //     .catch((err) => alert(err.message));
  // };
  return (
    <>
      {signedUp ? (
        <SignIn />
      ) : (
        <div className="signup-bg">
          <div className="sign-in-body signup">
            <form>
              <h1>Sign Up</h1>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="submit-btn"
                onClick={() => setSignedUp(true)}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
