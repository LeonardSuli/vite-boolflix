<script>

import {state} from '../state.js';

import MovieCardItem from './MovieCardItem.vue';

export default{
    name: 'MoviesList',

    components:{

        MovieCardItem

    },
    
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

    <section class="movies" v-if="!state.hide_cards && state.movies.length > 0">
            
        <div class="container">

            <h1>Film</h1>

            <div class="row">
                
                <div class="col" v-for="movie in state.movies" :key="movie.id">

                    <MovieCardItem :movie="movie"></MovieCardItem>
                        
                </div>

            </div>

        </div>

    </section> 

    <div v-else></div>
    
</template>


<style scoped></style>