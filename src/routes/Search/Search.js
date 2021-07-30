import React, { useEffect, useState } from "react";
// import axios from "../../axios";
import axios from "axios";
import requests from "../../requests";
import Fuse from "fuse.js";
import "./Search.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [action, setAction] = useState([]);
  const [romance, setRomance] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";
  const options = {
    includeScore: true,
    keys: ["title"],
  };
  useEffect(() => {
    async function fetchData() {
      const netflixOriginals = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
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

      await axios
        .all([netflixOriginals, topRated, action, romance, trending])
        .then(
          axios.spread((...responses) => {
            const resOne = responses[0].data.results;
            const resTwo = responses[1].data.results;
            const resThree = responses[2].data.results;
            const resFour = responses[3].data.results;
            const resFive = responses[4].data.results;

            console.log(resOne, resTwo, resThree, resFour, resFive);
            setNetflixOriginals(resOne);
            console.log(netflixOriginals);
            setTopRated(resTwo);
            setAction(resThree);
            setRomance(resFour);
            setTrending(resFive);
            console.log(
              netflixOriginals.data.results,
              topRated.data.results,
              action.data.results,
              trending.data.results,
              romance.data.results
            );
          })
        )
        .catch((err) => console.log(err));
      //   setData(request.data.results);
      //   console.log(request.data.results);
      if (searchQuery !== "") {
        const fuse = new Fuse(topRated.data.results, options);
        console.log(fuse);
        const results = fuse.search(searchQuery);
        console.log(results);
        const searchResults = searchQuery
          ? results.map((result) => result.item)
          : topRated;
        console.log(searchResults);
        setNetflixOriginals(searchResults);
        setTopRated(searchResults);
        setAction(searchResults);
        setRomance(searchResults);
        setTrending(searchResults);
      }
    }
    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery === "" ? (
        <div>
          <h1>Recommended</h1>
          {topRated.map((movie) => {
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
      ) : (
        <>
          {netflixOriginals.map((movie) => {
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
        </>
      )}
    </div>
  );
};

export default Search;
