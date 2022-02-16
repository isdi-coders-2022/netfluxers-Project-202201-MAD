import axios, { Axios } from "axios";

const API_LOCAL = 'http://localhost:3000/movie';

export function RemoveFav(id){
    return axios.remove(API_LOCAL, id);
}

export function UpdateFav(movie,id) {
    return axios.patch(API_LOCAL+id, movie);
}

export function SetFav(movie) {
    return axios.post(API_LOCAL, movie);
}


export function GetAllLocalFav() {
    return axios.get(API_LOCAL)
}