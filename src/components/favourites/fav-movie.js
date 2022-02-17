import { Link } from 'react-router-dom';
import './style-fav-list.scss';
import { AiFillStar } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { RemoveFav } from '../../services/apiLocal';

export function FavoriteMovie({ movie }) {
  console.log(movie);

  function handleClick(id) {
    RemoveFav(id);
    console.log(id);
  }
  return (
    <div className="movie">
      <div className="movie__poster-container">
        <Link to={`/details/${movie.id}`}>
          <img
            className="movie__poster"
            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            alt=""
          />
        </Link>
        <TiDeleteOutline
          className="delete__icon"
          onClick={() => {
            handleClick(movie.id);
          }}
        />
      </div>

      <div className="movie-stars">
        {[1, 2, 3, 4, 5].map((e, i) => {
          if (i + 1 < movie.vote_average / 2) {
            return <AiFillStar className="staricon" />;
          }
          return <AiFillStar className="scoreicon--fade" />;
        })}
      </div>
      <span className="movietitle">{movie.original_title}</span>
      {/* {movie.genres.map(
        (item, index) => index < 2 && <p className="moviegenres">{item.name}</p>
      )} */}
      <span className="item__duration">{movie.runtime}min</span>
    </div>
  );
}
