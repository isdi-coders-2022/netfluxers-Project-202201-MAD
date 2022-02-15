import './style-fav-list.scss';

export function FavoriteMovie() {
  return (
    <div className="movie">
      <img
        className="movie__poster"
        src="https://image.tmdb.org/t/p/w1280/HORpg5CSkmeQlAolx3bKMrKgfi.jpg"
        alt=""
      />

      <div className="movie-stars">
        <i className="movie__stars stars-1">⭐</i>
        <i className="movie__stars stars-2">⭐</i>
        <i className="movie__stars stars-3">⭐</i>
        <i className="movie__stars stars-4">⭐</i>
        <i className="movie__stars stars-5">⭐</i>
      </div>
      <span className="movie__title">James Bond Collection</span>
      <span className="movie__genred">Crime</span>
      <span className="item__duration">2h 30min</span>
    </div>
  );
}
