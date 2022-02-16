/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import { getDetail } from '../../services/apiTmdb';
import './details-web.scss';

export function DetailsFeature() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getDetail(550).then((data) => {
      setMovie(data.data);
    });
  }, []);

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
                <AiFillStar
                  color="yellow"
                  className="score__icon  score__icon--1"
                />
                <AiFillStar
                  color="yellow"
                  className="score__icon  score__icon--2"
                />
                <AiFillStar
                  color="yellow"
                  className="score__icon  score__icon--3"
                />
                <AiFillStar
                  color="yellow"
                  className="score__icon  score__icon--4"
                />
                <AiFillStar
                  color="yellow"
                  className="score__icon score__icon--5"
                />
              </div>
              <div className="heart__container">
                <AiFillHeart className="heart__icon" />
              </div>
            </div>
          </div>
          <div className="movie-detail">
            <div className="movie-detail__info">
              <div className="genres">
                <p className="genres__button genres__button--1">Action</p>
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
