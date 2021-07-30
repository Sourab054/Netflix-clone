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
// import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
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
  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
      );
      // console.log(trailerurl);
      setTrailerUrl(trailerurl.data.results[0]?.key);
      // console.log(setTrailerUrl);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <Slider {...settings} className="slider">
        {movies.map((movie) => {
          return (
            <div>
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row-poster ${isLargeRow && "row-poster-large"}`}
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
              />
              {/* <div>
                <ThumbUpIcon/>
                <ThumbDownIcon/>
              </div> */}
            </div>
          );
        })}
      </Slider>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
