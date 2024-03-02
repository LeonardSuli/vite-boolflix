<script>

import {state} from '../state.js'

import MixCardItem from './MixCardItem.vue'

import LoadingIcon from './LoadingIcon.vue'

export default{
    name: 'MixList',

    components:{
    MixCardItem,
    LoadingIcon,
},
    
    data(){
        return{
            
            state,
            
        }
    },
    
    mounted(){

        setTimeout(() =>{

            state.getMix(state.api_url_mix)

        }, 3000)
        
        
    }, 
    
}

</script>


<template>

    <section class="mix" v-if="state.hide_cards">
        
        <div class="container">

            <h1>I più popolari su Boolflix</h1>

            <div class="row" v-if="!state.loading">

                <div class="col" v-for="mix in state.mix" :key="mix.id">

                    <MixCardItem :mix="mix"></MixCardItem>

                </div>            
                
            </div>

            <LoadingIcon v-else></LoadingIcon>

        </div>
        
    </section>

    <div v-else></div>
   
</template>


<style scoped></style>