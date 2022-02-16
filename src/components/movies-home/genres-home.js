import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieGenres } from '../../services/apiTmdb';
import './style-home-header.scss';

export function GenredMovie({ genred }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovieGenres(genred).then((data) => {
      setMovie(data.data.results);
      console.log(data.data.results);
    });
  }, []);

  return (
    <>
      {movie.map(
        (item, index) =>
          index < 7 && (
            <figure data-testid="figure" className="genre__figure">
              <Link to={`/details/${item.id}`}>
                <img
                  data-testid="poster"
                  src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}
                  alt=""
                  className="genre__image"
                />
              </Link>
              <figcaption data-testid="figcaption" className="genre__figc">
                {item.title}
              </figcaption>
            </figure>
          )
      )}
    </>
  );
}
