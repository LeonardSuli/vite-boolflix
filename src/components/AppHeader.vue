<script>

import AppLogo from './AppLogo.vue';
import SearchBarFilter from './SearchBarFilter.vue';
import NavBar from './NavBar.vue';

export default{
    name: 'AppHeader',
    components:{
        AppLogo,
        SearchBarFilter,
        NavBar
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