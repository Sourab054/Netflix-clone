import { useState, useEffect } from "react";
import React from "react";
import axios from "../../axios";
import "./Row.css";
import Youtube from "react-youtube";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { Link } from "react-router-dom";
// import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, isTv, movie, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
  };

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // console.log(movies);
  // const handleClick = async (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     let trailerurl = await axios.get(
  //       `/movie/${movie.id}/videos?api_key=03ec3fd413048c3fb576aaff2447f3dd`
  //     );
  //     // console.log(trailerurl);
  //     setTrailerUrl(trailerurl.data.results[0]?.key);
  //     // console.log(setTrailerUrl);
  //   }
  // };

  return (
    <div className="row">
      <h2>{title}</h2>
      <Slider {...settings} className="slider">
        {movies.map((movie) => {
          return (
            <Link to={{ pathname: `/${movie.id}`, state: { isTv } }}>
              <div>
                <img
                  key={movie.id}
                  // onClick={() => handleClick(movie)}
                  className="row-poster"
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                />
                {/* <div>
                <ThumbUpIcon/>
                <ThumbDownIcon/>
              </div> */}
              </div>
            </Link>
          );
        })}
      </Slider>
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
};

export default Row;
