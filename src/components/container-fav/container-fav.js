import { useState, useEffect, useContext } from 'react';
import { FavoriteMovie } from '../favourites/fav-movie';
import '../favourites/style-fav-list.scss';
import { getAllFav } from '../../services/apiLocal';
import { Context } from '../contexto/context-provider';

export function ContainerFav() {
  const [movieFav, setMovieFav] = useState([]);
  const { moviesFav } = useContext(Context);

  useEffect(() => {
    getAllFav().then((result) => {
      setMovieFav(result.data);
    });
  }, []);

  return (
    <div className="container-fav-list">
      <div className="container-fav-list-title">
        <h2>Favorite Movies</h2>
      </div>
      <div className="container-fav-list-movie">
        {moviesFav.map((movie) => (
          <FavoriteMovie movie={movie} />
        ))}
      </div>
    </div>
  );
}
