<script>

import {state} from '../state.js'

import MixCardItem from './MixCardItem.vue'

export default{
    name: 'MixList',

    components:{

        MixCardItem

    },
    
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

    <section class="mix" v-if="state.hide_cards">
        
        <div class="container">

            <h1>I più popolari su Boolflix</h1>

            <div class="row">

                <div class="col" v-for="mix in state.mix" :key="mix.id">

                    <MixCardItem :mix="mix"></MixCardItem>

                </div>            
                
            </div>
            
        </div>
        
    </section>

    <div v-else></div>
   
</template>


<style scoped></style>