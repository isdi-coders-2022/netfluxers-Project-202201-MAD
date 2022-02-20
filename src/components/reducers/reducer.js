import { moviesActionsList } from './action-list';

export function netfluxReducer(state, action) {
  switch (action.type) {
    case moviesActionsList.loadFavorites:
      return [...state, action.favoritesMovies];
    case moviesActionsList.add:
      return {
        ...state,
        favoritesMovies: [...state.favoritesMovies, action.movie],
      };
    case moviesActionsList.remove:
      return {
        ...state,
        favoritesMovies: state.favoritesMovies.filter(
          (item) => item.id !== action.movie.id
        ),
      };
    case moviesActionsList.update:
      return {
        ...state,
        favoritesMovies: state.favoritesMovies.map((item) =>
          item.id === action.movie.id ? action.movie : item
        ),
      };
    default:
      return state;
  }
}
