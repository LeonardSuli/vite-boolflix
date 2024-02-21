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

            const url = `${state.api_url}&query=${this.searchText}`

            console.log(url);


            state.getMovies(url)

        }
    }
}
</script>


<template>

    <div class="searchbar">

        <input type="text" placeholder="Cerca un film..." v-model="searchText" @keyup.enter="filterResults">

        <button @click="filterResults">Cerca</button>

    </div>

</template>


<style scoped>
</style>