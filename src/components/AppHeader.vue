<script>

import AppLogo from './AppLogo.vue';
import SearchBar from './SearchBar.vue';

export default{
    name: 'AppHeader',
    components:{
        AppLogo,
        SearchBar,
    }
}
</script>


<template>
    
    <AppLogo></AppLogo>

    <SearchBar></SearchBar>

</template>


<style scoped></style>