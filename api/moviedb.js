import axios from 'axios';
import { apiKey } from '../components/constants';

//endpoint
const apiBaseUrl = `https://api.themoviedb.org/3`;
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndPoint= `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndPoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

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