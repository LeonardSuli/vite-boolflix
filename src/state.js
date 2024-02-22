import {reactive} from 'vue';

import axios from 'axios';

export const state = reactive({

    api_url_movies: 'https://api.themoviedb.org/3/search/movie?api_key=a7166e72bbdeac5df51ab7b3fc97c36e',
    movies: [],

    api_url_serieTV: 'https://api.themoviedb.org/3/search/tv?api_key=a7166e72bbdeac5df51ab7b3fc97c36e',
    serieTV: [],



    getMovies(movie_url){
        
        axios
        .get(movie_url)
        .then(response => {

        console.log(response.data.results);

        this.movies = response.data.results

        })
        .catch(error => {

        console.error(error);
        
        })
    },




    getSerieTV(serieTV_url){
        
        axios
        .get(serieTV_url)
        .then(response => {

        console.log(response.data.results);

        this.serieTV = response.data.results

        })
        .catch(error => {

        console.error(error);
        
        })
    },



  

})