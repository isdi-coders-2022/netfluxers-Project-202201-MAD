/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import { getDetail } from '../../services/apiTmdb';
import './details-web.scss';

export function DetailsTrailer() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getDetail(550).then((data) => {
      setMovie(data.data);
    });
  }, []);

  return (
    <div>
      {movie ? (
        <section className="movie-trailer">
          <h4 className="movie-trailer__title">Trailer</h4>
          <div className="movie-trailer__container">
            <iframe
              title="trailer"
              className="movie-trailer__vid"
              src="https://www.youtube.com/embed/"
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
