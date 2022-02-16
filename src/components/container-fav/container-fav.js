import { useState, useEffect } from 'react';
import { FavoriteMovie } from '../favourites/fav-movie';
import '../favourites/style-fav-list.scss';
import { GetAllLocalFav } from '../../services/apiLocal';

export function ContainerFav() {
  const [movieFav, setMovieFav] = useState([]);

  useEffect(() => {
    GetAllLocalFav().then((result) => {
      setMovieFav(result.data);
    });
  }, []);

  return (
    <div className="container-fav-list">
      <div className="container-fav-list-title">
        <h2>Favorite Movies</h2>
      </div>
      <div className="container-fav-list-movie">
        {movieFav.map((movie) => (
          <FavoriteMovie movie={movie} />
        ))}
      </div>
    </div>
  );
}
