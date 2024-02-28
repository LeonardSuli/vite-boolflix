<script>

import {state} from '../state.js'

export default{
    name: 'MoviesList',
    
    data(){
        return{
            
            state,
            
        }
    },
    
    mounted(){
        
        state.getMovies(state.api_url_movies)
        
    }, 
    
}

</script>


<template>

    <section class="movies" v-if="!state.hide_cards">
            
        <div class="container">

            <h2>Film</h2>

            <div class="row">
                
                <div class="col" v-for="movie in state.movies" :key="movie.id">
                        
                    <div class="movie_card">    <!-- // v-if="movie.vote_average !== 0" -->
    
                        <img :src="movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : '/image.jpg'" alt="Poster">
    
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

            </div>

        </div>

    </section> 

    <div v-else></div>
    
</template>


<style scoped></style>