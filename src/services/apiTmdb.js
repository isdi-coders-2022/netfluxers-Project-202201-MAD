import axios from 'axios';

export function getDetail(idmovie) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${idmovie}?api_key=4b4f416a1b778e7770adf119452664ae`
  );
}
export function getCast(idmovie) {
  return axios.get(
    `http://api.themoviedb.org/3/movie/${idmovie}/credits?api_key=4b4f416a1b778e7770adf119452664ae`
  );
}
export function getTrailer(idmovie) {
  return axios.get(
    `http://api.themoviedb.org/3/movie/${idmovie}/videos?api_key=4b4f416a1b778e7770adf119452664ae`
  );
}
