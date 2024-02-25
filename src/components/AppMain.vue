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

    <main>

        <section class="movie_cards">
    
            <div class="container">
    
                <div class="row">
    
                    <div class="col" v-for="movie in state.movies" :key="movie.id">
                        
                        <div class="movie_card">    <!-- // v-if="movie.vote_average !== 0" -->
    
                            <img :src="movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : '/image.jpg'" alt="">
    
                            <div class="information">
    
                                <div>Titolo: {{ movie.title }}</div>
                                <div>Titolo originale: {{ movie.original_title }}</div>
                                <div>Lingua: {{ movie.original_language }}</div>
                                <div>Lingua: <img style="width: 20px;" :src="`/flags/${movie.original_language === 'en' ? 'gb' : movie.original_language }.svg`" alt="Bandierina stato"></div>
                                <div>Voto: {{ movie.vote_average }}</div>
        
                                <div class="star_vote_average">
        
                                    <span>Voto:</span>
        
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
    
                    
                        </div>
    
                    </div>
                        
                    <div class="col" v-for="serie in state.serieTV" :key="serie.id">
                            
                        <div class="serieTV_card">        <!-- v-if="serie.vote_average !== 0" -->
                                
                            <img :src="serie.poster_path ? `https://image.tmdb.org/t/p/w200${serie.poster_path}` : '/image.jpg'" alt="">
    
                            <div class="information">
    
                                <div>Nome: {{ serie.name }}</div>
                                <div>Nome originale: {{ serie.original_name }}</div>
                                <div>Lingua: {{ serie.original_language }}</div>
                                <div>Lingua: <img style="width: 20px;" :src="`/flags/${serie.original_language === 'en' ? 'gb' : serie.original_language }.svg`" alt="Bandierina stato"></div>
                                <div>Voto: {{ serie.vote_average }}</div>
        
                                <div class="star_vote_average">
        
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
                            
                        
                    </div>
    
            </div>
    
        </section>

    </main>

</template>


<style scoped>

main{
    padding-top: 100px;
    background-color: rgb(53, 34, 34);
}

.movie_card, .serieTV_card{
    margin: 1rem;
    position: relative;
}

.information{
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
}

.movie_card:hover .information, 
.serieTV_card:hover .information{
    display: block;
    background-color: gray;
}
</style>