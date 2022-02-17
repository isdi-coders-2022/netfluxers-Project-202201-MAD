import { Link } from 'react-router-dom';
import './style-fav-list.scss';
import { AiFillStar } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

export function FavoriteMovie({ movie }) {
  console.log(movie);
  return (
    <div className="movie">
      <Link to={`/details/${movie.id}`}>
        <div className="movie__poster-container">
          <img
            className="movie__poster"
            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            alt=""
          />
          <TiDeleteOutline className="delete__icon" />
        </div>
      </Link>
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
