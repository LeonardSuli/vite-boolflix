<script>

import {state} from '../state.js'

export default{
    name: 'SerieTVList',
    
    data(){
        return{
            
            state,
            
        }
    },
    
    mounted(){
        
        state.getSerieTV(state.api_url_serieTV)
        
    }, 
    
}

</script>


<template>

    <section class="serieTV" v-if="!state.hide_cards">

        <div class="container">

            <h2>Serie TV</h2>

            <div class="row">
                    
                <div class="col" v-for="serie in state.serieTV" :key="serie.id">
                        
                    <div class="serieTV_card">        <!-- v-if="serie.vote_average !== 0" -->
                            
                        <img :src="serie.poster_path ? `https://image.tmdb.org/t/p/w200${serie.poster_path}` : '/image.jpg'" alt="Poster">

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

    <div v-else></div>
    
</template>


<style scoped></style>