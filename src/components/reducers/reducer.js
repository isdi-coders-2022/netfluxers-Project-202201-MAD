import { moviesActionsList } from './action-list';

export function netfluxReducer(state, action) {
  switch (action.type) {
    case moviesActionsList.loadFavorites:
      return [...action.movieFavList];
    case moviesActionsList.add:
      return [...state, action.movie];
    case moviesActionsList.remove:
      return state.filter((item) => item.id !== action.movie.id);
    case moviesActionsList.update:
      return state.map((item) =>
        item.id === action.movie.id ? action.movie : item
      );
    default:
      return state;
  }
}
