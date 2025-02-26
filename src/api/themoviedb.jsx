import axios from 'axios';

//themoviedb.org:litono2670@qodiq.com
const API_KEY = 'c37de1a11ef2039fd7809ba4906664bb';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`);
  return response.data.results;
};

export const fetchMovieByQuery = async movieName => {
  const response = await axios.get(`search/movie?query=${movieName}`);
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`);
  return response.data.results;
};
