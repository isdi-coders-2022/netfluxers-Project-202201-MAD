import { createContext, useState, useEffect } from 'react';
import * as api from '../../services/apiLocal';

export const Context = createContext({
  moviesFav: [],
  addMovie: () => {},
  deleteMovie: () => {},
  updateMovie: () => {},
  getAllFav: () => {},
});

export function ContextProvider({ children }) {
  const [moviesFav, setMoviesFav] = useState([]);

  useEffect(() => {
    api.getAllFav().then((resp) => setMoviesFav(resp.data));
  }, []);

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
      setMoviesFav(
        movie.map((item) =>
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
  };

  return <Context.Provider value={elementContext}>{children}</Context.Provider>;
}
