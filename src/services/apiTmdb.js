import axios from 'axios';

const API_KEY = '4b4f416a1b778e7770adf119452664ae';

export function getDetail(idmovie) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${idmovie}?api_key=${API_KEY}`
  );
}
export function getCast(idmovie) {
  return axios.get(
    `http://api.themoviedb.org/3/movie/${idmovie}/credits?api_key=${API_KEY}`
  );
}
export function getTrailer(idmovie) {
  return axios.get(
    `http://api.themoviedb.org/3/movie/${idmovie}/videos?api_key=${API_KEY}`
  );
}
export function getMovieGenres(idgenre) {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${idgenre}&primary_release_year=2021&api_key=${API_KEY}`
  );
}
