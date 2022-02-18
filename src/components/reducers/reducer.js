import { moviesActionsList } from './action-list';

export function netfluxReducer(state, action) {
  switch (action.type) {
    case moviesActionsList.getAll:
      return [...action.movies];
    case moviesActionsList.add:
      return [...state, action.movie];
    case moviesActionsList.update:
      return state.map((item) =>
        item.id === action.movie.id
          ? { ...item, user_average: action.newScore }
          : item
      );
    case moviesActionsList.remove:
      return state.filter((item) => item.id !== action.movie.id);
    default:
      return state;
  }
}
