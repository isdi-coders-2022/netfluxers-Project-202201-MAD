import { moviesActionsList } from './action-list';

export const getAllMovies = (movies) => ({
  type: moviesActionsList.getAll,
  movies,
});

export const addMovie = (movie) => ({
  type: moviesActionsList.add,
  movie,
});

export const updateMovie = (movie, newScore) => ({
  type: moviesActionsList.update,
  movie,
  newScore,
});

export const removeMovie = (movie) => ({
  type: moviesActionsList.remove,
  movie,
});
