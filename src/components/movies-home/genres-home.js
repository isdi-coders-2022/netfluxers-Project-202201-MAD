import './style-home-header.scss';

export function GenredMovie() {
  // const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   getGenre(12).then((data) => {
  //     // setMovie(data.data);
  //     console.log(data.data.results[1]);
  //   });
  // }, []);
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
