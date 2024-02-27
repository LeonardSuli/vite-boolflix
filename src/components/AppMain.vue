<script>

import {state} from '../state.js';

import MixList from './MixList.vue';
import MoviesList from './MoviesList.vue';
import SerieTVList from './SerieTVList.vue';

export default{
    name: 'AppMain',

    components:{
        MixList,
        MoviesList,
        SerieTVList,
    },

    data(){
        return{

            state,

        }
    },

}
</script>


<template>

    <main>

        <MixList></MixList>

        <div>Risultati trovati: {{ state.movies.length + state.serieTV.length }}</div>

        <MoviesList></MoviesList>

        <SerieTVList></SerieTVList>

    </main>

</template>


<style scoped>

main{
    padding-top: 100px;
    background-color: rgb(53, 34, 34);
}

</style>