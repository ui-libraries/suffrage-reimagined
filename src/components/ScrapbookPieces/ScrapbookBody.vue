<template>
<div class="scrapbook-body-container" role="main">
    <router-view />
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.scrapbook-body-container {
    min-height: 48rem;
    background-color: ghostwhite;
    position: relative;
    background-image: url('https://i.imgur.com/mNBhyUX.jpg');
    padding: 1em 2em;
}
</style>