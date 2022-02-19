/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState, useContext } from 'react';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import { getDetail } from '../../services/apiTmdb';
import { Context } from '../contexto/context-provider';
import './details-web.scss';

export function DetailsFeature({ id }) {
  const [movie, setMovie] = useState();
  const { addMovie, currentUser } = useContext(Context);

  useEffect(() => {
    getDetail(id).then((data) => {
      setMovie(data.data);
    });
  }, [id]);

  function handleClick(obj) {
    addMovie(obj);
  }

  return (
    <div>
      {movie ? (
        <section className="details-feature">
          <div className="background__container">
            <img
              className="background-image"
              src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
              alt=""
            />
            <h2 className="movie-detail__title">{movie.original_title}</h2>
          </div>
          <div className="movie-detail__image-score">
            <img
              className="movie-detail__img"
              src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
            />
            <div className="score">
              <p className="score__text">{movie.vote_average}</p>
              <div className="score__container">
                {[1, 2, 3, 4, 5].map((e, i) => {
                  if (i + 1 < movie.vote_average / 2) {
                    return <AiFillStar className="score__icon" />;
                  }
                  return <AiFillStar className="score__icon--fade" />;
                })}
              </div>
              <div className="heart__container">
                <AiFillHeart
                  onClick={() => {
                    handleClick({
                      idmovie: movie.id,
                      original_title: movie.original_title,
                      poster_path: movie.poster_path,
                      runtime: movie.runtime,
                      vote_average: movie.vote_average,
                      user_average: '0',
                      nickname: currentUser,
                    });
                  }}
                  className="heart__icon"
                />
              </div>
            </div>
          </div>
          <div className="movie-detail">
            <div className="movie-detail__info">
              <div className="genres">
                {movie.genres.map((item) => (
                  <p className="genres__button genres__button--1">
                    {item.name}
                  </p>
                ))}
              </div>
              <p className="movie-detail__summary">{movie.overview}</p>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
