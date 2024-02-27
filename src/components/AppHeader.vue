<script>

import AppLogo from './AppLogo.vue';
import NavBar from './NavBar.vue';
import SearchBarFilter from './SearchBarFilter.vue';

export default{
    name: 'AppHeader',

    components:{
        AppLogo,
        NavBar,
        SearchBarFilter,
    }
}
</script>


<template>

    <header>

        <AppLogo></AppLogo>
    
        <NavBar></NavBar>
    
        <SearchBarFilter></SearchBarFilter>

    </header>

</template>


<style scoped>

header{
    display: flex;
    background-color: black;
    align-items: center;
    padding: 0.5rem 1rem;
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
}

</style>