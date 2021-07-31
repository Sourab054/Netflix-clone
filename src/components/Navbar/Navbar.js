import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../img/netflix-logo.png";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = ({
  setMoviesTab,
  moviesTab,
  tvTab,
  setTvTab,
  list,
  setList,
}) => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [tvActive, setTVActive] = useState(false);
  const [movieActive, setMovieActive] = useState(false);
  const [myListActive, setMyListActive] = useState(false);

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

  const handleTab = (e) => {
    if (e.target.innerText === "TV Shows") {
      setMovieActive(false);
      setMyListActive(false);
      setTVActive(true);
      setList(false);
      setMoviesTab(false);
      setTvTab(true);
    } else if (e.target.innerText === "Movies") {
      setMyListActive(false);
      setTVActive(false);
      setMovieActive(true);
      setList(false);
      setTvTab(false);
      setMoviesTab(true);
    } else if (e.target.innerText === "My List") {
      setTVActive(false);
      setMovieActive(false);
      setMyListActive(true);
      setTvTab(false);
      setMoviesTab(false);
      setList(true);
    }
  };

  useEffect(() => {
    setMovieActive(true);
  }, []);

  return (
    <div className={`nav ${show && "nav-scroll"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav-logo"
        src={logo}
        alt="NETFLIX LOGO"
      />
      <div className="nav-list">
        <Link
          className={tvActive ? "nav-link active" : "nav-link"}
          onClick={handleTab}
        >
          <p>TV Shows</p>
        </Link>
        <Link
          className={movieActive ? "nav-link active" : "nav-link"}
          onClick={handleTab}
        >
          <p>Movies</p>
        </Link>
        <Link
          className={myListActive ? "nav-link active" : "nav-link"}
          onClick={handleTab}
        >
          <p>My List</p>
        </Link>
      </div>

      <SearchIcon
        className="search-icon"
        onClick={() => history.push("/search")}
      />

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
