<script>

import axios from 'axios';

import {state} from '../state.js'

export default{
    name: 'AppHeader',

    data(){
        return{

            state,

            searchText: '',
        }
    },

    methods: {

        filterResults(){

            // let url = `${state.api_url_movies}&query=${this.searchText}`

            // url = `${state.api_url_serieTV}&query=${this.searchText}`

            const movie_url = `${state.api_url_movies}&query=${this.searchText}`;
            const serieTV_url = `${state.api_url_serieTV}&query=${this.searchText}`;


            // console.log(url);


            state.getMovies(movie_url)

            state.getSerieTV(serieTV_url)

        }
    }
}
</script>


<template>

    <div class="searchbar">

        <input type="text" placeholder="Cerca un film o una serie TV..." v-model="searchText" @keyup.enter="filterResults">

        <button @click="filterResults">Cerca</button>

    </div>

</template>


<style scoped>
</style>