import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useState, useEffect, useReducer } from 'react';
import * as api from '../../services/apiLocal';
import { netfluxReducer } from '../reducers/reducer';
import * as action from '../reducers/action-creators';

export const Context = createContext({
  favoritesMovies: [],
  // moviesFav: [],
  currentUser: '',
  // addMovie: () => {},
  // deleteMovie: () => {},
  // updateMovie: () => {},
  getAllFav: () => {},
  updateCurrentUser: () => {},
});

export function ContextProvider({ children }) {
  const favoritesMovies = [];
  // const [moviesFav, setMoviesFav] = useState([]);
  const [state, dispatch] = useReducer(netfluxReducer, favoritesMovies);

  const [currentUser, setCurrentUser] = useState('');
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated === true) {
      api
        .getAllFav(currentUser)
        .then((resp) => dispatch(action.loadFavMovies(resp.data)));
    }
  }, [currentUser, isAuthenticated]);

  function updateCurrentUser(user1) {
    setCurrentUser(user1);
  }

  // const addMovie = (newMovie) => {
  //   api.SetFav(newMovie).then((resp) => {
  //     setMoviesFav([...moviesFav, resp.data]);
  //   });
  // };

  // const deleteMovie = (movie) => {
  //   api.removeFav(movie.id).then((resp) => {
  //     setMoviesFav(moviesFav.filter((item) => item.id !== movie.id));
  //   });
  // };

  // const updateMovie = (movie, newscore) => {
  //   api.updateFav(movie).then((resp) => {
  //     console.log(resp);
  //     setMoviesFav(
  //       moviesFav.map((item) =>
  //         item.id === resp.data.id ? { ...item, user_average: newscore } : item
  //       )
  //     );
  //   });
  // };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const elementContext = {
    // moviesFav,
    // addMovie,
    // deleteMovie,
    // updateMovie,
    currentUser,
    updateCurrentUser,
    favoritesMovies,
    state,
  };

  return <Context.Provider value={elementContext}>{children}</Context.Provider>;
}
