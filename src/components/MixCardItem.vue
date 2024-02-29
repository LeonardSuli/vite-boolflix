<script>

import {state} from '../state.js'

export default{
  name: 'MixCardItem',

  data(){
        return{
            
            state,
            
        }
    },

    props: {

        mix: Object

    }

}
</script>


<template>

    <div class="mix_card">

        <img :src="mix.poster_path ? `https://image.tmdb.org/t/p/w342${mix.poster_path}` : '/image.jpg'" alt="Poster">

        <div class="information">

            <div>Titolo: {{ mix.title || mix.name }}</div>

            <!-- Condizione che lascia il titolo originale o nome originale solo se è diverso da titolo o nome -->
            <div v-if="mix.title !== mix.original_title || mix.name !== mix.original_name">Titolo originale: {{ mix.original_title || mix.original_name }}</div>
            
            <div>Lingua: {{ mix.original_language }}</div>
            <div>Lingua: <img style="width: 20px;" :src="`/flags/${mix.original_language === 'en' ? 'gb' : mix.original_language }.svg`" alt="Bandierina stato"></div>
            <div>Voto: {{ mix.vote_average }}</div>

            <div class="star_vote_average">

                <span>Voto:</span>

                <!-- Calcolo del numero di stelle piene -->
                <span v-for="i in Math.ceil(mix.vote_average / 2)">
                    <i class="fa-solid fa-star"></i>
                </span>

                <!-- Calcolo del numero di stelle vuote -->
                <span v-for="i in (5 - Math.ceil(mix.vote_average / 2))">
                    <i class="fa-regular fa-star"></i>
                </span>

            </div>

            <div>Overview: {{ mix.overview }}</div>

        </div>

    </div>

</template>


<style scoped></style>
