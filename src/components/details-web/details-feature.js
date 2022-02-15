export function DetailsFeature(film, cast) {
  const template = `
    <section className="details-feature">
      <div className="background-image">
        <h2 className="movie-detail__title">${film.original_title}</h2>
      </div>
      <div className="movie-detail__image-score">
        <img
          className="movie-detail__img"
          src="https://image.tmdb.org/t/p/w1280/${film.poster_path}"
        />
        <div className="score">
          <p className="score__text">${film.vote_average}</p>
          <div className="score__container">
            <i className="fa-solid fa-star score__icon score__icon--1" />
            <i className="fa-solid fa-star score__icon score__icon--2" />
            <i className="fa-solid fa-star score__icon score__icon--3" />
            <i className="fa-solid fa-star score__icon score__icon--4" />
            <i className="fa-solid fa-star score__icon score__icon--5" />
          </div>
        </div>
      </div>
      <section className="movie-detail">
        <div className="movie-detail__info">
          <div className="genres">
            <i className="genres__icon icon__heart fa-solid fa-heart" />
            <p className="genres__button genres__button--1">Action</p>
            <p className="genres__button genres__button--2">Thriller</p>
            <p className="genres__button genres__button--3">Horror</p>
          </div>
          <p className="movie-detail__summary">
      ${film.overview}
          </p>
          <div className="cast">
            <h3 className="cast__title">Cast</h3>
            <div className="cast__container">
              <img
                src="/images/Screenshot 2022-02-14 at 20.03.55.png"
                alt=""
                className="cast__image"
              />
              <img
                src="/images/Screenshot 2022-02-14 at 20.03.55.png"
                alt=""
                className="cast__image"
              />
              <img
                src="/images/Screenshot 2022-02-14 at 20.03.55.png"
                alt=""
                className="cast__image"
              />
              <img
                src="/images/Screenshot 2022-02-14 at 20.03.55.png"
                alt=""
                className="cast__image"
              />
              <img
                src="/images/Screenshot 2022-02-14 at 20.03.55.png"
                alt=""
                className="cast__image"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="hr" />
    </section>`;
  return template;
}
