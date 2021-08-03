const API_KEY = "03ec3fd413048c3fb576aaff2447f3dd";

const requests = {
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTVAction: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&with_watch_monetization_types=flatrate`,
  fetchTVAnimation: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=16&with_watch_monetization_types=flatrate`,
  fetchTVCrime: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=80&with_watch_monetization_types=flatrate`,
  fetchTVComedy: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
  fetchTVDrama: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=18&with_watch_monetization_types=flatrate`,
  fetchTVFantasy: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=10765&with_watch_monetization_types=flatrate`,
  fetchTVFamily: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=10751&with_watch_monetization_types=flatrate`,
  fetchTVMystery: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=9648&with_watch_monetization_types=flatrate`,
  fetchTVKids: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=10762&with_watch_monetization_types=flatrate`,
};

export default requests;
