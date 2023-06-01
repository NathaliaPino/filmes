//https://api.themoviedb.org/3/movie/157336?api_key=dd2d53e91fbe9a79da65d082a9f64edf


import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;