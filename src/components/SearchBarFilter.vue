<script>

import {state} from '../state.js'

export default{
    name: 'SearchBarFilter',

    data(){
        return{

            state,

        }
    },

    methods: {

        filterResults(){

            const movie_url = `${state.api_url_movies}&query=${state.searchText}`;
            const serieTV_url = `${state.api_url_serieTV}&query=${state.searchText}`;

            state.getMovies(movie_url);
            state.getSerieTV(serieTV_url);

            state.hide_cards = false

        }
    }
}
</script>


<template>

    <div class="searchbar">

        <input type="text" placeholder="Cerca un film o una serie TV..." v-model="state.searchText" @keyup.enter="filterResults">

        <i @click="filterResults" class="fa-solid fa-magnifying-glass"></i>

    </div>

</template>


<style>

.searchbar{
    margin-left: auto;
    margin-right: 1rem;
}

input{
    margin-right: 1rem;
    color: white;
    background-color: rgb(48, 49, 52);
    padding: 0.3rem ;
    border: none;
    width: auto;
}

i{
    cursor: pointer;
}

</style>