import { useEffect, useState } from 'react';
import { getCast } from '../../services/apiTmdb';
import './details-web.scss';

export function DetailsCast({ id }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    getCast(id).then((data) => {
      setMovie(data.data.cast);
    });
  }, [id]);

  return (
    <div>
      {movie ? (
        <div className="cast">
          <h3 className="cast__title">Cast</h3>
          <div className="cast__container">
            {movie.map(
              (item, index) =>
                index < 5 && (
                  <figure key={item.id} className="cast__actor">
                    <img
                      className="cast__img"
                      src={`https://image.tmdb.org/t/p/w1280/${item.profile_path}`}
                      alt=""
                    />
                    <figcaption className="cast__figc">{item.name}</figcaption>
                  </figure>
                )
            )}
          </div>
          <div className="hr" />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
