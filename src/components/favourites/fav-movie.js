import { Link } from 'react-router-dom';
import './style-fav-list.scss';
import { AiFillStar } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useContext, useState } from 'react';
import { Context } from '../contexto/context-provider';

export function FavoriteMovie({ movie }) {
  const { deleteMovie, updateMovie } = useContext(Context);

  const [updateInputText, setUpdateInputText] = useState(0);

  function handlesDeleteClick(movieDelete) {
    deleteMovie(movieDelete);
  }

  function handlesChange(event) {
    setUpdateInputText(event.target.value);
  }

  function handlesSubmit(ev) {
    ev.preventDefault();
    updateMovie({ ...movie, user_average: +updateInputText });
    setUpdateInputText(0);
  }
  return (
    <div className="movie">
      <div className="movie__poster-container">
        <Link to={`/details/${movie.idmovie}`}>
          <img
            className="movie__poster"
            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            alt=""
          />
        </Link>
        <TiDeleteOutline
          className="delete__icon"
          onClick={() => {
            handlesDeleteClick(movie);
          }}
        />
      </div>

      <div className="movie-stars">
        {[1, 2, 3, 4, 5].map((e, i) => {
          if (i < movie.user_average) {
            return <AiFillStar className="staricon" />;
          }
          return <AiFillStar className="scoreicon--fade" />;
        })}
      </div>

      <span className="movietitle">{movie.original_title}</span>

      <span className="item__duration">{movie.runtime}min</span>
      <form onSubmit={handlesSubmit} className="update-score">
        <input
          className="update-score__input"
          type="number"
          min="0"
          max="5"
          id="user_average"
          name="user_average"
          value={updateInputText}
          onChange={(event) => {
            handlesChange(event);
          }}
        />
        <button className="update-score__button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
