const API_KEY = "5db178ebb00656dd772d87bbcc6ef7df";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genere=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genere=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genere=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genere=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genere=99`,
};

export default requests;
