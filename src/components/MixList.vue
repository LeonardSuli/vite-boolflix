<script>

import {state} from '../state.js'

export default{
    name: 'MixList',
    
    data(){
        return{
            
            state,
            
        }
    },
    
    mounted(){
        
        state.getMix(state.api_url_mix)
        
    }, 
    
}

</script>


<template>

    <section class="mix">
        
        <div class="container" v-if="state.hide_mix_card" >

            <h2>I più popolari su Boolflix</h2>

            <div class="row">

                <div class="col" v-for="mix in state.mix" :key="mix.id">
                    
                    <div class="mix_card">    <!-- // v-if="mix.vote_average !== 0" -->

                        <img :src="mix.poster_path ? `https://image.tmdb.org/t/p/w200${mix.poster_path}` : '/image.jpg'" alt="Poster">

                        <div class="information">

                            <div>Titolo: {{ mix.title || mix.name }}</div>
                            <div>Titolo originale: {{ mix.original_title || mix.original_name }}</div>
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

                        </div>
                
                    </div>

                </div>
                
                
            </div>
            
        </div>
        
        <div v-else></div>

    </section>
   
</template>


<style scoped></style>