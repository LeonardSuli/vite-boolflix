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

    <div v-if="!state.hide_cards">Risultati trovati: {{ getTotalResults }}</div>

    <div v-else></div>

</template>


<style scoped></style>
