<script>

import axios from 'axios';

import {state} from '../state.js'

export default{
    name: 'SearchBar',

    data(){
        return{

            state,

            searchText: '',
        }
    },

    methods: {

        // let url = `${state.api_url_movies}&query=${this.searchText}`

        // url = `${state.api_url_serieTV}&query=${this.searchText}`

        filterResults(){


            const movie_url = `${state.api_url_movies}&query=${this.searchText}`;
            const serieTV_url = `${state.api_url_serieTV}&query=${this.searchText}`;
            // const mix_url = state.api_url_mix


            // console.log(url);


            state.getMovies(movie_url)

            state.getSerieTV(serieTV_url)

            // state.getMix(mix_url)

            state.hide_mix_card = false

        }
    }
}
</script>


<template>

    <div class="searchbar">

        <input type="text" placeholder="Cerca un film o una serie TV..." v-model="searchText" @keyup.enter="filterResults">

        <i @click="filterResults" class="fa-solid fa-magnifying-glass"></i>

    </div>

</template>


<style scoped>

.searchbar{
    margin-left: auto;
    margin-right: 1rem;
}

input{
    margin-right: 1rem;
    color: white;
    background-color: rgb(48, 49, 52);
    padding: 0.2rem ;
    border: none;
    width: 200px;
}

i{
    cursor: pointer;
}

</style>