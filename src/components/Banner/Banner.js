import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./Banner.css";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const req = await axios.get(requests.fetchTrending);
      const banner =
        req.data.results[Math.floor(Math.random() * req.data.results.length)];
      console.log(banner);
      setMovie(banner);
      return req;
    }
    fetchMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{movie?.title || movie?.name}</h1>
        <div className="banner-btn">
          <button className="btn">
            <div className="icon-btn">
              <FaPlay style={{ marginRight: "10px" }} />
              Play
            </div>
          </button>
          <button className="btn">
            <div className="icon-btn">
              <AiOutlinePlus size="18" style={{ marginRight: "10px" }} />
              My List
            </div>
          </button>
        </div>
        <h1 className="banner-desc">{truncate(movie?.overview, 250)}</h1>
      </div>
      <div className="overlay"></div>
    </header>
  );
};

export default Banner;
