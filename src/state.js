import {reactive} from 'vue';

import axios from 'axios';

export const state = reactive({

    api_url: 'https://api.themoviedb.org/3/search/movie?api_key=a7166e72bbdeac5df51ab7b3fc97c36e',

    movies: [],



    getMovies(url){
        
        axios
        .get(url)
        .then(response => {

        console.log(response.data.results);

        this.movies = response.data.results

        })
        .catch(error => {

        console.error(error);
        
        })
    }



  

})