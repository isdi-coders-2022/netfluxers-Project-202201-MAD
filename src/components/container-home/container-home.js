import { GenredMovie } from '../movies-home/genres-home';
import { HeaderHome } from '../movies-home/header-home';


export function ContainerHome() {
  return (
    <>
      <HeaderHome />
      <section className="genre">
        <div className="new-releases">
          <h2 className="genre__title">New releases</h2>
          <div className="genre genre--new-releases">
            <GenredMovie genred="80"/>
          </div>
        </div>
        <div className="Suspense">
          <h2 className="genre__title">Comedy</h2>
          <div className="genre genre--suspense">
            <GenredMovie genred="35" />
          </div>
        </div>
        <div className="Horror">
          <h2 className="genre__title">Horror</h2>
          <div className="genre genre--horror">
            <GenredMovie genred="27"/>
          </div>
        </div>
        <div className="action">
          <h2 className="genre__title">Action</h2>
          <div className="genre genre--action">
            <GenredMovie genred="28"/>
          </div>
        </div>
        <div className="romance">
          <h2 className="genre__title">Romance</h2>
          <div className="genre genre--romance">
            <GenredMovie genred="10749"/>
          </div>
        </div>
      </section>
    </>
  );
}
