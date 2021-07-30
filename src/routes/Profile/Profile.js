import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Profile.css";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile-screen">
      <Navbar />
      <div className="profile-body">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <img
            className="profile-avatar"
            src="https://pbs.twimg.com/media/DmBraqkXcAA1Yco.jpg"
            alt=""
          />
          <div className="profile-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
              <h3>Plans</h3>
              <h4>Renewal Date : 28/07/2021</h4>
              <div className="plans">
                <div className="plans-desc">
                  <h5>Netflix Basic</h5>
                  <p>480p</p>
                </div>
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <div className="plans">
                <div className="plans-desc">
                  <h5>Netflix Standard</h5>
                  <p>1080p</p>
                </div>
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <div className="plans">
                <div className="plans-desc">
                  <h5>Netflix Premium</h5>
                  <p>4K+HDR</p>
                </div>
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <button
                className="profile-signout"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
