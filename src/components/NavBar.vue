<script>
export default{
    name: 'NavBar',
}
</script>


<template>
    
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Film</a></li>
            <li><a href="#">Serie TV</a></li>
        </ul>
    </nav>

</template>


<style scoped>

ul{
    display: flex;
    margin-left: 4rem;
}

li{
    margin-left: 2rem;
}

a{
    transition: all 0.5s;
}

li a:hover{
    color: red;
}

</style>