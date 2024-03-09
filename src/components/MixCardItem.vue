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

        <!-- Copertina del film o della serie TV -->
        <img class="poster" :src="mix.poster_path ? `https://image.tmdb.org/t/p/w342${mix.poster_path}` : '/image.jpg'" alt="Poster">

        <div class="information">

            <!-- Titolo del film o della serie TV -->
            <div class="title">

                <div class="category">Titolo:</div>
                <div>{{ mix.title || mix.name }}</div>

            </div>

            <!-- Titolo originale del film o della serie TV -->
            <div class="original_title" v-if="mix.title !== mix.original_title || mix.name !== mix.original_name">

                <div class="category">Titolo originale:</div>
                <!-- Condizione che lascia il titolo originale o nome originale solo se è diverso da titolo o nome -->
                <div >{{ mix.original_title || mix.original_name }}</div>

            </div>

            <!-- Lingua del film o della serie TV -->
            <div class="language">

                <div class="category">Lingua:</div>
                <img style="width: 20px;" :src="state.getFlags(mix.original_language)" :alt="mix.original_language">

            </div>
            
            <!-- Voto del film o della serie TV -->
            <div class="star_vote_average">

                <div class="category">Voto:</div>

                <!-- Calcolo del numero di stelle piene -->
                <span v-for="i in Math.ceil(mix.vote_average / 2)">
                    <i class="fa-solid fa-star"></i>
                </span>

                <!-- Calcolo del numero di stelle vuote -->
                <span v-for="i in (5 - Math.ceil(mix.vote_average / 2))">
                    <i class="fa-regular fa-star"></i>
                </span>

            </div>

            <!-- Overview del film o della serie TV -->
            <div class="overview" v-if="mix.overview">

                <div class="category">Overview:</div>
                <div>{{ mix.overview }}</div>

            </div>

        </div>

    </div>

</template>


<style></style>