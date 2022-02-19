/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import { getTrailer } from '../../services/apiTmdb';
import './details-web.scss';

export function DetailsTrailer({ id }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    getTrailer(id).then((data) => {
      setMovie(data.data);
    });
  }, [id]);

  return (
    <div>
      {movie ? (
        <section className="movie-trailer">
          <h4 className="movie-trailer__title">Trailer</h4>
          <div className="movie-trailer__container">
            <iframe
              title="trailer"
              className="movie-trailer__vid"
              src={`https://www.youtube.com/embed/${movie.results[0].key}`}
              frameBorder="0"
            />
          </div>
        </section>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
