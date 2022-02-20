import { moviesActionsList } from './action-list';

export const loadFavMovies = (movieFavList) => ({
  type: moviesActionsList.loadFavorites,
  movieFavList,
});

export const addMovies = (movie) => ({
  type: moviesActionsList.add,
  movie,
});

export const removeMovies = (movie) => ({
  type: moviesActionsList.remove,
  movie,
});
export const updateMovies = (movie) => ({
  type: moviesActionsList.update,
  movie,
});
