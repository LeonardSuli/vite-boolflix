<script>

import axios from 'axios';

import {state} from '../state.js'

export default{
    name: 'AppMain',

    data(){
        return{

            state,


        }
    },

    mounted(){

        state.getMovies(state.api_url_movies)

        state.getSerieTV(state.api_url_serieTV)

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
                    
                    <div class="movie_card">    <!-- // v-if="movie.vote_average !== 0" -->

                        <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt="">
                        <div>Titolo: {{ movie.title }}</div>
                        <div>Titolo originale: {{ movie.original_title }}</div>
                        <div>Lingua: {{ movie.original_language }}</div>
                        <div>Lingua: <img style="width: 20px;" :src="`/flags/${movie.original_language === 'en' ? 'gb' : movie.original_language }.svg`" alt="Bandierina stato"></div>
                        <div>Voto: {{ movie.vote_average }}</div>

                        <!-- Calcolo del numero di stelle piene -->
                        <span v-for="i in Math.ceil(movie.vote_average / 2)">
                            <i class="fa-solid fa-star"></i>
                        </span>

                        <!-- Calcolo del numero di stelle vuote -->
                        <span v-for="i in (5 - Math.ceil(movie.vote_average / 2))">
                            <i class="fa-regular fa-star"></i>
                        </span>
                
                    </div>

                </div>
                    
                <div class="col" v-for="serie in state.serieTV" :key="serie.id">
                        
                    <div class="serieTV_card">        <!-- v-if="serie.vote_average !== 0" -->
                            
                        <img :src="`https://image.tmdb.org/t/p/w200${serie.poster_path}`" alt="">-
                        <div>Nome: {{ serie.name }}</div>
                        <div>Nome originale: {{ serie.original_name }}</div>
                        <div>Lingua: {{ serie.original_language }}</div>
                        <div>Lingua: <img style="width: 20px;" :src="`/flags/${serie.original_language === 'en' ? 'gb' : serie.original_language }.svg`" alt="Bandierina stato"></div>
                        <div>Voto: {{ serie.vote_average }}</div>

                        <!-- Calcolo del numero di stelle piene -->
                        <span v-for="i in Math.ceil(serie.vote_average / 2)">
                            <i class="fa-solid fa-star"></i>
                        </span>

                        <!-- Calcolo del numero di stelle vuote -->
                        <span v-for="i in (5 - Math.ceil(serie.vote_average / 2))">
                            <i class="fa-regular fa-star"></i>
                        </span>
                            
                    </div>

                </div>
                        
                    
                </div>

        </div>

    </section>


</template>


<style scoped>

.movie_card, .serieTV_card{
    margin: 1rem;
}
</style>