const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cd645533d11f1e46be7243753c49caff';

async function fetchMovies(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error occurred while fetching movies');
  }
  return response.json();
}


export function getTrendingMovies() {
    return fetchMovies(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    
}

export function getMovieById(movieId) {
  return fetchMovies(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}
export function getMovieReviews(movieId) {
  return fetchMovies(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
}
export function getMovieCast(movieId) {
  return fetchMovies(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}
export function getMoviesBySearch(query) {
  return fetchMovies(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );
}
