import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./Banner.css";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const Banner = ({ tvTab }) => {
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);

  const fetchMovie = async () => {
    const req = await axios.get(requests.fetchTrending);
    const banner =
      req.data.results[Math.floor(Math.random() * req.data.results.length)];
    // console.log(req.data.results);
    setMovie(banner);
    return req;
  };

  const fetchTv = async () => {
    const req = await axios.get(requests.fetchTVMystery);
    const banner =
      req.data.results[Math.floor(Math.random() * req.data.results.length)];
    // console.log(req.data.results);
    setTv(banner);
    return req;
  };

  useEffect(() => {
    console.log(tvTab);
    tvTab ? fetchTv() : fetchMovie();
  }, [tvTab]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.99),  rgba(0,0,0,0)),linear-gradient(to bottom, rgba(0,0,0,0),  rgba(0,0,0,0.9)),url("https://image.tmdb.org/t/p/original/${
          tvTab ? tv?.backdrop_path : movie?.backdrop_path
        }")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {tvTab ? tv?.title || tv?.name : movie?.title || movie?.name}
        </h1>
        <div className="banner-btn">
          <button className="btn">
            <div className="icon-btn">
              <FaPlay style={{ marginRight: "10px" }} />
              Play
            </div>
          </button>
          <button className="btn">
            <div className="icon-btn">
              <AiOutlinePlus style={{ marginRight: "10px" }} />
              My List
            </div>
          </button>
        </div>
        <p className="banner-desc">
          {truncate(tvTab ? tv?.overview : movie?.overview, 220)}
        </p>
      </div>
      {/* <div className="overlay"></div> */}
    </header>
  );
};

export default Banner;
