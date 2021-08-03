import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Row from "../../components/Row/Row";
import { getMovies, selectMovie } from "../../features/movieSlice";
import requests from "../../requests";

const Home = () => {
  const [moviesTab, setMoviesTab] = useState(false);
  const [tvTab, setTvTab] = useState(false);
  const [list, setList] = useState(false);

  // console.log(movies);
  useEffect(() => {
    setMoviesTab(true);
    setTvTab(false);
  }, []);

  return (
    <div className="home">
      <Navbar
        moviesTab={moviesTab}
        setMoviesTab={setMoviesTab}
        tvTab={tvTab}
        setTvTab={setTvTab}
        list={list}
        setList={setList}
      />
      <Banner isTv={true} tvTab={tvTab} />
      {tvTab && (
        <>
          <Row
            title="Popular on Netflix"
            isTv={true}
            fetchUrl={requests.fetchPopularTV}
          />
          <Row
            title="Action & Adventure"
            isTv={true}
            fetchUrl={requests.fetchTVAction}
          />
          <Row
            title="Animation"
            isTv={true}
            fetchUrl={requests.fetchTVAnimation}
          />
          <Row title="Crime" isTv={true} fetchUrl={requests.fetchTVCrime} />
          <Row title="Comedies" isTv={true} fetchUrl={requests.fetchTVComedy} />
          <Row title="Drama" isTv={true} fetchUrl={requests.fetchTVDrama} />
          <Row title="Fantasy" isTv={true} fetchUrl={requests.fetchTVFantasy} />
          <Row title="Family" isTv={true} fetchUrl={requests.fetchTVFamily} />
          <Row title="Mystery" isTv={true} fetchUrl={requests.fetchTVMystery} />
          <Row title="Kids" isTv={true} fetchUrl={requests.fetchTVKids} />
        </>
      )}
      {moviesTab && (
        <>
          <Row
            title="Popular on Netflix"
            movie="movie"
            fetchUrl={requests.fetchPopularMovies}
          />
          <Row
            title="Trending"
            movie="movie"
            fetchUrl={requests.fetchTrending}
          />
          <Row
            title="Top Rated"
            movie="movie"
            fetchUrl={requests.fetchTopRated}
          />
          <Row
            title="Action & Adventure"
            movie="movie"
            fetchUrl={requests.fetchActionMovies}
          />
          <Row
            title="Comedies"
            movie="movie"
            fetchUrl={requests.fetchComedyMovies}
          />
          <Row
            title="Crime"
            movie="movie"
            fetchUrl={requests.fetchCrimeMovies}
          />
          <Row
            title="Drama"
            movie="movie"
            fetchUrl={requests.fetchDramaMovies}
          />
          <Row
            title="Documentaries"
            movie="movie"
            fetchUrl={requests.fetchDocumentaries}
          />
          <Row
            title="Horror"
            movie="movie"
            fetchUrl={requests.fetchHorrorMovies}
          />
          <Row
            title="Romance"
            movie="movie"
            fetchUrl={requests.fetchRomanceMovies}
          />
          <Row
            title="Thriller"
            movie="movie"
            fetchUrl={requests.fetchThrillerMovies}
          />
        </>
      )}
    </div>
  );
};

export default Home;
