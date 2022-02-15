import './style-home-header.scss';

export function HeaderHome() {
  return (
    <section className="featured-movie">
      <img
        className="featured-movie__background-image"
        src="https://image.tmdb.org/t/p/w1280///VuukZLgaCrho2Ar8Scl9HtV3yD.jpg"
        alt=""
      />
      <div className="featured-movie__container">
        <article data-testid="article" className="movie-info">
          <h2 className="movie-info__title">Venom</h2>
          <p className="movie-info__description">
            Investigative journalist Eddie Brock attempts a comeback following a
            scandal, but accidentally becomes the host of Venom, a violent,
            super powerful alien symbiote. Soon, he must rely on his newfound
            powers to protect the world from a shadowy organization looking for
            a symbiote of their own.
          </p>
          <button type="button" className="movie-info__button">
            Watch Trailer
          </button>
        </article>
        <div className="feature-movie__image-container">
          <img
            className="featured-movie__image"
            src="https://image.tmdb.org/t/p/w1280//2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
