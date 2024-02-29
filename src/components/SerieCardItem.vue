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
                            
        <img :src="serie.poster_path ? `https://image.tmdb.org/t/p/w200${serie.poster_path}` : '/image.jpg'" alt="Poster">
    
        <div class="information">
    
            <div>Titolo: {{ serie.name }}</div>

            <!-- Condizione che lascia il titolo originale solo se è diverso da titolo -->
            <div v-if="serie.name !== serie.original_name">Titolo originale: {{ serie.original_name }}</div>

            <!-- <div>Nome originale: {{ serie.original_name }}</div> -->
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

            <div>Overview: {{ serie.overview }}</div>
    
        </div>
                                
    </div>

</template>


<style scoped></style>
