import { useEffect, useState } from 'react';
import { getDetail } from '../../services/apiTmdb';
import './style-home-header.scss';

export function HeaderHome() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getDetail(550).then((data) => {
      setMovie(data.data);
    });
  }, []);

  return (
    <div>
      {movie ? (
        <section className="featured-movie">
          <img
            className="featured-movie__background-image"
            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
            alt=""
          />
          <div className="featured-movie__container">
            <article data-testid="article" className="movie-info">
              <h2 className="movie-info__title">{movie.original_title}</h2>
              <p className="movie-info__description">{movie.overview}</p>
              <button type="button" className="movie-info__button">
                Watch Trailer
              </button>
            </article>
            <div className="feature-movie__image-container">
              <img
                className="featured-movie__image"
                src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                alt=""
              />
            </div>
          </div>
        </section>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
