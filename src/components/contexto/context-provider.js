import { useAuth0 } from '@auth0/auth0-react';
import { createContext, useState, useEffect } from 'react';
import * as api from '../../services/apiLocal';

export const Context = createContext({
  moviesFav: [],
  currentUser: '',
  addMovie: () => {},
  deleteMovie: () => {},
  updateMovie: () => {},
  getAllFav: () => {},
  updateCurrentUser: () => {},
});

export function ContextProvider({ children }) {
  const [moviesFav, setMoviesFav] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated === true) {
      api.getAllFav(currentUser).then((resp) => setMoviesFav(resp.data));
    }
  }, [currentUser, isAuthenticated]);

  function updateCurrentUser(user1) {
    setCurrentUser(user1);
  }

  const addMovie = (newMovie) => {
    api.SetFav(newMovie).then((resp) => {
      setMoviesFav([...moviesFav, resp.data]);
    });
  };

  const deleteMovie = (movie) => {
    api.removeFav(movie.id).then((resp) => {
      //   if (resp.status === 200) {
      setMoviesFav(moviesFav.filter((item) => item.id !== movie.id));
      //   }
    });
  };

  const updateMovie = (movie, newscore) => {
    api.updateFav(movie).then((resp) => {
      console.log(resp);
      setMoviesFav(
        moviesFav.map((item) =>
          item.id === resp.data.id ? { ...item, user_average: newscore } : item
        )
      );
    });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const elementContext = {
    moviesFav,
    addMovie,
    deleteMovie,
    updateMovie,
    currentUser,
    updateCurrentUser,
  };

  return <Context.Provider value={elementContext}>{children}</Context.Provider>;
}
