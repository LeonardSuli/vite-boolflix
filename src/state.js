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

    loading: true,

    
    // Funzione con cui richiamo la lista di film con una chiamata ajax
    getMovies(api_url_movies){
        
        axios
        .get(api_url_movies)
        .then(response => {

            console.log(response.data.results);

            this.movies = response.data.results

            // this.loading = false

        })
        .catch(error => {

            console.error(error);
        
        })
    },


    // Funzione con cui richiamo la lista di serieTV con una chiamata ajax
    getSerieTV(api_url_serieTV){
        
        axios
        .get(api_url_serieTV)
        .then(response => {

            console.log(response.data.results);

            this.serieTV = response.data.results

            // this.loading = false

        })
        .catch(error => {

            console.error(error);
        
        })
    },


    // Funzione con cui richiamo una lista di film e serieTV con una chiamata ajax
    // da inserire appena si aaccede al sito
    getMix(api_url_mix){
        
        axios
        .get(api_url_mix)
        .then(response => {

            console.log(response.data.results);

            this.mix = response.data.results

            this.loading = false

        })
        .catch(error => {

            console.error(error);
        
        })
    },


    // Funzione che restituisce la bandiera in base alla lingua originale
    getFlags(original_language){

        return `/flags/${
        original_language === 'en' ? 'gb' : 
        original_language === 'cs' ? 'cz' :
        original_language === 'ja' ? 'jp' : 
        original_language === 'ko' ? 'kr' :
        original_language === 'zh' ? 'cn' : 
        original_language === 'hi' ? 'in' : 
        original_language}.svg`

    }

})