import axios, { Axios } from 'axios';

const API_LOCAL = 'http://localhost:4500/movie/';

export function removeFav(id) {
  return axios.delete(API_LOCAL + id);
}

export function updateFav(movie = {}) {
  return axios.patch(API_LOCAL + movie.id, movie);
}

export function SetFav(movie) {
  return axios.post(API_LOCAL, movie);
}

export function getAllFav(nickname) {
  return axios.get(API_LOCAL);
}
