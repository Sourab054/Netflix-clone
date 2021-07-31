import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Details.css";

const base_url = "https://image.tmdb.org/t/p/original";
const API_KEY = "03ec3fd413048c3fb576aaff2447f3dd";

const Details = () => {
  const [details, setDetails] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const location = useLocation();
  const isTv = location.state?.isTv;
  const { id } = useParams();

  const fetchDetailsMovie = async () => {
    const request = await axios.get(
      `https://api.themoviedb.org/3/${
        isTv ? "tv" : "movie"
      }/${id}?api_key=${API_KEY}&language=en-US`
    );
    setDetails(request.data);
    // console.log(request.data);
    return request;
  };

  const fetchRecommendations = async () => {
    const request = await axios.get(
      `https://api.themoviedb.org/3/${
        isTv ? "tv" : "movie"
      }/${id}/recommendations?api_key=${API_KEY}&language=en-US`
    );
    setRecommendations(request.data.results);
    console.log(request.data.results);
    return request;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  useEffect(() => {
    console.log(isTv);
    fetchDetailsMovie();
    fetchRecommendations();
    console.log(recommendations);
  }, [id]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  }

  const bg = details.backdrop_path;
  const bgc = `${base_url}${bg}`;
  //   console.log(bgc);
  // linear-gradient(
  //   to right,
  //   rgba(0, 0, 0, 0.8) 0,
  //   rgba(0, 0, 0, 0) 30%,
  // ),
  // linear-gradient(
  //   to top,
  //   rgba(0, 0, 0, 0.8) 0,
  //   rgba(0, 0, 0, 0.6) 20%,
  //   rgba(0, 0, 0, 0) 30%
  // ),

  return (
    <section className="details">
      <header
        className="details-body"
        style={{
          position: "relative",
          backgroundImage: `linear-gradient(25deg, rgba(0,0,0,0.9),  rgba(0,0,0,0.1)),url('${bgc}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="details-desc">
          <div className="details-head">
            <h1>{details.name || details.title}</h1>
            <p>{details.tagline}</p>
            <div className="details-btn">
              <button className="btn">
                <div className="icon-btn">
                  <FaPlay style={{ marginRight: "10px" }} />
                  Trailer
                </div>
              </button>
              <button className="btn">
                <div className="icon-btn">
                  <AiOutlinePlus size="18" style={{ marginRight: "10px" }} />
                  My List
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="details-flex">
        <div className="details-left">
          <div className="details-left-inner">
            <h3>
              {details.first_air_date?.slice(0, 4) ||
                details.release_date?.slice(0, 4)}
            </h3>
            <h4>16+</h4>
            <h3 className="season-details">
              {details.number_of_seasons
                ? details.number_of_seasons +
                  `${details.number_of_seasons === 1 ? " Season" : " Seasons"} `
                : timeConvert(details.runtime)}
            </h3>
            <p>HD</p>
          </div>
          <p
            style={{
              marginTop: "1rem",
              fontWeight: "700",
              color: "gray",
            }}
          >
            Overview:
          </p>
          <p>{truncate(details.overview, 300)}</p>
        </div>
        <div className="details-right">
          <p>
            <span style={{ marginRight: "5px" }}>Languages: </span>{" "}
            {details.languages || details.original_language}{" "}
          </p>
          <p>
            <span style={{ marginRight: "5px" }}>Genres: </span>{" "}
            {details.genres?.map((genre) => genre.name + ",")}.{" "}
          </p>
          <p>
            <span style={{ marginRight: "5px" }}>Rating: </span>{" "}
            {details.vote_average}{" "}
            <StarIcon style={{ fontSize: "18", color: "yellow" }} />
          </p>
        </div>
      </div>
      <div className="recommendations">
        <h2>Recommended </h2>
        <Slider {...settings} className="slider">
          {recommendations.map((movie) => {
            return (
              <Link to={{ pathname: `/${movie.id}`, state: { isTv } }}>
                <img
                  key={movie.id}
                  // onClick={() => handleClick(movie)}
                  className="row-poster"
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                />
              </Link>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Details;