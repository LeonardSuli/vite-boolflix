<script>

import {state} from '../state.js'

import SerieCardItem from './SerieCardItem.vue'

export default{
    name: 'SerieTVList',

    components:{

        SerieCardItem

    },
    
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

            <h1>Serie TV</h1>

            <div class="row">
                    
                <div class="col" v-for="serie in state.serieTV" :key="serie.id">

                    <SerieCardItem :serie="serie"></SerieCardItem>

                </div>
                        
            </div>

        </div>

    </section>

    <div v-else></div>
    
</template>


<style scoped></style>