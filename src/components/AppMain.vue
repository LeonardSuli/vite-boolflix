<script>

import axios from 'axios';

export default{
    name: 'AppMain',

    data(){
        return{

            api_url: 'https://api.themoviedb.org/3/search/movie?api_key=a7166e72bbdeac5df51ab7b3fc97c36e&query=ritorno+al+futuro',
            movies: [],

        }
    },


    mounted(){

        axios
        .get(this.api_url)
        .then(response => {

        console.log(response.data.results);

        this.movies = response.data.results

        })
        .catch(error => {

        console.error(error);
        
        })

    }



}
</script>


<template>

    <div class="movie_card" v-for="movie in movies">

        <div>Titolo: {{ movie.title }}</div>
        <div>Titolo originale: {{ movie.original_title }}</div>
        <div>Lingua: {{ movie.original_language }}</div>
        <div>Voto: {{ movie.vote_average }}</div>

    </div>

</template>


<style scoped>
</style>