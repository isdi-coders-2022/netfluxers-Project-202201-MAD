import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useState, useEffect, useReducer } from 'react';
import * as api from '../../services/apiLocal';
import { netfluxReducer } from '../reducers/reducer';
import * as action from '../reducers/action-creators';

export const Context = createContext({
  favoritesMovies: [{}],
  currentUser: '',
  addMovie: () => {},
  deleteMovie: () => {},
  updateMovie: () => {},
  getAllFav: () => {},
  updateCurrentUser: () => {},
});

export function ContextProvider({ children }) {
  const { user, isAuthenticated } = useAuth0();

  const [favoritesMovies, dispatch] = useReducer(netfluxReducer, [{}]);

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    if (isAuthenticated === true) {
      api
        .getAllFav(user.nickname)
        .then((resp) => dispatch(action.loadFavMovies(resp.data)));
    }
  }, [currentUser, isAuthenticated]);

  function updateCurrentUser(user1) {
    setCurrentUser(user1);
  }

  const addMovie = (newMovie) => {
    api.SetFav(newMovie).then((resp) => {
      dispatch(action.addMovies(resp.data));
    });
  };

  const deleteMovie = (movie) => {
    api.removeFav(movie.id).then((resp) => {
      dispatch(action.removeMovies(movie));
    });
  };

  const updateMovie = (movie) => {
    api.updateFav(movie).then((resp) => {
      dispatch(action.updateMovies(resp.data));
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const elementContext = {
    addMovie,
    deleteMovie,
    updateMovie,
    currentUser,
    updateCurrentUser,
    favoritesMovies,
  };

  return <Context.Provider value={elementContext}>{children}</Context.Provider>;
}
