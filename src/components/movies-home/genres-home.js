export function GenredMovie() {
  return (
    <figure data-testid="figure" className="genre__figure">
      <img
        data-testid="poster"
        src="https://image.tmdb.org/t/p/w1280//8kSerJrhrJWKLk1LViesGcnrUPE.jpg"
        alt=""
        className="genre__image"
      />
      <figcaption data-testid="figcaption" className="genre__figc">
        A Disgrace to Criminals Everywhere.
      </figcaption>
    </figure>
  );
}
