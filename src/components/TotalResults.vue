<script>

import {state} from '../state.js'

export default{
  name: 'TotalResults',

    data(){
        return{
            
            state,
            
        }
    },

    computed:{

        getTotalResults(){

            return state.movies.length + state.serieTV.length

        }
    }
}
</script>


<template>

    <h3 class="results" v-if="!state.hide_cards">Risultati trovati: {{ getTotalResults }}</h3>

    <div v-else></div>

</template>


<style scoped>

.results{
    margin-left: 2.3rem;
    margin-bottom: 1rem;
    color: rgb(220, 26, 40);
}

</style>
