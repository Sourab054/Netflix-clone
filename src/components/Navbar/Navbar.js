import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../img/netflix-logo.png";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const navbarScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarScroll);
    return () => {
      window.removeEventListener("scroll", navbarScroll);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-scroll"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav-logo"
        src={logo}
        alt="NETFLIX LOGO"
      />
      <div className="search-body">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon
          onClick={() => history.push("/search")}
          style={{ paddingRight: "4px" }}
        />
      </div>
      <img
        onClick={() => history.push("/profile")}
        className="nav-avatar"
        src="https://pbs.twimg.com/media/DmBraqkXcAA1Yco.jpg"
        alt=""
      />
    </div>
  );
};

export default Navbar;
