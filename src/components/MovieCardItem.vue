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

    }

}
</script>


<template>

    <div class="movie_card"> 
        
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

</template>


<style scoped></style>
