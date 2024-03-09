<script>

import {state} from '../state.js'

export default{
  name: 'SerieCardItem',

  data(){
        return{
            
            state,
            
        }
    },

    props: {

        serie: Object

    }

}
</script>


<template>

    <div class="serieTV_card">
        
        <!-- Copertina della serie TV -->
        <img class="poster" :src="serie.poster_path ? `https://image.tmdb.org/t/p/w200${serie.poster_path}` : '/image.jpg'" alt="Poster">
    
        <div class="information">

            <!-- Titolo della serie TV -->
            <div class="title">

                <div class="category">Titolo:</div>
                <div>{{ serie.name }}</div>

            </div>

            <!-- Titolo originale della serie TV -->
            <div class="original_title" v-if="serie.name !== serie.original_name">

                <div class="category">Titolo originale:</div>
                <!-- Condizione che lascia il titolo originale solo se è diverso da titolo -->
                <div >{{ serie.original_name }}</div>

            </div>

            <!-- Lingua della serie TV -->
            <div class="language">

                <div class="category">Lingua:</div>
                <img style="width: 20px;" :src="state.getFlags(serie.original_language)" :alt="serie.original_language">

            </div>
            
            <!-- Voto della serie TV -->
            <div class="star_vote_average">

                <div class="category">Voto:</div>
    
                <!-- Calcolo del numero di stelle piene -->
                <span v-for="i in Math.ceil(serie.vote_average / 2)">
                    <i class="fa-solid fa-star"></i>
                </span>
    
                <!-- Calcolo del numero di stelle vuote -->
                <span v-for="i in (5 - Math.ceil(serie.vote_average / 2))">
                    <i class="fa-regular fa-star"></i>
                </span>
    
            </div>

            <!-- Overview del film -->
            <div class="overview" v-if="serie.overview">

                <div class="category">Overview:</div>
                <div>{{ serie.overview }}</div>

            </div>

        </div>
                                
    </div>

</template>


<style scoped></style>