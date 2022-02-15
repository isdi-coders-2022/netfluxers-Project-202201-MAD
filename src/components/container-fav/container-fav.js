import { FavoriteMovie } from "../favourites/fav-movie";

export function ContainerFav(){
    return(
    <div className="container-fav-list">
      <div className="container-fav-list-title">
        <h2>Favorite Movies</h2>
      </div>
      <div className="container-fav-list-movie">
        <FavoriteMovie/>        
      </div>
    </div>




    )
}
   
