import { useEffect, useState } from 'react';
import { getCast } from '../../services/apiTmdb';

export function DetailsCast() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getCast(550).then((data) => {
      console.log(movie);
    });
  }, []);

  return (
    <div>
      {movie ? (
        <div className="cast">
          <h3 className="cast__title">Cast</h3>
          <div className="cast__container">
            <figure className="cast__actor">
              <img
                className="cast__img"
                src={`https://image.tmdb.org/t/p/w1280/${movie.{i}.profile_path}`}
                alt=""
              />
              <figcaption className="cast__figc">{movie.name}</figcaption>
            </figure>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
