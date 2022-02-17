import { Link } from 'react-router-dom';
import './style-fav-list.scss';
import { AiFillStar } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useContext, useState } from 'react';
import { Context } from '../contexto/context-provider';

export function FavoriteMovie({ movie }) {
  const { deleteMovie } = useContext(Context);
  const { updateMovie } = useContext(Context);

  const [updateInputText, setUpdateInputText] = useState('');

  function handleClick(moviee) {
    deleteMovie(moviee);
  }
  function updateClick(moviee, newscore) {
    console.log(newscore);
    console.log(moviee);
    updateMovie(moviee, newscore);
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
            handleClick(movie);
          }}
        />
      </div>

      {/* <div className="movie-stars">
        {[1, 2, 3, 4, 5].map((e, i) => {
          if (i + 1 < movie.vote_average / 2) {
            return <AiFillStar className="staricon" />;
          }
          return <AiFillStar className="scoreicon--fade" />;
        })}
      </div> */}
      <div className="movie-stars">
        {[1, 2, 3, 4, 5].map((e, i) => {
          if (i < movie.user_average) {
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateClick(movie, +updateInputText);
        }}
        className="update-score"
      >
        <input
          className="update-score__input"
          type="text"
          id="user_avege"
          name="user_avege"
          value={updateInputText}
          onChange={(e) => setUpdateInputText(e.target.value)}
        />
        <button className="update-score__button" type="submit">
          Udpate
        </button>
      </form>
    </div>
  );
}
