import axios from 'axios';
import { apiKey } from '../components/constants';

//endpoint
const apiBaseUrl = `https://api.themoviedb.org/3`;
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndPoint= `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndPoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

// dynamic endpoints
const movieDetailsEndpoint = id => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`
const movieCreditEndpoint = id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
const similarMoviesEndpoint = id => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`

// /1E5baAaEse26fej7uHcjOgEE2t2.jpg
// Image url basic from guide(TMDB)
export const image500 = path=>  `https://image.tmdb.org/t/p/w500${path}`
export const image342 = path=> `https://image.tmdb.org/t/p/w342${path}` 
export const image185 = path=>  `https://image.tmdb.org/t/p/w185${path}` 

const apiCall = async(endpoint, params) => {
    const options = {
      method: 'GET',
      url: endpoint,
      params: params? params : {}
    }
    try {
      const response = await axios.request(options);
      return response.data
    } catch(error) {
      console,log('error', error);
      return{}
    }
}

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
}
export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndPoint);
}
export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndPoint);
}
export const fetchMovieDetails = (id) => {
  return apiCall(movieDetailsEndpoint(id));
}
export const fetchMovieCredits = (id) => {
  return apiCall(movieCreditEndpoint(id));
}
export const fetchSimilarMovies = (id) => {
  return apiCall(similarMoviesEndpoint(id));
}