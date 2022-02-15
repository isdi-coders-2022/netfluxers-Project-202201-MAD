import { GenredMovie } from '../movies-home/genres-home';
import { HeaderHome } from '../movies-home/header-home';

export function ContainerHome() {
  return (
    <>
      <HeaderHome />
      <section classNameName="genre">
        <div classNameName="new-releases">
          <h2 classNameName="genre__title">New releases</h2>
          <div classNameName="genre genre--new-releases">
            <GenredMovie />
          </div>
        </div>
        <div className="Suspense">
          <h2 className="genre__title">Suspense</h2>
          <div className="genre genre--suspense">
            <GenredMovie />
          </div>
        </div>
        <div className="Horror">
          <h2 className="genre__title">Horror</h2>
          <div className="genre genre--horror">
            <GenredMovie />
          </div>
        </div>
        <div className="action">
          <h2 className="genre__title">Action</h2>
          <div className="genre genre--action">
            <GenredMovie />
          </div>
        </div>
        <div className="romance">
          <h2 className="genre__title">Romance</h2>
          <div className="genre genre--romance">
            <GenredMovie />
          </div>
        </div>
      </section>
    </>
  );
}
