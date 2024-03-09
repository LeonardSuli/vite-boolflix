<script>

import {state} from '../state.js';

import MixList from './MixList.vue';
import MoviesList from './MoviesList.vue';
import SerieTVList from './SerieTVList.vue';
import TotalResults from './TotalResults.vue';

export default{
    name: 'AppMain',

    components:{
        MixList,
        MoviesList,
        SerieTVList,
        TotalResults,
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

        <TotalResults></TotalResults>
        
        <MoviesList></MoviesList>

        <SerieTVList></SerieTVList>

    </main>

</template>


<style scoped>

main{
    padding-top: 100px;
}

</style>