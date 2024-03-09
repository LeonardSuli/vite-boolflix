<script>

import {state} from '../state.js'

export default{
  name: 'MovieCardItem',

  data(){
        return{
            
            state,
            
        }
    },

    props: {

        movie: Object

    },

}
</script>


<template>

    <div class="movie_card"> 
        
        <!-- Copertina del film -->
        <img class="poster" :src="movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : '/image.jpg'" alt="Poster">

        <div class="information">

            <!-- Titolo del film -->
            <div class="title">

                <div class="category">Titolo:</div>
                <div>{{ movie.title }}</div>

            </div>

            <!-- Titolo originale del film -->
            <div class="original_title" v-if="movie.title !== movie.original_title">

                <div class="category">Titolo originale:</div>
                <!-- Condizione che lascia il titolo originale solo se è diverso da titolo -->
                <div >{{ movie.original_title }}</div>

            </div>

            <!-- Lingua del film -->
            <div class="language">

                <div class="category">Lingua:</div>
                <img style="width: 20px;" :src="state.getFlags(movie.original_language)" :alt="movie.original_language">

            </div>

            <!-- Voto del film -->
            <div class="star_vote_average">

                <div class="category">Voto:</div>

                <!-- Calcolo del numero di stelle piene -->
                <span v-for="i in Math.ceil(movie.vote_average / 2)">
                    <i class="fa-solid fa-star"></i>
                </span>

                <!-- Calcolo del numero di stelle vuote -->
                <span v-for="i in (5 - Math.ceil(movie.vote_average / 2))">
                    <i class="fa-regular fa-star"></i>
                </span>
                        
            </div>

            <!-- Overview del film -->
            <div class="overview" v-if="movie.overview">

                <div class="category">Overview:</div>
                <div>{{ movie.overview }}</div>

            </div>

        </div>

    </div>

</template>


<style scoped></style>