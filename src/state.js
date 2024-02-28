import {reactive} from 'vue';

import axios from 'axios';

export const state = reactive({

    api_url_movies: 'https://api.themoviedb.org/3/search/movie?api_key=a7166e72bbdeac5df51ab7b3fc97c36e',
    movies: [],

    api_url_serieTV: 'https://api.themoviedb.org/3/search/tv?api_key=a7166e72bbdeac5df51ab7b3fc97c36e',
    serieTV: [],

    api_url_mix: 'https://api.themoviedb.org/3/trending/all/day?api_key=e99307154c6dfb0b4750f6603256716d',
    mix: [],

    searchText: '',


    hide_cards: true,



    // Funzione con cui richiamo la lista di film con una chiamata ajax
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



    // Funzione con cui richiamo la lista di serieTV con una chiamata ajax
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


    // Funzione con cui richiamo una lista di film e serieTV con una chiamata ajax
    // da inserire appena si aaccede al sito
    getMix(mix_url){
        
        axios
        .get(mix_url)
        .then(response => {

        console.log(response.data.results);

        this.mix = response.data.results

        })
        .catch(error => {

        console.error(error);
        
        })
    },



  

})