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

    <h3 class="results" v-if="!state.hide_cards && getTotalResults > 0">Risultati trovati: {{ getTotalResults }}</h3>

    <div v-else></div>

    <h3 class="no_results" v-if="!state.hide_cards && getTotalResults === 0">Nessun risultato trovato</h3>

</template>


<style scoped>

.results{
    margin-left: 2.3rem;
    margin-bottom: 1rem;
    color: yellowgreen;
}

.no_results{
    margin-left: 2.3rem;
    margin-bottom: 1rem;
    color: red;
}

</style>
