import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import "./Search.css";
import { useSelector } from "react-redux";
import { selectMovie } from "../../features/movieSlice";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const state = useSelector(selectMovie);
  const [searchResults, setSearchResults] = useState(state);
  const history = useHistory();

  const base_url = "https://image.tmdb.org/t/p/original";
  const options = {
    includeScore: true,
    keys: ["title", "name"],
  };

  useEffect(() => {
    if (searchQuery !== "") {
      const fuse = new Fuse(state, options);
      console.log(fuse);
      const results = fuse.search(searchQuery);
      console.log(results);
      const searchResults = searchQuery
        ? results.map((result) => result.item)
        : state;
      console.log(searchResults);
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
        <div>
          <h1 className="search-head">Top Searches</h1>
          <div className="search-grid">
            {state.map((movie) => {
              return (
                <>
                  <img
                    key={movie.id}
                    className="search-img"
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.name}
                  />
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="search-grid">
          <h1 className="search-head">Search Results :</h1>

          {searchResults.map((movie) => {
            return (
              <>
                <img
                  key={movie.id}
                  className="search-img"
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                />
                {/* console.log({`${base_url}${movie.poster_path}`}); */}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
