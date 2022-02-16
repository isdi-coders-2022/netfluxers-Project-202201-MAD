import './style-fav-list.scss';
import { useEffect,useState } from 'react';
import { GetAllLocalFav } from '../../services/apiLocal';


export function FavoriteMovie() {
  const [movieFav, setMovieFav] = useState();

  useEffect(() => {
    GetAllLocalFav().then((result) => {
      setMovieFav(result.data);
      console.log(movieFav);
    });
  }, []);

  return(
    <div className="movie">
    <img
      className="movieposter"
      src="https://image.tmdb.org/t/p/w1280/HORpg5CSkmeQlAolx3bKMrKgfi.jpg"
      alt=""
    />

    <div className="movie-stars">
      <i className="moviestars stars-1">⭐</i>
      <i className="moviestars stars-2">⭐</i>
      <i className="moviestars stars-3">⭐</i>
      <i className="moviestars stars-4">⭐</i>
      <i className="moviestars stars-5">⭐</i>
    </div>
    <span className="movietitle">James Bond Collection</span>
    <span className="moviegenred">Crime</span>
    <span className="item__duration">2h 30min</span>
  </div>
  )

  
  }
















