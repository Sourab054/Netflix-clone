import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, selectMovie } from "../../features/movieSlice";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import axios from "axios";
import requests from "../../requests";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const state = useSelector(selectMovie);
  // console.log(state);
  // let newState = ...new Set()
  // console.log(state);
  const [searchResults, setSearchResults] = useState(state);
  const history = useHistory();

  const base_url = "https://image.tmdb.org/t/p/original";
  const options = {
    includeScore: true,
    keys: ["title", "name"],
  };

  useEffect(() => {
    async function fetchData() {
      let movieArr = [];
      const netflixOriginals = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchPopularMovies}`
      );
      const trending = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchTrending}`
      );
      const topRated = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchTopRated}`
      );
      const action = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchActionMovies}`
      );
      const romance = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchRomanceMovies}`
      );
      movieArr.push(
        ...netflixOriginals.data.results,
        ...trending.data.results,
        ...topRated.data.results,
        ...action.data.results,
        ...romance.data.results
      );
      // console.log(movieArr);
      dispatch(getMovies(movieArr));
    }
    fetchData();
  }, [dispatch]);

  // let arr = state.filter(
  //   (ele, ind) =>
  //     ind ===
  //     state.findIndex((elem) => elem.id === ele.id && elem.id === ele.id)
  // );
  // // console.log(arr);
  // state = arr;

  useEffect(() => {
    if (searchQuery !== "") {
      const fuse = new Fuse(state, options);
      // console.log(fuse);
      const results = fuse.search(searchQuery);
      // console.log(results);
      const searchResults = searchQuery
        ? results.map((result) => result.item)
        : state;
      // console.log(searchResults);
      setSearchResults(searchResults);
    }
  }, [searchQuery]);

  return (
    <div>
      <button
        className="back-btn"
        onClick={() => {
          history.push("/");
        }}
      >
        <ArrowBackIcon />
      </button>
      <div className="search-body">
        <SearchIcon className="search" />
        <input
          type="text"
          value={searchQuery}
          placeholder="Search for a movie,show,genre,etc."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      {searchQuery === "" ? (
        <>
          <h1 className="search-head">Top Searches</h1>
          <div className="search-grid">
            {state.slice(1, 13).map((movie, index) => {
              return (
                movie.poster_path !== null && (
                  <>
                    <img
                      key={index}
                      className="search-img"
                      src={`${base_url}${movie.poster_path}`}
                      alt={movie.name}
                    />
                    {/* console.log({`${base_url}${movie.poster_path}`}); */}
                  </>
                )
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h1 className="search-head">Search Results :</h1>
          <div className="search-grid">
            {searchResults.map((movie, index) => {
              return (
                movie !== null && (
                  <div key={index}>
                    <img
                      key={index}
                      className="search-img"
                      src={`${base_url}${movie.poster_path}`}
                      alt={movie.name}
                    />
                    {/* console.log({`${base_url}${movie.poster_path}`}); */}
                  </div>
                )
              );
              // console.log(movie.id);
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
