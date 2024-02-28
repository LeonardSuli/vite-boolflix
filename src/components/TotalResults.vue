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

    <div>Risultati trovati: {{ getTotalResults }}</div>

</template>


<style scoped></style>
