<template>
    <header>
        <img alt="Pokedex" src="../assets/Pokeball.png">
        <h1>Pok&#233;dex</h1>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    margin: 1rem;
    display: grid;
    grid-template-columns: 110px 1fr
}
header img {
    width: 110px;
    float: left;
}
header h1 {
    margin: 3.5rem 0 0 2.25rem;
}
</style>
