import { useContext } from 'react';
import { FavoriteMovie } from '../favourites/fav-movie';
import '../favourites/style-fav-list.scss';

import { Context } from '../contexto/context-provider';

export function ContainerFav() {
  const { favoritesMovies } = useContext(Context);

  return (
    <div className="container-fav-list">
      <div className="container-fav-list-title">
        <h2>Favorite Movies</h2>
      </div>
      <div className="container-fav-list-movie">
        {favoritesMovies.map((movie) => (
          <FavoriteMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
