<script>

import axios from 'axios';

import {state} from '../state.js'

export default{
    name: 'AppMain',

    data(){
        return{

            state,

            // movies: [],


        }
    },

    mounted(){

        state.getMovies(state.api_url)

    }, 

    methods: {


    },
    
}
</script>


<template>





    <section class="movie_cards">

        <div class="container">

            <div class="row">

                <div class="col" v-for="movie in state.movies" :key="movie.id">
                    
                    <div class="movie_card">
                
                        <div>Titolo: {{ movie.title }}</div>
                        <div>Titolo originale: {{ movie.original_title }}</div>
                        <div>Lingua: {{ movie.original_language }}</div>
                        <div>Voto: {{ movie.vote_average }}</div>
                
                    </div>

                </div>

            </div>

        </div>

    </section>


</template>


<style scoped>

.movie_card{
    margin: 1rem;
}
</style>