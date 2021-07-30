import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Row from "../../components/Row/Row";
import requests from "../../requests";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="home">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default Home;
